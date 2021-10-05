import React from "react";
import About from "./About";
import Content from "./Content";
import Tabs from "./Tabs";
import { ICompetition } from "interfaces";
import { competitionDetailTabs } from "utils/fake";

interface Props {
  className?: string;
  competition: ICompetition;
}

const Competition: React.FC<Props> = ({
  className = "",
  competition,
}): React.ReactElement => {
  const [currentTab, setCurrentTab] = React.useState<number>(0);

  return (
    <div className={`${className}`}>
      <About competition={competition} />
      <Tabs
        currentTab={currentTab}
        tabsList={competitionDetailTabs}
        setCurrentTab={setCurrentTab}
      />
      <Content />
    </div>
  );
};

export default Competition;
