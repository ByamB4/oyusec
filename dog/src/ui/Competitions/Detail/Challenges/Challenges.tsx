import { CompLayout } from "layouts";
import { FC, ReactElement } from "react";

interface Props {
  className?: string;
}

const Challenges: FC<Props> = ({ className = "" }): ReactElement => {
  return <CompLayout className={`${className}`}>Challenges</CompLayout>;
};

export default Challenges;
