import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
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
import SchoolIcon from "@material-ui/icons/School";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(10, 3),
    justifyContent: "center",
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
  
  },
  paper: {
    textAlign: "center",
    margin: `${theme.spacing(1)}px auto`,
    color: theme.palette.text.secondary,
  },
  title: {},
  grid: {
    display: "block",
    justifyContent: "center",
    padding: theme.spacing(0, 3),
  },
  bioItem: {
    display: "flex",
    justifyContent: "center",
  },
  bioItem1: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(0,0,5,0)
  },
}));

const name = createMuiTheme({
  typography: {
    fontFamily: "Lusitana",
    h4: {
      color: '#000000',
      fontWeight: 700,
      fontSize: 25,
    },
  },
});

const photo = createMuiTheme({
  typography: {
    fontFamily: "Lusitana",
    h4: {
      fontWeight: 400,
      fontSize: 25,
      
    },
  },
});

const bio = createMuiTheme({
  typography: {
    fontFamily: "Lusitana",
    h5: {
      fontWeight: 400,
      fontSize: 14,
    },
  },
});

export default function ProfileCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>

        <Grid container className={classes.bioItem} wrap="nowrap" spacing={10}>
          <Grid item>
            <ThemeProvider theme={name}>
              <Typography variant="h4">{props.name}</Typography>
            </ThemeProvider>
          </Grid>
        </Grid>

        <Grid container className={classes.bioItem} wrap="nowrap" spacing={1}>
          <Grid item>
            <ThemeProvider theme={photo}>
              <Typography variant="h4">Photos</Typography>
            </ThemeProvider>
          </Grid>
        </Grid>

        <Grid container className={classes.bioItem} wrap="nowrap" spacing={1}>
          <Grid item>
            <Avatar
              aria-label="recipe"
              variant="rounded"
              className={classes.avi}
              src={props.src}
            />
          </Grid>
        </Grid>

        <Grid container className={classes.bioItem} wrap="nowrap" spacing={1}>
          <Grid item>
            <Typography variant="h4">Bio</Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.bioItem} wrap="nowrap" spacing={1}>
          <Grid item>
            <PersonIcon />
          </Grid>
          <Grid item>
            <Typography variant="h5">{props.age}</Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.bioItem} wrap="nowrap" spacing={1}>
          <Grid item>
            <PersonIcon />
          </Grid>
          <Grid item>
            <Typography variant="h5">{props.career}</Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.bioItem} wrap="nowrap" spacing={1}>
          <Grid item>
            <SchoolIcon />
          </Grid>
          <Grid item>
            <Typography variant="h5">Studied at {props.education}</Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.bioItem} wrap="nowrap" spacing={1}>
          <Grid item>
            <LocationOnIcon />
          </Grid>
          <Grid item>
            <Typography variant="h5">Currently in {props.currentLocation}</Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.bioItem} wrap="nowrap" spacing={1}>
          <Grid item>
            <FlightTakeoffIcon />
          </Grid>
          <Grid item>
            <Typography variant="h5">
              Traveling to {props.destination}
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.bioItem1} wrap="nowrap" spacing={1}>
          <Grid item>
            <TagFacesIcon />
          </Grid>
          <Grid item>
            <Typography variant="h5"> Hobbies are {props.hobbies}</Typography>
          </Grid>
        </Grid>
        
      </Paper>
    </div>
  );
}
