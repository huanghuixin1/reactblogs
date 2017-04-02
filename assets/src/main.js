import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {Provider, observer} from 'mobx-react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import LazyRoute from 'lazy-route'

import userState from "./mobx/userState";
import testState from "./mobx/testState";

const appState = {userState, testState};
// const appState = userSatate;
// import DevTools from 'mobx-react-devtools'
@observer
export default class App extends Component {
    constructor(props) {
        super(props)
        this.store = this.props.store
        console.info(this.store);
    }

    render() {
        // const { authenticated, authenticating, timeToRefresh, refreshToken } = this.store
        return (
            <Router>
                <Provider store={this.store}>
                    <div>
                        <Route exact path="/" component={require("./App").default}></Route>
                        <Route exact path="/test" component={require("./views/Test").default}></Route>
                        <Route exact path="/login"
                               render={(props) => <LazyRoute {...props}
                                                             component={import('./views/loginRegister/Login')}/>}>
                        </Route>
                    </div>
                </Provider>
            </Router>
        )
    }
}

ReactDOM.render(
    <App store={appState}/>,
    document.getElementById('root')
);
