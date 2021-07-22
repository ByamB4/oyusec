import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import { Media } from "initialize";

interface Props {
  cName?: string;
  system?: boolean;
}

const AppHeader: React.FC<Props> = ({ cName, system = false }) => {
  return (
    <>
      <AppBar position="static" elevation={1}>
        <Toolbar
          className={`bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg flex items-center justify-between py-0 my-0 h-72p`}
        >
          <LeftNav />
          <RightNav />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppHeader;
