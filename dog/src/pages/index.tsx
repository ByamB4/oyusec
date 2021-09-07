import * as React from "react";
import { MainLayout } from "layouts";
import { NextPage, GetServerSideProps } from "next";
import { DesktopHero } from "ui/Landing";

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <MainLayout NO_PADDING>
      <DesktopHero />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default Index;
