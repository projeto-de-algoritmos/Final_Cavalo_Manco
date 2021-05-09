import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import HomePage from "./Pages/HomePage"
import InitialPage from "./Pages/InitialPage"


function Routes () {
    return (
        <Router>
          <Route path="/" exact component={HomePage}/>
          <Route path="/chess" component={InitialPage}/>
        </Router>
    );
}

export default Routes;