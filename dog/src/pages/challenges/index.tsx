import React from "react";
import { MainLayout } from "layouts";
import { DesktopChallenges, DesktopLiveFeatures } from "ui/Challenges";

interface Props {}

const Challenges: React.FC<Props> = ({}): React.ReactElement => {
  return (
    <MainLayout className={`flex flex-col gap-2 h-full`}>
      <DesktopLiveFeatures />
      <DesktopChallenges />
    </MainLayout>
  );
};

export default Challenges;
