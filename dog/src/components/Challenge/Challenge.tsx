import * as React from "react";
// import { styled } from "@material-ui/core/styles";
// import ArrowForwardIosSharpIcon from "@material-ui/core/icons-material/ArrowForwardIosSharp";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";

// import { MuiAccordionDetails } from "@material-ui/core/";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { IChallenge } from "interfaces";
import { Button, Chip, IconButton, Input, TextField } from "@material-ui/core";
import IconEye from "icons/Lined/Eye";

interface Props {
  challenge: IChallenge;
  className?: string;
  style?: React.CSSProperties;
}

const Challenge: React.FC<Props> = ({ challenge, className = "", style }) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
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
            <Typography variant="h5">{challenge.name}</Typography>
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
        <div className="flex gap-8">
          <TextField
            className="w-full"
            size="small"
            variant="outlined"
            placeholder="Хариугаа оруулна уу"
          ></TextField>
          <Button variant="primary">Илгээх</Button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Challenge;
