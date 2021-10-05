import React from "react";
import { MainLayout } from "layouts";
import { NextPage } from "next";

interface Props {}

const Writeups: NextPage<Props> = ({}): React.ReactElement => {
  return (
    <div>
      <MainLayout>Writeups</MainLayout>
    </div>
  );
};

export default Writeups;
