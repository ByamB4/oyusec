import { FC, ReactElement, useEffect, useState } from "react";
import { IChallenge, IChallengeCategory } from "interfaces";
import { challengeList } from "utils/fake";
import { CompChallenge } from "components";
import { Typography } from "@mui/material";

interface Props {
  className?: string;
}

const Challenges: FC<Props> = ({ className = "" }): ReactElement => {
  const [challenges, setChallenges] = useState<IChallenge[]>(challengeList);
  const [currentChallenge, setCurrentChallenge] = useState<IChallenge>(
    {} as IChallenge
  );
  const categories: IChallengeCategory[] = [
    ...new Set(challenges.map((challenge) => challenge.category)),
  ];
  // console.log([...new Set(categories)]);

  useEffect(() => {
    document.title = "Challenges";
  }, []);

  return (
    <>
      {categories.map((category: IChallengeCategory) => (
        <div key={category.id} className="flex flex-col gap-4">
          <Typography variant="h2">{category.value}</Typography>
          <div className="flex flex-col gap-2 items-center">
            {challenges
              .filter((chall: IChallenge) => chall.category === category)
              .map((chall: IChallenge) => (
                <CompChallenge
                  key={chall.id}
                  currentChallenge={currentChallenge}
                  setCurrentChallenge={setCurrentChallenge}
                  challenge={chall}
                  className="px-12"
                />
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Challenges;
