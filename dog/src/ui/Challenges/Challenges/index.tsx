import React from "react";
import Categories from "./Categories";
// import { Typography } from "@mui/material";
// import ArrowLeft from "icons/Lined/ArrowCircleLeft";
import Challenge from "components/Challenge";
import { IChallenge } from "interfaces";
import { categoryList, challengeList } from "utils/fake";
// import IconFileSearch from "icons/Filled/FileSearch";
// import IconPuzzle from "icons/Filled/Puzzle";
// import IconBug from "icons/Filled/Bug";
// import IconLock from "icons/Filled/Lock";
// import IconWeb from "icons/Filled/Web";
// import IconCubeScan from "icons/Filled/CubeScan";
// import IconSkull from "icons/Filled/Skull";

interface Props {
  className?: string;
}

const Challenges: React.FC<Props> = ({
  className = "",
}): React.ReactElement => {
  const [curCat, sCurCat] = React.useState<number>(0);
  const [curChall, sCurChall] = React.useState<string>("");

  return (
    <div className={`flex flex-col gap-4 h-full ${className}`}>
      <Categories curCat={curCat} sCurCat={sCurCat} catList={categoryList} />
      <div className="grid grid-cols-2 gap-8 justify-items-center">
        <div className="flex flex-col items-center gap-4 w-full">
          {/* overflow-y-scroll */}
          {challengeList.map((it) => (
            <Challenge
              key={it.id}
              chall={it}
              curChall={curChall}
              sCurChall={sCurChall}
            />
          ))}
        </div>
        <div className="bg-blue-200 h-32 w-full">{curCat}</div>
      </div>
    </div>
  );
};

export default Challenges;
