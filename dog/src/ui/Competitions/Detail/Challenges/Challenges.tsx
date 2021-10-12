import { FC, ReactElement, useEffect, useState } from "react";
import { IChallenge } from "interfaces";
import { CompLayout } from "layouts";
import { challengeList } from "utils/fake";
import { Challenge } from "components";

interface Props {
  className?: string;
}

const Challenges: FC<Props> = ({ className = "" }): ReactElement => {
  const [challenges, setChallenges] = useState<IChallenge[]>(challengeList);
  const [currentChallenge, setCurrentChallenge] = useState<IChallenge>(
    {} as IChallenge
  );

  useEffect(() => {
    document.title = "Challenges";
  }, []);

  return (
    <>
      {challenges.map((challenge, index) => (
        <Challenge
          key={challenge.id}
          currentChallenge={currentChallenge}
          setCurrentChallenge={setCurrentChallenge}
          challenge={challenge}
        />
      ))}
    </>
  );
};

export default Challenges;
