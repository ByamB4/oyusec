import { MainLayout } from "layouts";
import { DesktopCompetition } from "ui/competitions";
import { NextPage } from "next";
import { ICompetition } from "interfaces";
import { DEFAULT } from "configs";
import { useState, ReactElement } from "react";

const Competitions: NextPage = (): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [competition, setCompetition] = useState<ICompetition>(
    DEFAULT.competition as ICompetition
  );

  // useEffect(() => {
  //   const init = () => {
  //     setCompetition(DEFAULT.competition as ICompetition);
  //   };
  //   init();
  // }, []);

  return (
    <MainLayout className="flex flex-col" title={competition.name}>
      <DesktopCompetition competition={competition} />
    </MainLayout>
  );
};

export default Competitions;
