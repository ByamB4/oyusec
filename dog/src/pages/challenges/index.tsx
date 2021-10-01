import React from "react";
import { MainLayout } from "layouts";
import { MAX_SCREEN_MX } from "constants/Layout";
import { DesktopLiveFeatures } from "ui/Challenges";

interface Props {}

const Challenges: React.FC<Props> = ({}): React.ReactElement => {
  return (
    <MainLayout>
      <DesktopLiveFeatures />
    </MainLayout>
  );
};

export default Challenges;
