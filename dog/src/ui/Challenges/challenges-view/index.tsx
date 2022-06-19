import { useState, useEffect } from 'react'
import { Challenge } from 'components'
import { IChallenge, IChallengeCategory } from 'interfaces'
import { ChallengeAPI } from 'api'
import ActiveChallenge from './active-challenge'
import Categories from './categories'
import RequestedChallenge from './requested-challenge'

interface Props {
  className?: string
}

const Challenges: React.FC<Props> = ({ className = '' }): React.ReactElement => {
  const [currentCategory, setCurrentCategory] = useState<number>(0)
  const [currentChallenge, setCurrentChallenge] = useState<IChallenge>({} as IChallenge)
  const [activeChallenge, setActiveChallenge] = useState<IChallenge>({} as IChallenge)
  const [userInput, setUserInput] = useState<string>('')
  const [categories, setCategories] = useState<IChallengeCategory[]>([])
  const [challenges, setChallenges] = useState<IChallenge[]>([])
  const [fetching, setFetching] = useState<boolean>(true)

  useEffect(() => {
    const init = () => {
      ChallengeAPI.getCategories().then((data) => {
        if (data.status) {
          setCategories(data.data)
        }
      })
      ChallengeAPI.getChallenges().then((data) => {
        if (data.status) {
          setChallenges(data.data)
        }
      })
      setFetching(false)
    }

    init()
  }, [])

  useEffect(() => {
    setUserInput('')
    if (currentChallenge) {
      setActiveChallenge(
        challenges.find((challenge: IChallenge) => challenge.id === currentChallenge.id) || ({} as IChallenge),
      )
    } else {
      setActiveChallenge({} as IChallenge)
    }
  }, [challenges, currentChallenge])

  return (
    <div className={`flex flex-col gap-4 overflow-auto ${className}`}>
      {fetching ? (
        <h1>Loading categories</h1>
      ) : (
        <Categories
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          categoryList={categories}
        />
      )}
      {fetching ? (
        <h1>Loading challenges</h1>
      ) : (
        <div className="grid grid-cols-2 gap-8 justify-items-center overflow-auto">
          <div
            className="flex flex-col items-center gap-4 w-full overflow-auto"
            style={{
              direction: 'rtl',
            }}
          >
            {challenges
              .filter((it: IChallenge) => it.category.id === categories[currentCategory].id)
              .map((it: IChallenge) => (
                <Challenge
                  key={it.id}
                  challenge={it}
                  currentChallenge={currentChallenge}
                  setCurrentChallenge={setCurrentChallenge}
                  style={{
                    direction: 'ltr',
                  }}
                />
              ))}
          </div>

          {activeChallenge && (
            <>
              {activeChallenge?.category?.key === 'requested' ? (
                <RequestedChallenge activeChallenge={activeChallenge} />
              ) : (
                <ActiveChallenge activeChallenge={activeChallenge} userInput={userInput} setUserInput={setUserInput} />
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Challenges
