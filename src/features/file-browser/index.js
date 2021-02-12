import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BreadCrumb from './BreadCrumb';
import FliesContainer from './FliesContainer';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '100vh',
    maxWidth: '900px',
    margin: '0 auto',
  },
}));
const index = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <BreadCrumb />
      <FliesContainer />
    </Paper>
  );
};

export default index;
