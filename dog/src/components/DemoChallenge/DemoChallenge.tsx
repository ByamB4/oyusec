import * as React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";

import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { Button, Chip, IconButton } from "@material-ui/core";
import IconEye from "icons/Lined/Eye";
import { Input } from "components/Input";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

const Challenge: React.FC<Props> = ({ className = "", style }) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const [value, setValue] = React.useState<string>("");
  const chall = {
    name: "Day 4 - Twin towers ",
    title: "blhfrp{j0j_x33c_t01aT}",
    solve: "oyusec{w0w_k33p_g01nG}",
  };
  const handleChange =
    (panel: string) =>
    (
      event: React.SyntheticEvent,
      newExpanded: boolean
    ) => {
      setExpanded(newExpanded ? panel : false);
    };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("submitting", value);
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
            <Chip
              icon={
                <IconButton onClick={() => console.log("test")}>
                  <IconEye width={24} height={24} stroke="#fff" />
                </IconButton>
              }
              label={"Solved 7"}
              className="bg-primary-deepBlue"
              // onDelete={data.label === "React" ? undefined : handleDelete(data)}
            />
            <Chip
              icon={<IconEye stroke="#fff" />}
              label={"Score 960"}
              className="bg-primary-darkViolet"
              // onDelete={data.label === "React" ? undefined : handleDelete(data)}
            />
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
          <Typography variant="h4" className="p-2">
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
