import React from "react";
import Tab from "components/Tab";
import Tabs from "components/Tabs";
import { IChallengeCategory } from "interfaces";
import { handleChallengeCategoryIcon } from "utils/handlers/challenge";

interface Props {
  className?: string;
  currentCategory: number;
  categoryList: IChallengeCategory[];
  setCurrentCategory: any;
}

const Categories: React.FC<Props> = ({
  className = "",
  currentCategory,
  setCurrentCategory,
  categoryList,
}): React.ReactElement => {
  return (
    <Tabs
      value={currentCategory}
      onChange={(e: React.SyntheticEvent, _: number) => setCurrentCategory(_)}
      className={`${className}`}
    >
      {categoryList.map((it) => (
        <Tab
          key={it.id}
          label={
            <div className="flex items-center gap-2">
              {handleChallengeCategoryIcon(it)} {it.value}
            </div>
          }
        />
      ))}
    </Tabs>
  );
};

export default Categories;
