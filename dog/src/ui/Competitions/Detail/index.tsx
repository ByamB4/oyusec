import React from "react";
import About from "./About";
import Contents from "./Contents";
import Tabs from "./Tabs";
import { ICompetition } from "interfaces";

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
    <div className={`flex flex-col overflow-auto gap-4 ${className}`}>
      <About competition={competition} />
      <Tabs
        currentTab={currentTab}
        tabsList={competition.tabs}
        setCurrentTab={setCurrentTab}
      />
      <Contents contents={competition.tabs[currentTab].contents} />
    </div>
  );
};

export default Competition;
