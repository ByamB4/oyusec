import { FC, ReactElement, useState, useEffect } from "react";
import Categories from "./Categories";
import { Challenge } from "components";
import { challengeList } from "utils/fake";
import { IChallenge, IChallengeCategory } from "interfaces";
import ActiveChallenge from "./ActiveChallenge";
import RequestedChallenge from "./RequestedChallenge";
import { ChallengeAPI } from "api";

interface Props {
  className?: string;
}

const Challenges: FC<Props> = ({ className = "" }): ReactElement => {
  const [currentCategory, setCurrentCategory] = useState<number>(0);
  const [currentChallenge, setCurrentChallenge] = useState<IChallenge>(
    {} as IChallenge
  );
  const [activeChallenge, setActiveChallenge] = useState<IChallenge>(
    {} as IChallenge
  );
  const [userInput, setUserInput] = useState<string>("");
  const [loadingCategories, setLoadingCategories] = useState<boolean>(true);
  const [categories, setCategories] = useState<IChallengeCategory[]>([]);

  // useEffect(() => {
  //   setUserInput("");
  //   if (currentChallenge) {
  //     setActiveChallenge(
  //       challengeList.find(
  //         (challenge: IChallenge) => challenge.id === currentChallenge.id
  //       )!
  //     );
  //   } else {
  //     setActiveChallenge({} as IChallenge);
  //   }
  // }, [currentChallenge]);
  useEffect(() => {
    const init = () =>
      ChallengeAPI.getCategories().then((data) => {
        console.log(data);
        if (data.status) {
          setCategories(data.record);
        }
        setLoadingCategories(false);
      });

    init();
  }, []);

  return (
    <div className={`flex flex-col gap-4 overflow-auto ${className}`}>
      {JSON.stringify(categories) === JSON.stringify({}) ? (
        <Categories
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          categoryList={categories}
        />
      ) : (
        <h1>Loading categories</h1>
      )}
      {/* <div className="grid grid-cols-2 gap-8 justify-items-center overflow-auto">
        <div
          className="flex flex-col items-center gap-4 w-full overflow-auto"
          style={{
            direction: "rtl",
          }}
        >
          {challengeList
            .filter(
              (it: IChallenge) =>
                it.category.id === challengeCategoryList[currentCategory].id
            )
            .map((it: IChallenge) => (
              <Challenge
                key={it.id}
                challenge={it}
                currentChallenge={currentChallenge}
                setCurrentChallenge={setCurrentChallenge}
                style={{
                  direction: "ltr",
                }}
              />
            ))}
        </div>

        {activeChallenge && (
          <>
            {activeChallenge?.category?.key === "requested" ? (
              <RequestedChallenge activeChallenge={activeChallenge} />
            ) : (
              <ActiveChallenge
                activeChallenge={activeChallenge}
                userInput={userInput}
                setUserInput={setUserInput}
              />
            )}
          </>
        )}
      </div> */}
    </div>
  );
};

export default Challenges;
