import React, { CSSProperties } from "react";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import AppHeader from "./AppHeader";

interface Props {
  children?: React.ReactNode;
  title?: string;
  cName?: string;
  style?: CSSProperties;
}

const DesktopLayout: React.FC<Props> = ({
  children,
  title = "OyuSec",
  cName = "",
  style,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container maxWidth={false} disableGutters>
        <AppHeader />
        <div className={`${cName}`} style={style}>
          {children}
        </div>
      </Container>
    </>
  );
};

export default DesktopLayout;
