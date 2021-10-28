import { ReactElement } from "react";
import { MainLayout } from "layouts";
import { NextPage } from "next";
import { DesktopUserCover } from "ui/User";

const User: NextPage = (): ReactElement => {
  return (
    <MainLayout NO_PADDING>
      <DesktopUserCover />
    </MainLayout>
  );
};

export default User;
