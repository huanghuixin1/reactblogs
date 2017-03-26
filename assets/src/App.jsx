import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Provider, observer} from 'mobx-react'
import LazyRoute from 'lazy-route'
import {Match} from 'react-router'

import TabContainer from "./components/tabcontainer/Container";
import Tab1 from "./components/tabcontainer/Tab1";
import Tab2 from "./components/tabcontainer/Tab2";

// import DevTools from 'mobx-react-devtools'
@observer
export default class App extends Component {
    constructor(props) {
        super(props)

        console.info(Match);
        this.store = this.props.store
    }

    render() {
        // const { authenticated, authenticating, timeToRefresh, refreshToken } = this.store
        return (
            <Router>
                <Provider store={this.store}>
                    <div className="wrapper">
                        <Route
                            exact
                            path="/"
                            component={require('./components/ShowUserInfo').default}>
                            {/*render={(props) => <LazyRoute {...props} component={import('./components/ShowUserInfo')}/>}>*/}
                        </Route>
                        <Route
                            exact
                            path="/posts"
                            component={require('./components/ShowUserInfo').default}>
                            {/*render={(props) => <LazyRoute {...props} component={import('./components/inputs')}/>}*/}
                            {/*<Route path="/posts/test" component={require("./components/Test").default}/>*/}
                        </Route>

                        <Route exact path="/tab"
                               component={TabContainer}>
                        </Route>
                        <footer>
                            底部信息
                        </footer>
                    </div>
                </Provider>
            </Router>
        )
    }
}