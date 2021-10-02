import React from "react";
import Tab from "components/Tab";
import Tabs from "components/Tabs";
import { IChallengeCategory } from "interfaces";
import { challCatIcon } from "utils/handlers";

interface Props {
  className?: string;
  curCat: number;
  catList: IChallengeCategory[];
  sCurCat: any;
}

const Categories: React.FC<Props> = ({
  className = "",
  curCat,
  sCurCat,
  catList,
}): React.ReactElement => {
  return (
    <Tabs
      value={curCat}
      onChange={(e: React.SyntheticEvent, _: number) => sCurCat(_)}
      className={`${className}`}
    >
      {catList.map((it) => (
        <Tab
          key={it.id}
          label={
            <div className="flex items-center gap-2">
              {challCatIcon(it)} {it.value}
            </div>
          }
        />
      ))}
    </Tabs>
  );
};

export default Categories;
