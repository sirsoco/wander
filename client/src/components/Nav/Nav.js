import React from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "../Avatar/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },

  container: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
  },
  headerText: {
    flex: 1,
    display: "flex",
  },
  avi: {

  }
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Lusitana"].join(","),
    h2: {
      fontWeight: 700,
      fontSize: 30,
      color: "#000000",
    },
    palette: {
      secondary: {
        backgroundColor: "#FFFFFF",
        main: "#FFFFFF",
        contrastText: "#FFFFFF",
      },
    },
  },
});

export default function DenseAppBar() {
  const classes = useStyles();
  const photo = localStorage.getItem("photo");

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar className={classes.container} variant="dense">
            <div className={classes.headerText}></div>
            <Typography className={classes.headerText} variant="h2">
              Wandr
            </Typography>
            <Avatar className={classes.Avi} src={photo} />
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
