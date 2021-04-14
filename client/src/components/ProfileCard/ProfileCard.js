import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WorkIcon from "@material-ui/icons/Work";
import PersonIcon from "@material-ui/icons/Person";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: "3%",
  },
  paper: {
    alignItems: "center",
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },

  aviContainer: {
    display: "flex",
    justifyContent: "center",
  },
  avi: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    display: "block",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {},
  grid: {
    display: "block",
    justifyContent: "center",
  },
}));

export default function ProfileCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container className={classes.grid} spacing={2}>
          <Grid item>
            <Typography variant="h4">{props.name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4">Photos</Typography>
          </Grid>
          <Grid className={classes.aviContainer} item>
            <Avatar
              aria-label="recipe"
              variant="rounded"
              className={classes.Container}
              src={props.src}
            />
          </Grid>
          <Grid item>
            <Typography variant="h4">Bio</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
