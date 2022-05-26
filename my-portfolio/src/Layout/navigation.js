import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layout";
function Navigation() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={Layout} />
                </Switch>
            </Router>
        </div>
    );
}
export default Navigation;
