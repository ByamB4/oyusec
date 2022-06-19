import React from 'react'
import { Button, Typography } from '@mui/material'
import { Input, Note } from 'components'
import { FLAG_PLACEHOLDER } from 'constants/Text'
import { IChallenge, IChallengeNote } from 'interfaces'

interface Props {
  className?: string
  activeChallenge: IChallenge
  userInput: string
  setUserInput: any
}

const ActiveChallenge: React.FC<Props> = ({
  className = '',
  activeChallenge,
  userInput,
  setUserInput,
}): React.ReactElement => {
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    alert('Удахгүй заснаа :')
    // if (userInput === activeChallenge.flag) {
    // } else {
    //   addSnackbar(FAIL_SOLVE, "error");
    // }
  }

  if (JSON.stringify(activeChallenge) === '{}') {
    return <></>
  }

  return (
    <div className={`flex flex-col gap-6 w-full ${className}`}>
      <Typography
        variant="h2"
        className="text-center"
        style={{
          color: '#F9EAE1',
        }}
      >
        {activeChallenge.name}
      </Typography>
      <Typography variant="h5" className="text-text-whiteGrey">
        {activeChallenge.description}
      </Typography>
      {activeChallenge.notes?.map((it: IChallengeNote) => (
        <Note key={it.id} text={it.label} />
      ))}
      <div className="flex justify-center w-full">
        <form className="flex items-center gap-8 w-5/6" onSubmit={onSubmit}>
          <Input
            value={userInput}
            placeholder={FLAG_PLACEHOLDER}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserInput(e.target.value)}
            className="w-full"
          />
          <Button type="submit" variant="contained" size="medium">
            Илгээх
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ActiveChallenge
