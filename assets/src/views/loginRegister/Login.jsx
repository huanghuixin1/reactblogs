import React from 'react'
require("./login.scss");
import {inject, observer} from 'mobx-react'
import auth from "../AuthComponent";

@auth @inject("store") @observer
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.info("login组件加载完毕");
    }

    render() {
        return (
            <article id="loginRegister-login-container">
                <h1>这里是登陆页面</h1>
            </article>
        )
    }
}