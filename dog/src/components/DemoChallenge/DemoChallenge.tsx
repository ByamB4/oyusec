import React from "react";
import { Input, Note, Chip } from "components";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import { useSnackbar } from "contexts/snackbar";
import { FAIL_SOLVE, FLAG_PLACEHOLDER, SUCCESS_SOLVE } from "constants/Text";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

const Challenge: React.FC<Props> = ({
  className = "",
  style,
}): React.ReactElement => {
  const [expanded, setExpanded] = React.useState<boolean>(true);
  const [value, setValue] = React.useState<string>("");
  const { addSnackbar } = useSnackbar();

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (value === chall.solve) {
      addSnackbar(SUCCESS_SOLVE, "success");
    } else {
      addSnackbar(FAIL_SOLVE, "error");
    }
  };

  return (
    <Accordion
      disableGutters
      elevation={0}
      square
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      className={`rounded-lg bg-transparent text-white ${className}`}
      style={style}
    >
      <AccordionSummary
        className="rounded-t-lg"
        style={{
          background:
            "linear-gradient(90.01deg, #4E5D7F 0.01%, #6A4BFF 99.99%, #6A4BFF 99.99%)",
        }}
        // onClick={() => console.log("closing")}
      >
        <div className="flex justify-between items-center w-full">
          <div>
            <Typography variant="h6">{chall.name}</Typography>
          </div>
          <div className="flex gap-4">
            {chall.chips.map((it) => (
              <Chip key={it.id} color={handleChallengeChipColor(it.type)}>
                <Typography variant="body1" className="flex gap-1">
                  {handleChallengeIcon(it.type)}
                  <span className="font-medium">{it.label}</span>
                  <span>{it.value}</span>
                </Typography>
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
            className="w-full"
          />
          <Button type="submit" variant="contained" size="medium">
            Илгээх
          </Button>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

// Development purposes
import { v4 as uuidv4 } from "uuid";
import { handleChallengeChipColor, handleChallengeIcon } from "utils/handlers";

const chall = {
  name: "Day 4 - Twin towers ",
  title: "blhfrp{j0j_x33c_t01aT}",
  solve: "oyusec{w0w_k33p_g01nG}",
  description: "Нууцыг минь тайлж чадах уу 🤔",
  notes: [
    {
      id: uuidv4(),
      text: "blhfrp{j0j_x33c_t01aT}",
    },
  ],
  chips: [
    {
      type: "solved",
      id: uuidv4(),
      label: "Бодсон",
      value: "7",
    },
    {
      type: "score",
      id: uuidv4(),
      label: "Оноо",
      value: "960",
    },
  ],
};

export default Challenge;
