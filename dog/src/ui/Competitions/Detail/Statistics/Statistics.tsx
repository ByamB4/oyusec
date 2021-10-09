import { CompLayout } from "layouts";
import { FC, ReactElement } from "react";

interface Props {
  className?: string;
}

const Statistics: FC<Props> = ({ className = "" }): ReactElement => {
  return <CompLayout className={`${className}`}>Statistics</CompLayout>;
};

export default Statistics;
