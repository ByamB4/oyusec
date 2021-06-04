import React from "react";
import FSProvider from "../../context/FSContext";
import MainBar from "./MainBar";
import MainDrawer from "./MainDrawer";
import MainView from "./MainView";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="flex">
      <FSProvider>
        <MainBar />
        <MainDrawer />
      </FSProvider>
      <MainView>{children}</MainView>
    </div>
  );
};

export default MainLayout;
