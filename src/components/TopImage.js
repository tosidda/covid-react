import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import corana from '../images/corana.png'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
 
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function TopImage() {
  const classes = useStyles();
  const theme = useTheme();
  
  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src={corana}
        alt="Carona Pic"
      />
    </div>
  );
}