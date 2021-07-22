import React from "react";
import { DesktopLayout } from "layouts";
import { NextPage } from "next";

interface Props {}

const Landing: NextPage<Props> = ({}) => {
  return (
    <DesktopLayout>
      <h1>Test</h1>
    </DesktopLayout>
  );
};

export default Landing;
