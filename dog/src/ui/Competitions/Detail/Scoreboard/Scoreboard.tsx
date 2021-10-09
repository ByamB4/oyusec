import { FC, ReactElement } from "react";
import { CompLayout } from "layouts";

interface Props {
  className?: string;
}

const Scoreboard: FC<Props> = ({ className = "" }): ReactElement => {
  return (
    <CompLayout className={`bg-primary-light1 ${className}`}>
      scoreboard
    </CompLayout>
  );
};

export default Scoreboard;
