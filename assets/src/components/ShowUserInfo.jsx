import React from 'react'
import userState from "../mobx/userState";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider, observer } from 'mobx-react'

@observer
export default class ShowUserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userState};
        this.store = this.props.store
    }

    render() {
        return (
            <article>
                用户: {this.state.userState.userInfo.name}

                <Link to="/posts">跳转到input</Link>
                <hr/>
            </article>
        )
    }
}