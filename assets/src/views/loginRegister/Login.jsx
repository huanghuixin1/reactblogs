import React from 'react'
require("./login.scss");

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <article id="loginRegister-login-container">
                <h1>这里是登陆页面</h1>
            </article>
        )
    }
}