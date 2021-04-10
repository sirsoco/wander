import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


export default function ImageAvatars(props) {

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
      register: {
        //
        display: props => props.display
      }
    },
  }));

  const classes = useStyles(props);

  return (
    <div className={classes.root}>
  
      <Avatar alt="Cindy Baker" src={props.src} />
    </div>
  );
}
