import { Divider, Typography } from "@mui/material";
import {FC,ReactElement} from "react";
import Image from "next/image";
import { ICompetition } from "interfaces";
import moment from "moment";
import { safeCompetitionThumbnail } from "utils/safe";
import Link from "next/link";

interface Props {
  className?: string;
  competition: ICompetition;
}

const CompetitionThumbnail: FC<Props> = ({
  className = "",
  competition,
}): ReactElement => {
  return (
    <Link href={`/competitions/${competition.slug}`}>
      <div
        className={`flex flex-col bg-primary-light1 rounded-xl hover:cursor-pointer hover:transform hover:scale-90 duration-200 ${className}`}
      >
        <Image
          src={safeCompetitionThumbnail(competition)}
          height={150}
          width={300}
          objectFit="cover"
        />
        <div className="flex flex-col gap-3 p-4">
          <Typography variant="h4">{competition.name}</Typography>
          <Divider />
          <Typography variant="h7" className="text-text-grey text-center">
            Ends At {moment(competition.endDate).format("YYYY-MMMM-DD HH:MM")}
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export default CompetitionThumbnail;
