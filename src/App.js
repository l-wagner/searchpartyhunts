import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LocalizeProvider } from "react-localize-redux";

import Index from "./pages/Index.js";
import EpisodeLog from "./pages/EpisodeLog.js";

function AppRouter() {
  return (
    <LocalizeProvider>
      <Router>
        <React.Fragment>
          <Route path="/" exact component={Index} />

        </React.Fragment>
      </Router>
    </LocalizeProvider>
  );
}

class App extends Component {
  render() {
    return <AppRouter />;
  }
}

export default App;
