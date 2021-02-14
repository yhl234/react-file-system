import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  selectBreadCrumbLinks,
  selectLastLocation,
  updateLinks,
} from './breadCrumbSlice';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    textAlign: 'left',
  },
}));
const BreadCrumb = () => {
  const classes = useStyles();

  const breadCrumbLinks = useSelector(selectBreadCrumbLinks);
  const lastLocation = useSelector(selectLastLocation);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateLinks(lastLocation));
  }, [lastLocation]);

  return (
    <div className={classes.root}>
      <h2>Files browser</h2>
      <Breadcrumbs>
        {breadCrumbLinks.map(b => {
          return (
            <Link key={b.name} to={`/file-browser${b.to}`}>
              {b.name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
