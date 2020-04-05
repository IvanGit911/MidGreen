import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from './store/store';

// import {signup} from './actions/user_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();


    //todo test
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    //


    ReactDOM.render(<Root store={store} />, root);
});