import { ICompetition } from "interfaces";
import React from "react";
import About from "./About";
import Contents from "./Contents";
import Tabs from "./Tabs";
import { ScoreboardUI } from "./Scoreboard";
import { ChallengesUI } from "./Challenges";
import { StatisticsUI } from "./Statistics";

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
      {competition.tabs[currentTab].type.key === "scoreboard" && (
        <ScoreboardUI />
      )}
      {competition.tabs[currentTab].type.key === "about" && (
        <Contents contents={competition.tabs[currentTab].contents} />
      )}
      {competition.tabs[currentTab].type.key === "challenges" && (
        <ChallengesUI />
      )}
      {competition.tabs[currentTab].type.key === "statistics" && (
        <StatisticsUI />
      )}
    </div>
  );
};

export default Competition;
