import React, { Component } from "react";

import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LocalizeProvider } from "react-localize-redux";

import Index from "./pages/Index.js";

function AppRouter() {
  return (
    <LocalizeProvider>
      <Router>
        <React.Fragment>
          <Helmet>
            <title>SearchPartyHunts</title>
            <meta
              name="description"
              content="We’re two Gemini book publishing professionals with a knack for puzzles and puns who want to customize your next scavenger hunt experience."
            />
          </Helmet>

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
