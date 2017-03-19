/**
 * Created by huanghuixin on 2017/2/26.
 */
import React from 'react'

export default class Tables1 extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}