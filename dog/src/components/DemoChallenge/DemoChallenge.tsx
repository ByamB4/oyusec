import * as React from "react";
import IconEye from "icons/Lined/Eye";
import IconStar from "icons/Lined/Star";
import { Input } from "components/Input";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  // Chip,
  IconButton,
  Typography,
} from "@mui/material";
import { useSnackbar } from "contexts/snackbar";
import { FAIL_SOLVE, SUCCESS_SOLVE } from "constants/Text";
import Chip from "components/Chip";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

const Challenge: React.FC<Props> = ({ className = "", style }) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const [value, setValue] = React.useState<string>("");
  const { addSnackbar } = useSnackbar();

  // Just demo
  const chall = {
    name: "Day 4 - Twin towers ",
    title: "blhfrp{j0j_x33c_t01aT}",
    solve: "oyusec{w0w_k33p_g01nG}",
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

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
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      className={`rounded-lg bg-transparent text-white ${className}`}
      style={style}
    >
      <AccordionSummary
        aria-controls="challenge-header"
        className="rounded-t-lg"
        style={{
          background:
            "linear-gradient(90.01deg, #4E5D7F 0.01%, #6A4BFF 99.99%, #6A4BFF 99.99%)",
        }}
        onClick={() => console.log("closing")}
      >
        <div className="flex justify-between items-center w-full">
          <div>
            <Typography variant="h5">{chall.name}</Typography>
          </div>
          <div className="flex gap-4">
            <Chip color="deepBlue">
              <Typography variant="h5" className="flex gap-2">
                <IconEye />
                <span className="font-medium">Solved</span>
                <span>7</span>
              </Typography>
            </Chip>
            <Chip color="darkViolet">
              <Typography variant="h5" className="flex gap-2">
                <IconStar width={24} height={24} />
                <span className="font-medium">Score</span>
                <span>960</span>
              </Typography>
            </Chip>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails
        className="rounded-b-lg py-10 flex flex-col gap-8"
        style={{ background: "#26334E" }}
      >
        <Typography variant="h5">Нууцыг минь тайлж чадах уу 🤔</Typography>
        <div className="flex h-full bg-secondary-darkGrey ">
          <div className="h-auto w-2 bg-secondary-yellow" />
          <Typography variant="h5" className="p-2">
            {chall.title}
          </Typography>
        </div>
        <form className="flex items-center gap-8" onSubmit={onSubmit}>
          <Input
            value={value}
            onChange={(e: any) => setValue(e.target.value)}
            className="w-full h-full"
          />
          <Button type="submit" variant="contained" size="medium">
            Илгээх
          </Button>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default Challenge;
