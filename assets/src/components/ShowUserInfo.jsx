import React from 'react'
import userState from "../mobx/userState";
import {observer} from 'mobx-react';

@observer
export default class ShowUserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userState};
    }

    render() {
        return (
            <article>
                用户: {this.state.userState.userInfo.name}
            </article>
        )
    }
}