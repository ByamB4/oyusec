import * as React from "react";
import { styled } from "@material-ui/core/styles";
// import ArrowForwardIosSharpIcon from "@material-ui/core/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@material-ui/core/Accordion";
// import MuiAccordionSummary, {
//   AccordionSummaryProps,
// } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

// import { MuiAccordionDetails } from "@material-ui/core/";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { IChallenge } from "interfaces";
import { Input, TextField } from "@material-ui/core";

// const AccordionSummary = styled((props: AccordionSummaryProps) => (
//   <MuiAccordionSummary
//     // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   background:
//     "linear-gradient(90.01deg, #4E5D7F 0.01%, #6A4BFF 99.99%, #6A4BFF 99.99%)",
//   flexDirection: "row-reverse",
//   "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
//     transform: "rotate(90deg)",
//   },
//   "& .MuiAccordionSummary-content": {
//     marginLeft: theme.spacing(1),
//   },
// }));

interface Props {
  challenge: IChallenge;
  className?: string;
}

const Challenge: React.FC<Props> = ({ challenge, className = "" }) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <MuiAccordion
      disableGutters
      elevation={0}
      square
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      className={`rounded-lg bg-transparent text-white ${className}`}
    >
      <MuiAccordionSummary
        aria-controls="challenge-header"
        className="rounded-t-lg"
        id="panel1d-header"
        style={{
          background:
            "linear-gradient(90.01deg, #4E5D7F 0.01%, #6A4BFF 99.99%, #6A4BFF 99.99%)",
        }}
      >
        <Typography variant="h4">{challenge.name}</Typography>
      </MuiAccordionSummary>
      <MuiAccordionDetails
        className="rounded-b-lg py-10 flex flex-col gap-8"
        style={{ background: "#26334E" }}
      >
        <Typography variant="h5">Нууцыг минь тайлж чадах уу 🤔</Typography>
        <TextField
          className="w-full text-white"
          size="small"
          variant="outlined"
        ></TextField>
      </MuiAccordionDetails>
    </MuiAccordion>
  );
};

export default Challenge;
