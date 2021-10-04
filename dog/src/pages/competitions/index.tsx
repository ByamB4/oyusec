import React from "react";
import { MainLayout } from "layouts";
import { DesktopCompetitionsCategories } from "ui/Competitions";

interface Props {}

const Competitions: React.FC<Props> = ({}): React.ReactElement => {
  return (
    <div>
      <MainLayout>
        <DesktopCompetitionsCategories />
      </MainLayout>
    </div>
  );
};

export default Competitions;
