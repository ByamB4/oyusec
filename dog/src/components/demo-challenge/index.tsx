import { useState, CSSProperties, FC, ReactElement, FormEvent, ChangeEvent } from 'react'
import { Input, Note, Chip } from 'components'
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material'
import { FAIL_SOLVE, FLAG_PLACEHOLDER, SUCCESS_SOLVE } from 'constants/text'
// Development purposes
import { v4 as uuidv4 } from 'uuid'
import { handleChallengeChipColor, handleChallengeIcon } from 'utils/handlers'

interface Props {
  className?: string
  style?: CSSProperties
}

const DemoChallenge: FC<Props> = ({ className = '', style }): ReactElement => {
  const [expanded, setExpanded] = useState<boolean>(true)
  const [value, setValue] = useState<string>('')

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault()
    if (value === chall.solve) {
      alert('1')
    } else {
      alert('0')
    }
  }

  return (
    <Accordion
      disableGutters
      elevation={0}
      square
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      className={`rounded-xl ${className}`}
      style={style}
    >
      <AccordionSummary
        className={`rounded-t-lg ${!expanded && 'rounded-b-lg'}`}
        style={{
          background: 'linear-gradient(90.01deg, #4E5D7F 0.01%, #6A4BFF 99.99%, #6A4BFF 99.99%)',
        }}
      >
        <div className="flex justify-between items-center w-full">
          <Typography variant="h6">{chall.name}</Typography>
          <div className="flex gap-4">
            {chall.chips.map((it) => (
              <Chip key={it.id} color={handleChallengeChipColor(it.type)}>
                <div className="flex gap-1">
                  <Typography variant="body1">{handleChallengeIcon(it.type)}</Typography>
                  <Typography variant="body1">{it.label}</Typography>
                  <Typography variant="body1">{it.value}</Typography>
                </div>
              </Chip>
            ))}
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails className="rounded-b-lg py-6 flex flex-col gap-6 bg-primary-dark1">
        <Typography variant="h6">{chall.description}</Typography>
        {chall.notes.map((it) => (
          <Note key={it.id} text={it.text} />
        ))}
        <form className="flex items-center gap-8" onSubmit={onSubmit}>
          <Input
            value={value}
            placeholder={FLAG_PLACEHOLDER}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            className="w-full"
          />
          <Button type="submit">Илгээх</Button>
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

export default DemoChallenge
