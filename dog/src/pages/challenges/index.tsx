import React from "react";
import { MainLayout } from "layouts";
import { DesktopChallenges, DesktopLiveFeatures } from "ui/Challenges";
import { NextPage } from "next";
import { TITLE } from "configs/app";

const Challenges: NextPage = (): React.ReactElement => {
  return (
    <MainLayout className="flex flex-col gap-2" title={TITLE.challenges.index}>
      <DesktopLiveFeatures />
      <DesktopChallenges />
    </MainLayout>
  );
};

export default Challenges;
