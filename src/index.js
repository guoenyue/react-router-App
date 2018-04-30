import React from "react";
import ReactDOM from "react-dom";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";

import RouterModule from "./routers";
import Reducers from "./reducer";

let store=createStore(Reducers,applyMiddleware(thunkMiddleware));

ReactDOM.render(
    (<Provider store={store}>
        <RouterModule></RouterModule>
    </Provider>),
    document.getElementById("root")
);