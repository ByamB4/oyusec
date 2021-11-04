/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { ReactElement, useEffect } from "react";
import { MainLayout } from "layouts";
import { NextPage } from "next";
import { DesktopHero } from "ui/Landing";
import { MAX_SCREEN_MX } from "constants/Layout";
import { TITLE } from "configs/app";
import { useRouter } from "next/router";
import { useToken } from "contexts/user";

const Index: NextPage = (): ReactElement => {
  const router = useRouter();
  const { token } = router.query;
  const { setToken } = useToken();

  useEffect(() => {
    if (token) {
      console.log('setting token')
      setToken(token as string);
      console.log(token);
      // router.replace("/challenges");
    }
  }, [token, router]);

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
