import { CompetitionThumbnail } from "components";
import { ICompetition } from "interfaces";
import React from "react";
import { competitionList } from "utils/fake";
import Tabs from "./Tabs";
import { competitionStateList } from "utils/fake";

interface Props {
  className?: string;
}

const Root: React.FC<Props> = ({ className = "" }): React.ReactElement => {
  const [currentTab, setCurrentTab] = React.useState<number>(0);

  return (
    <div className={`flex flex-col gap-4 overflow-auto ${className}`}>
      <Tabs
        currentTab={currentTab}
        stateList={competitionStateList}
        setCurrentTab={setCurrentTab}
      />
      <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 overflow-auto">
        {competitionList
          .filter(
            (it: ICompetition) =>
              it.state.id === competitionStateList[currentTab].id
          )
          .map((competition: ICompetition) => (
            <CompetitionThumbnail
              key={competition.id}
              competition={competition}
            />
          ))}
      </div>
    </div>
  );
};

export default Root;
