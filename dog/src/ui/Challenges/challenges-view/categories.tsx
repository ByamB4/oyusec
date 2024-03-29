import { SyntheticEvent, FC, ReactElement } from "react";
import { Tab, Tabs } from "components";
import { IChallengeCategory } from "interfaces";
import { handleChallengeCategoryIcon } from "utils/handlers";

interface Props {
  className?: string;
  currentCategory: number;
  categoryList: IChallengeCategory[];
  setCurrentCategory: any;
}

const Categories: FC<Props> = ({
  className = "",
  currentCategory,
  setCurrentCategory,
  categoryList,
}): ReactElement => {
  return (
    <Tabs
      value={currentCategory}
      onChange={(e: SyntheticEvent, _: number) => setCurrentCategory(_)}
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
