import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Input from "./components/inputs";
import ShowUser from "./components/ShowUserInfo";

class App extends Component{
    render () {
        return (
            <div>
                <ShowUser></ShowUser>
                <br/>
                <Input/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);