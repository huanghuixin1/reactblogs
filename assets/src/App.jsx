import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Provider, observer} from 'mobx-react'
import LazyRoute from 'lazy-route'
import {Match} from 'react-router'
require("./app.scss");

// import DevTools from 'mobx-react-devtools'
@observer
export default class App extends Component {
    constructor(props) {
        super(props)

        this.store = this.props.store

    }

    render() {
        let match = this.props.match;
        return (
            <Router>
                <article className="index-container">
                    <header>

                    </header>

                    <footer>

                    </footer>
                </article>
            </Router>
        )
    }
}

//
// <Provider store={this.store}>
//     <div className="wrapper">
//         <Route
//             exact
//             path="/"
//             component={require('./components/ShowUserInfo').default}>
//             {/*render={(props) => <LazyRoute {...props} component={import('./components/ShowUserInfo')}/>}>*/}
//         </Route>
//         <Route
//             exact
//             path="/posts"
//             component={require('./components/ShowUserInfo').default}>
//             {/*render={(props) => <LazyRoute {...props} component={import('./components/inputs')}/>}*/}
//             {/*<Route path="/posts/test" component={require("./components/Test").default}/>*/}
//         </Route>
//
//         <Route exact path="/tab"
//                render={(props) => <LazyRoute {...props} component={import('./components/tabcontainer/Container')}/>}>
//         </Route>
//         <footer>
//             底部信息
//         </footer>
//     </div>
// </Provider>