import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      backgroundColor: "#1c273f",
      color: "#fff",
      padding: theme.spacing(3),
      height: "100vh",
    },
  })
);

const MainView: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <main className={classes.content}>
        <Toolbar variant="dense" />
        {children}
      </main>
    </>
  );
};

export default MainView;
