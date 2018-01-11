/**
 * User: sofia
 * Date: 2018/1/9
 * Version: 1.0.0
 * Description:
 */
import React, {Component} from 'react';
import {GreetingComponent} from "./Greeting";

export class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {isLogin: false};
    }

    loginClick = () => {
        this.setState({isLogin: true})
    };

    logoutClick = () => {
        this.setState({isLogin: false})
    };

    render() {
        let button = null;
        if (this.state.isLogin) {
            button = <button onClick={this.logoutClick}>Click to LogOut</button>
        } else {
            button = <button onClick={this.loginClick}>Click to LogIn</button>
        }
        return <div>
            <GreetingComponent logState={this.state.isLogin}/>
            {button}
        </div>
    }
}