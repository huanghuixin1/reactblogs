import React, {Component} from 'react';
import ReactDOM from "react-dom";
import appState from "./mobx/userState";
import {Provider, observer} from 'mobx-react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import LazyRoute from 'lazy-route'
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
                    <div>
                        <Route exact path="/" component={require("./App").default}></Route>
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
