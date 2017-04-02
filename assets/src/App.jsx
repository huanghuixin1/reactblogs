import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Provider, observer, inject} from 'mobx-react'
import LazyRoute from 'lazy-route'
import {Match} from 'react-router'
import './app.scss'

// import DevTools from 'mobx-react-devtools'
@inject("store") @observer
export default class App extends Component {
    constructor(props) {
        super(props)

        this.store = this.props.store
        console.info(this.props);
    }

    render() {
        let match = this.props.match;
        return (
            <article id="app-container">
                <header>
                    <h2>头部数据</h2>
                    <Link to='/login'>前往登陆</Link>
                </header>

                <section>
                    <Router>
                        <Route exact path="/tab"
                               render={(props) => <LazyRoute {...props}
                                                             component={import('./components/tabcontainer/Container')}/>}>
                        </Route>
                    </Router>
                </section>

                <footer>
                    <h2>底部信息</h2>
                </footer>
            </article>
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