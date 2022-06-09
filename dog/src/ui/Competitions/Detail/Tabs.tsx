import { Tab, Tabs } from "components";
import { ICompetitionTab } from "interfaces";
import React from "react";
import { handleCompetitionTabIcon } from "utils/handlers";

interface Props {
  className?: string;
  currentTab: number;
  setCurrentTab: any;
  tabsList: ICompetitionTab[];
}

const RootTabs: React.FC<Props> = ({
  className = "",
  currentTab,
  setCurrentTab,
  tabsList,
}): React.ReactElement => {
  return (
    <Tabs
      value={currentTab}
      onChange={(e: React.SyntheticEvent, _: number) => setCurrentTab(_)}
      className={`${className}`}
    >
      {tabsList.map((it: ICompetitionTab) => (
        <Tab
          key={it.id}
          label={
            <div className="flex items-center gap-2 text-base">
              {handleCompetitionTabIcon(it)}
              {it.name}
            </div>
          }
        />
      ))}
    </Tabs>
  );
};

export default RootTabs;
