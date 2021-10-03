import React from "react";
import Categories from "./Categories";
import Challenge from "components/Challenge";
import { categoryList, challengeList } from "utils/fake";

interface Props {
  className?: string;
}

const Challenges: React.FC<Props> = ({
  className = "",
}): React.ReactElement => {
  const [curCat, sCurCat] = React.useState<number>(0);
  const [currentChallenge, setCurrentChallenge] = React.useState<string>("");

  return (
    <div className={`flex flex-col gap-4 overflow-auto ${className}`}>
      <Categories curCat={curCat} sCurCat={sCurCat} catList={categoryList} />
      <div className="grid grid-cols-2 gap-8 justify-items-center overflow-auto">
        <div
          className="flex flex-col items-center gap-4 w-full overflow-auto"
          style={{
            direction: "rtl",
          }}
        >
          {challengeList.map((it) => (
            <Challenge
              key={it.id}
              challenge={it}
              currentChallenge={currentChallenge}
              setCurrentChallenge={setCurrentChallenge}
              style={{
                direction: "ltr",
              }}
            />
          ))}
        </div>
        <div className="h-32 w-full">{curCat}</div>
      </div>
    </div>
  );
};

export default Challenges;
