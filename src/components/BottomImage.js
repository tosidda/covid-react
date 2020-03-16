import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import beer from '../images/beer.png'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
 
  img: {
    width: "auto",
    height: "400px"
  },
}));

export default function BottomImage() {
  const classes = useStyles();
  const theme = useTheme();
  
  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src={beer}
        alt="Beer Pic"
      />
    </div>
  );
}