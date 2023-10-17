import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./src/App";
import Page2 from "./Page2";

function Routes() {
  return (
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/Page2" component={Page2} />
    </Router>
  );
}

export default Routes;
