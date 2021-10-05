import React from "react";
import { MainLayout } from "layouts";
import { DesktopCompetition } from "ui/Competitions";
import { GetServerSideProps, NextPage } from "next";
import { ICompetition } from "interfaces";
import { DEFAULT } from "configs";

interface Props {
  competition: ICompetition;
}

const Competitions: NextPage<Props> = ({ competition }): React.ReactElement => {
  return (
    <MainLayout className="flex flex-col">
      <DesktopCompetition competition={competition} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ! Fetch logic

  return {
    props: {
      competition: DEFAULT.competition,
    },
  };
};

export default Competitions;
