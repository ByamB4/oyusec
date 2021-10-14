import React from "react";
import Categories from "./Categories";
import { Challenge } from "components";
import { challengeCategoryList, challengeList } from "utils/fake";
import { IChallenge } from "interfaces";
import ActiveChallenge from "./ActiveChallenge";
import RequestedChallenge from "./RequestedChallenge";

interface Props {
  className?: string;
}

const Challenges: React.FC<Props> = ({
  className = "",
}): React.ReactElement => {
  const [currentCategory, setCurrentCategory] = React.useState<number>(0);
  const [currentChallenge, setCurrentChallenge] = React.useState<IChallenge>(
    {} as IChallenge
  );
  const [activeChallenge, setActiveChallenge] = React.useState<IChallenge>(
    {} as IChallenge
  );
  const [userInput, setUserInput] = React.useState<string>("");

  React.useEffect(() => {
    // ? Fetch challenge from backend
    setUserInput("");
    if (currentChallenge) {
      setActiveChallenge(
        challengeList.find(
          (challenge: IChallenge) => challenge.id === currentChallenge.id
        )!
      );
    } else {
      setActiveChallenge({} as IChallenge);
    }
  }, [currentChallenge]);

  return (
    <div className={`flex flex-col gap-4 overflow-auto ${className}`}>
      <Categories
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        categoryList={challengeCategoryList}
      />
      <div className="grid grid-cols-2 gap-8 justify-items-center overflow-auto">
        <div
          className="flex flex-col items-center gap-4 w-full overflow-auto"
          style={{
            direction: "rtl",
          }}
        >
          {challengeList
            .filter(
              (it: IChallenge) =>
                it.category.id === challengeCategoryList[currentCategory].id
            )
            .map((it: IChallenge) => (
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

        {activeChallenge && (
          <>
            {activeChallenge?.category?.key === "requested" ? (
              <RequestedChallenge activeChallenge={activeChallenge} />
            ) : (
              <ActiveChallenge
                activeChallenge={activeChallenge}
                userInput={userInput}
                setUserInput={setUserInput}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Challenges;
