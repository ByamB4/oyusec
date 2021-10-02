import React from "react";
import Tab from "components/Tab";
import Tabs from "components/Tabs";
import IconFileSearch from "icons/Filled/FileSearch";
import IconPuzzle from "icons/Filled/Puzzle";
import IconBug from "icons/Filled/Bug";
import IconLock from "icons/Filled/Lock";
import IconWeb from "icons/Filled/Web";
import IconCubeScan from "icons/Filled/CubeScan";
import IconSkull from "icons/Filled/Skull";

interface Props {
  className?: string;
}

const Challenges: React.FC<Props> = ({
  className = "",
}): React.ReactElement => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) =>
    setValue(newValue);

  return (
    <div className={`${className}`}>
      <Tabs value={value} onChange={handleChange}>
        {tabsList.map((tab) => (
          <Tab
            key={tab.id}
            label={
              <div className="flex items-center gap-2">
                {tab.icon} {tab.label}
              </div>
            }
          />
        ))}
      </Tabs>
    </div>
  );
};

// Development only
import { v4 } from "uuid";

const tabsList = [
  {
    id: v4(),
    label: "Forensics",
    icon: <IconFileSearch width={24} height={24} />,
  },
  {
    id: v4(),
    label: "Misc",
    icon: <IconPuzzle width={24} height={24} />,
  },
  {
    id: v4(),
    label: "Crypto",
    icon: <IconLock width={24} height={24} />,
  },
  {
    id: v4(),
    label: "Web",
    icon: <IconWeb width={24} height={24} />,
  },
  {
    id: v4(),
    label: "Pwn",
    icon: <IconSkull width={24} height={24} />,
  },
  {
    id: v4(),
    label: "Reversing",
    icon: <IconBug width={24} height={24} />,
  },
  {
    id: v4(),
    label: "Requested",
    icon: <IconCubeScan width={24} height={24} />,
  },
];
export default Challenges;
