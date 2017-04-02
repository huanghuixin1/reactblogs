import React from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import First from "./Tab1";
import Second from "./Tab2";

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let match = this.props.match;
        return (
            <Router>
                <div>
                    <section>
                        <Link to={`${match.url}/tab1`}>跳转tab1</Link> <br/>
                        <Link to={`/tab/tab2`}>跳转tab2</Link>
                    </section>
                    里面是路由信息
                    <Route path={`/tab/tab2`} component={First}/>
                    <Route path={`/tab/tab1`} component={Second}/>
                </div>
            </Router>
        );
    }
}