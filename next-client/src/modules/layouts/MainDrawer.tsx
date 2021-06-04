import React from "react";
import clsx from "clsx";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "next/link";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import { useRouter } from "next/router";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import MuiListItem from "@material-ui/core/ListItem";
import useFS from "../../hooks/useFS";
import leftNav from "../../fakers/leftNav";

const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      flexShrink: 0,
      width: drawerWidth,
      whiteSpace: "nowrap",
      backgroundColor: "#1A2332",
      color: "#fff",
      borderRight: "0px solid black",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(9),
    },
    list: {
      padding: "0px",
      margin: "0px",
    },
  })
);

const ListItem = withStyles({
  root: {
    height: "60px",
    marginTop: "10px",
    borderRadius: "10px",
    "&$selected": {
      backgroundColor: "#3d4b6b",
      "& [class*='MuiListItemText']": {
        fontWeight: 700,
      },
    },
    "&$selected:hover": {
      backgroundColor: "#3d4b6b",
    },
    "&:not(.Mui-selected):hover": {
      backgroundColor: "#3d4b6ba6",
      color: "white",
    },
  },
  selected: {},
})(MuiListItem);

const MainDrawer: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();
  const { isFS } = useFS();

  const [selectedIndex, setSelectedIndex] = React.useState(
    leftNav.findIndex((_) => _.link === router.pathname)
  );

  return (
    <Drawer
      variant="permanent"
      elevation={0}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isFS,
        [classes.drawerClose]: !isFS,
      })}
      classes={{
        paper: clsx(classes.drawer, {
          [classes.drawerOpen]: isFS,
          [classes.drawerClose]: !isFS,
        }),
      }}
    >
      <List component="nav" className={classes.list}>
        {leftNav.map((_, i) => (
          <div className="px-2" key={i}>
            <Link href={_.link}>
              <ListItem
                button
                onClick={() => setSelectedIndex(i)}
                selected={i === selectedIndex}
              >
                <ListItemIcon>{_.icon}</ListItemIcon>
                <ListItemText primary={_.text} />
              </ListItem>
            </Link>
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default MainDrawer;
