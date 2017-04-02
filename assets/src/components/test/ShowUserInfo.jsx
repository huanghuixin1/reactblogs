import React from 'react'
import {observer, inject} from 'mobx-react'

@inject("store") @observer
export default class ShowUserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userState: this.props.store.userState};
    }

    render() {
        console.info(this.state.userState.setUser, 'showuserinfo.jsx');
        return (
            <article>
                用户名字: {this.state.userState.userInfo.name}
                <hr/>
                用户id:{this.state.userState.userInfo.id}
                <hr/>
            </article>
        )
    }
}