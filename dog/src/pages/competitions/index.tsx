import React from "react";
import { MainLayout } from "layouts";
import { DesktopCompetitionsRoot } from "ui/Competitions";
import { NextPage } from "next";

interface Props {}

const Competitions: NextPage<Props> = ({}): React.ReactElement => {
  return (
    <MainLayout className="flex flex-col">
      <DesktopCompetitionsRoot />
    </MainLayout>
  );
};

export default Competitions;
