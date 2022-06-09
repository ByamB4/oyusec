import { Typography } from "@mui/material";
import { FC, ReactElement } from "react";

interface Props {
  className?: string;
}

const AddChallenge: FC<Props> = ({ className = "" }): ReactElement => {
  return (
    <div
      className={`flex gap-4 items-center bg-primary-light1 rounded-3xl p-5 hover:cursor-pointer hover:transform hover:scale-90 duration-200 ${className}`}
    >
      <div className="flex flex-col gap-1">
        <Typography variant="h6" className="uppercase text-text-grey">
          ХУВЬ НЭМЭР
        </Typography>
        <Typography variant="h3">Бодлого нэмэх</Typography>
      </div>
    </div>
  );
};

export default AddChallenge;
