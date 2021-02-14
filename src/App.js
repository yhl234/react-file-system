import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import FileBrowser from './features/file-browser';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/file-browser/root">
            <FileBrowser />
          </Route>
          <Route path="/">
            <Redirect to="/file-browser/root" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
