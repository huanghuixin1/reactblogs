import React from 'react'
import userState from "../mobx/userState";

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
        return <div>
            <input type="text" ref="(input)=>{txtName = input; }"/>
            <button onClick={this.changeUserInfo}>点击修改</button>
        </div>;
    }
}
export default Inputs