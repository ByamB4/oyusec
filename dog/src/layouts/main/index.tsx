import React, { CSSProperties } from "react";
import Head from "next/head";
import AppView from "./AppView";
import AppNavbar from "./AppNavbar";
import AppFooter from "./AppFooter";
import AppSidebar from "./AppSidebar";
import { DEFAULT } from "configs";

interface Props {
  className?: string;
  title?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({
  children,
  className = "",
  title = DEFAULT.title,
  style,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        className={`bg-primary-dark h-full w-full fixed flex overflow-hidden`}
      >
        <AppSidebar className={``} />
        <div className="flex flex-col justify-between w-full h-full">
          <AppNavbar className={`bg-primary-dark text-white`} />
          <AppView
            className={`h-full bg-primary-light text-white rounded-l-3xl p-4 ${className}`}
            style={style}
            children={children}
          />
          <AppFooter className="bg-primary-dark text-white" />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
