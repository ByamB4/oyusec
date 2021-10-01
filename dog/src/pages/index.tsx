import * as React from "react";
import { MainLayout } from "layouts";
import { NextPage, GetServerSideProps } from "next";
import { DesktopHero } from "ui/Landing";
import { MAX_SCREEN_MX } from "constants/Layout";

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <MainLayout
      NO_PADDING
      className={`bg-contain bg-no-repeat xl:bg-index-pattern `}
    >
      <DesktopHero className={`${MAX_SCREEN_MX}`} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default Index;
