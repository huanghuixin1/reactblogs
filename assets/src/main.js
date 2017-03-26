import React, {Component} from 'react';
import ReactDOM from "react-dom";
import appState from "./mobx/userState";
import App from "./App"

ReactDOM.render(
        <App store={appState} />,
    // </AppContainer>,
    document.getElementById('root')
);
