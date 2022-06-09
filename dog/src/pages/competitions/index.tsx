import { ReactElement } from "react";
import { MainLayout } from "layouts";
import { DesktopCompetitionsRoot } from "ui/Competitions";
import { NextPage } from "next";
import { TITLE } from "configs/app";

const Competitions: NextPage = (): ReactElement => {
  return (
    <MainLayout className="flex flex-col" title={TITLE.competitions.index}>
      <DesktopCompetitionsRoot />
    </MainLayout>
  );
};

export default Competitions;
