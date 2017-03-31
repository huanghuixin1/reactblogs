/**
 * Created by hhx2 on 2017/4/1.
 */
import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
// import {Redirect} from 'react-router-dom'

export default function Auth(Component) {
    @inject(['store']) @observer
    class AuthComponent extends Component {
        constructor(props) {
            super(props)
            this.store = this.props.store
        }

        componentDidMount() {
            console.info("auth组件加载完毕");
        }

        render() {
            return (
                <div className="authComponent">
                    <Component {...this.props} />
                </div>
            )
        }

    }
    return AuthComponent
}