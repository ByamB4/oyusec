import React, { CSSProperties } from "react";
import Head from "next/head";

interface Props {
  className?: string;
  title?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({
  children,
  className = "",
  title,
  style,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <div className={`${className}`} style={style}>
          <h1>test</h1>
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
