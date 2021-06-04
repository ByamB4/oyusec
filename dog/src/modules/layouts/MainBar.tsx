import React, { useState } from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SvgSolidTranslate from "../../icons/SolidTranslate";
import SvgSolidTranslateOff from "../../icons/SolidTranslateOff";
import useFS from "../../hooks/useFS";
import IOSSwitch from "../../components/IOSSwitch";

const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      width: `calc(100% - ${theme.spacing(9)}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    toolbarButtons: {
      marginLeft: "auto",
    },
  })
);

const MainBar: React.FC = () => {
  const classes = useStyles();
  const [isDark, setDark] = useState(true);
  const [isENG, setENG] = useState(true);
  const { isFS, toFS } = useFS();

  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: "#1C273F" }}
      elevation={0}
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isFS,
      })}
    >
      <Toolbar variant="dense">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => toFS(!isFS)}
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.toolbarButtons}>
          {/* <span className={isDark ? "bg-red-600" : "bg-gren-300"}>Light</span> */}
          <IOSSwitch />
          {/* <span className="px-2">Dark</span> */}
          {isENG ? (
            <IconButton color="inherit" onClick={() => setENG(!isENG)}>
              <SvgSolidTranslate style={{ color: "#E91E63" }} />
            </IconButton>
          ) : (
            <IconButton color="inherit" onClick={() => setENG(!isENG)}>
              <SvgSolidTranslateOff style={{ opacity: 0.5 }} />
            </IconButton>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MainBar;
