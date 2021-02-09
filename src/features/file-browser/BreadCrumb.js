import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import {
  selectBreadCrumbLinks,
  addToBreadCrumb,
  removeFromBreadCrumb,
} from './breadCrumbSlice';

const BreadCrumb = () => {
  const { path, url } = useRouteMatch();
  const breadCrumbLinks = useSelector(selectBreadCrumbLinks);
  const dispatch = useDispatch();
  const test = () => {
    const temp = {
      name: new Date().toString(),
      to: `${new Date().toString()}`,
    };
    dispatch(addToBreadCrumb(temp));
  };
  const backToDir = to => {
    dispatch(removeFromBreadCrumb({ to }));
  };
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {/* <li>
          <Link to={`${url}/1`}>1</Link>
        </li>
     
        <li>
          <Link to={`${url}/2`}>2</Link>
        </li>
        <li>
          <Link to={`${url}/3`}>3</Link>
        </li> */}
        <li>
          <Link to={`${url}`} onClick={() => backToDir('')}>
            root
          </Link>
        </li>
        {breadCrumbLinks.map(b => {
          return (
            <li key={b.name}>
              <Link to={`${url}/${b.to}`} onClick={() => backToDir(b.to)}>
                {b.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <Switch>
        <Route path={`${path}/1`}>
          <p>1</p>
        </Route>
        <Route path={`${path}/12`}>
          <p>12</p>
        </Route>
        <Route path={`${path}/2`}>
          <p>2</p>
        </Route>
        <Route path={`${path}/3`}>
          <p>3</p>
        </Route>
      </Switch>
      <button onClick={test}>add</button>
    </div>
  );
};

export default BreadCrumb;
