import React from 'react'
import ShowInfo from "../components/test/ShowUserInfo";
import Inputs from "../components/test/Inputs";

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <article>
                <ShowInfo/>
                <br/>
                <Inputs></Inputs>
            </article>
        )
    }
}