import { ReactElement } from "react";
import { MainLayout } from "layouts";
import { NextPage } from "next";
import { DesktopHero } from "ui/Landing";
import { MAX_SCREEN_MX } from "constants/Layout";
import { TITLE } from "configs/app";

const Index: NextPage = (): ReactElement => {
  return (
    <MainLayout
      NO_PADDING
      className="bg-contain bg-no-repeat xl:bg-index-pattern"
      title={TITLE.homepage.index}
    >
      <DesktopHero className={`${MAX_SCREEN_MX}`} />
    </MainLayout>
  );
};

export default Index;
