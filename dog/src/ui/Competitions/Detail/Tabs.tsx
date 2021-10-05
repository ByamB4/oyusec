import { Tab, Tabs } from "components";
import React from "react";
import { handleCompetitionTabIcon } from "utils/handlers";

interface Props {
  className?: string;
  currentTab: number;
  setCurrentTab: any;
  tabsList: any;
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
      {tabsList.map((it: any) => (
        <Tab
          key={it.id}
          // className="mx-4"
          label={
            <div className="flex items-center gap-2 text-base">
              {handleCompetitionTabIcon(it)}
              {it.value}
            </div>
          }
        />
      ))}
    </Tabs>
  );
};

export default RootTabs;
