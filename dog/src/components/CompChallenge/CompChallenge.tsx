/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import { FC, ReactElement, useState, FormEvent } from 'react'
import { Input, Note } from 'components'
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material'
import { FAIL_SOLVE, FLAG_PLACEHOLDER, SUCCESS_SOLVE } from 'constants/Text'
// Development purposes
import { v4 as uuidv4 } from 'uuid'
import { IChallenge, IChallengeNote } from 'interfaces'

interface Props {
  className?: string
  style?: React.CSSProperties
  challenge: IChallenge
  currentChallenge: IChallenge
  setCurrentChallenge: any
}

const CompChallenge: FC<Props> = ({
  className = '',
  style,
  challenge,
  currentChallenge,
  setCurrentChallenge,
}): ReactElement => {
  const [expanded, setExpanded] = useState<boolean>(challenge.id === currentChallenge.id)
  const [value, setValue] = useState<string>('')

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (value === chall.solve) {
      alert(1)
    } else {
      alert(0)
    }
  }

  return (
    <Accordion
      disableGutters
      elevation={0}
      square
      expanded={expanded}
      onChange={() => {
        setExpanded(!expanded), setCurrentChallenge(challenge)
      }}
      className={`rounded-lg bg-transparent text-white transition ease-in-out duration-500 ${className}`}
      style={style}
    >
      <AccordionSummary
        className={`rounded-t-lg  bg-primary-light1 ${!expanded && 'rounded-b-lg'}`}
        // onClick={() => console.log("closing")}
      >
        <div className="flex justify-between items-center w-full">
          <div>
            <Typography variant="h6">{challenge.name}</Typography>
          </div>
          {/* <div className="flex gap-4">
            {challenge.chips.map((it) => (
              <Chip key={it.id} color={handleChallengeChipColor(it.type)}>
                <Typography variant="body1" className="flex gap-1">
                  {handleChallengeIcon(it.type)}
                  <span className="font-medium">{it.label}</span>
                  <span>{it.value}</span>
                </Typography>
              </Chip>
            ))}
          </div> */}
        </div>
      </AccordionSummary>
      <AccordionDetails className="rounded-b-lg py-6 flex flex-col gap-6 bg-primary-dark1">
        <Typography variant="h6">{challenge.description}</Typography>
        {challenge.notes.map((it: IChallengeNote) => (
          <Note key={it.id} text={it.label} />
        ))}
        <form className="flex items-center gap-8" onSubmit={onSubmit}>
          <Input
            value={value}
            placeholder={FLAG_PLACEHOLDER}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            className="w-full"
          />
          <Button type="submit" variant="contained" size="medium">
            Илгээх
          </Button>
        </form>
      </AccordionDetails>
    </Accordion>
  )
}

const chall = {
  name: 'Day 4 - Twin towers ',
  title: 'blhfrp{j0j_x33c_t01aT}',
  solve: 'oyusec{w0w_k33p_g01nG}',
  description: 'Нууцыг минь тайлж чадах уу 🤔',
  notes: [
    {
      id: uuidv4(),
      text: 'blhfrp{j0j_x33c_t01aT}',
    },
  ],
  chips: [
    {
      type: 'solved',
      id: uuidv4(),
      label: 'Бодсон',
      value: '7',
    },
    {
      type: 'score',
      id: uuidv4(),
      label: 'Оноо',
      value: '960',
    },
  ],
}

export default CompChallenge
