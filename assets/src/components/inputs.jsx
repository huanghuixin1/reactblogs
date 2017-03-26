import React from 'react'
import userState from "../mobx/userState";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Test from "./Test";

class Inputs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {userState}
        this.changeUserInfo = this.changeUserInfo.bind(this)
    }

    changeUserInfo() {
        // console.info( this.txtName);
        this.state.userState.setUser({id: 11, name: +new Date})
    }

    render() {
        let match = this.props.match
        console.info(this.props, this.state);
        return <div>
            <input type="text" ref="(input)=>{txtName = input; }"/>
            <button onClick={this.changeUserInfo}>点击修改</button>

            <Link to={`${match.url}/test`}>跳转到test</Link>
        </div>;
    }
}
export default Inputs