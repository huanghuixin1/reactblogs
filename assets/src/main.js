import React, {Component} from 'react';
import ReactDOM from "react-dom";
import appState from "./mobx/userState";
import {Provider, observer} from 'mobx-react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// import DevTools from 'mobx-react-devtools'
@observer
export default class App extends Component {
    constructor(props) {
        super(props)
        this.store = this.props.store
    }

    render() {
        // const { authenticated, authenticating, timeToRefresh, refreshToken } = this.store
        return (
            <Router>
                <Provider store={this.store}>
                    <Route path="/" component={require("./App").default}></Route>
                    <Route path="/login" component={require("./App").default}></Route>
                </Provider>
            </Router>
        )
    }
}

ReactDOM.render(
    <App store={appState}/>,
    document.getElementById('root')
);
