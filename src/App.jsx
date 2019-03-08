import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from './components/styles/Global';

import Home from './components/Home';
import MyLikes from './components/MyLikes';
import MyBookmarks from './components/MyBookmarks';
import Error from './components/Error';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/mylikes" component={MyLikes} />
            <Route path="/mybookmarks" component={MyBookmarks} />
            <Route path="*" component={Error} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default hot(module)(App);
