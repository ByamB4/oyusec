import { Tab, Tabs } from "components";
import { ICompetitionState } from "interfaces";
import React from "react";
import { handleCompetitionsRootTabIcon } from "utils/handlers";

interface Props {
  className?: string;
  currentTab: number;
  setCurrentTab: any;
  stateList: ICompetitionState[];
}

const RootTabs: React.FC<Props> = ({
  className = "",
  currentTab,
  setCurrentTab,
  stateList,
}): React.ReactElement => {
  return (
    <Tabs
      value={currentTab}
      onChange={(e: React.SyntheticEvent, _: number) => setCurrentTab(_)}
      className={`${className}`}
    >
      {stateList.map((it: ICompetitionState) => (
        <Tab
          key={it.id}
          // className="mx-4"
          label={
            <div className="flex items-center gap-2 text-base">
              {handleCompetitionsRootTabIcon(it)}
              {it.value}
            </div>
          }
        />
      ))}
    </Tabs>
  );
};

export default RootTabs;
