import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { Breadcrumbs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { selectBreadCrumbLinks, removeFromBreadCrumb } from './breadCrumbSlice';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    textAlign: 'left',
  },
}));
const BreadCrumb = () => {
  const classes = useStyles();

  const { path, url } = useRouteMatch();
  const breadCrumbLinks = useSelector(selectBreadCrumbLinks);
  const dispatch = useDispatch();
  const backToDir = to => {
    dispatch(removeFromBreadCrumb({ to }));
  };
  return (
    <div className={classes.root}>
      <h2>Files browser</h2>
      <Breadcrumbs>
        {breadCrumbLinks.map(b => {
          return (
            <Link
              key={b.name}
              to={`${url}/${b.to}`}
              onClick={() => backToDir(b.to)}
            >
              {b.name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
