import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Grid, Card, CircularProgress, Typography } from '@material-ui/core';
import { FolderOpen, Description } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import {
  selectFiles,
  selectLastLocation,
  updateLastLocation,
  fetchData,
} from './breadCrumbSlice';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    textAlign: 'left',
    minHeight: '100vh',
  },
  cardContent: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}));

const FliesContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const lastLocation = useSelector(selectLastLocation);
  const files = useSelector(selectFiles);
  const filePath = location.pathname.replace('/file-browser/', '');

  // update lastLocation form url
  useEffect(() => {
    if (filePath !== lastLocation) {
      dispatch(updateLastLocation(filePath));
    }
  }, [filePath]);

  // get data if lastLocation changed
  useEffect(() => {
    dispatch(fetchData(lastLocation));
  }, [lastLocation]);

  // change the url
  const handleClick = item => {
    history.push(`${location.pathname}/${item.name}`);
  };

  let content;
  if (!files) {
    content = <CircularProgress />;
  } else if (files.length === 0 && lastLocation.includes('.')) {
    content = (
      <Grid item sm={12}>
        <Typography align="center">File preview</Typography>
      </Grid>
    );
  } else if (files.length === 0) {
    content = (
      <Grid item sm={12}>
        <Typography align="center">Nothing here</Typography>
      </Grid>
    );
  } else {
    content = (
      <>
        {files.map((f, i) => {
          return (
            <Grid item sm={3} key={i}>
              <Card onClick={() => handleClick(f)}>
                <div className={classes.cardContent}>
                  {f.type === 'dir' && <FolderOpen />}
                  {f.type === 'file' && <Description />}
                  <Typography>{f.name}</Typography>
                </div>
              </Card>
            </Grid>
          );
        })}
      </>
    );
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {content}
      </Grid>
    </div>
  );
};

export default FliesContainer;
