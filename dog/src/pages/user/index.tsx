import React from "react";
import { MainLayout } from "layouts";
import { NextPage } from "next";
import { DesktopUserCover } from "ui/User";

interface Props {}

const User: NextPage<Props> = ({}): React.ReactElement => {
  return (
    <MainLayout NO_PADDING>
      <DesktopUserCover />
    </MainLayout>
  );
};

export default User;
