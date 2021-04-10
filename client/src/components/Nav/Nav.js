import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '../Avatar/Avatar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
  container: {
      backgroundColor: '#CCCCCC',
      display: 'flex',
      justifyContent: 'flex-end'
      
  },
  headerText:{
      display: 'flex',
      justifyContent: 'flex-end',
      marginRight: '37.5%',
  },
}));

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'linotype-didot,serif'
      ].join(','),
    },
fontSize: 700, });

export default function DenseAppBar() {
  const classes = useStyles();
  const photo = localStorage.getItem('photo');

  return (
      
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.container} variant="dense">
         
        <ThemeProvider theme={theme}>
          <Typography className={classes.headerText} variant="h2" color="inherit" theme={theme}>
            Wandr
          </Typography>
        </ThemeProvider>
          <Avatar 
            className={classes.Avi}
            src={photo}/>

        </Toolbar>
      </AppBar>
    </div>
  
  );
}