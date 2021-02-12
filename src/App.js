import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import FileBrowser from './features/file-browser';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/file-browser">
            <FileBrowser />
          </Route>
          {/* <Route path="/">
            <Redirect to="/file-browser" />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
