import * as React from "react";
import { Router, Route, IndexRoute, Link, browserHistory } from "react-router";

import DataListContainer from "./containers/data-list-container";
import SimpleBarchartContainer from "./containers/simple-barchart-container";

const Navigation = () => (
    <div>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/simplebarchart">Simple bar chart</Link></div>
    </div>
)
const ContentContainer = () => (
    <div>
        <Navigation />
    </div>
)
const PageNotFound = () => { return <h1>Could not find this page</h1>; }

export default (
    <Router>
        <Route path="/" component={ContentContainer}>
            <IndexRoute component={DataListContainer} />
            <Route path="simplebarchart" component={SimpleBarchartContainer} />
            <Route path="*" component={PageNotFound} />
        </Route>
    </Router>
)