import React from "react";

import App from "./app";
import About from "./component/About";
import NoPage from "./component/NoPage";
import {BrowserRouter,Route,Switch,Link} from "react-router-dom";

const Routers=()=>(
    <BrowserRouter>
        <div>
            <div className="navs-list">
                <Link to={"/"} key={1}>App</Link>
                <Link to={"/about"} key={2}>About</Link>
                <Link to={"/fdfd"} key={3}>noMatch</Link>
            </div>
            <Switch>
                <Route path="/" component={App} exact></Route>
                <Route path="/about" component={About} ></Route>
                <Route path="*" component={NoPage} ></Route>
            </Switch>
        </div>
    </BrowserRouter>
);

let RouterModule=Routers;

export default RouterModule;