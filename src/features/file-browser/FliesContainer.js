import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { Grid, Card, CircularProgress, Typography } from '@material-ui/core';
import { FolderOpen, Description } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import {
  selectFiles,
  selectLastLocation,
  addToBreadCrumb,
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
  const { path, url } = useRouteMatch();

  const dispatch = useDispatch();
  const lastLocation = useSelector(selectLastLocation);
  const files = useSelector(selectFiles);

  useEffect(() => {
    dispatch(fetchData(lastLocation));
  }, [lastLocation]);

  const handleClick = item => {
    const temp = {
      name: item.name,
      to: `/${item.name}`,
    };
    dispatch(addToBreadCrumb(temp));
    history.push(`${path}/${lastLocation}/${item.name}`);
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
