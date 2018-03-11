import React, {Component} from 'react';
import {LoginView} from "./login-view";

export class Login extends Component {
    constructor(props)  {
        super(props);

        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }

    onLoginSubmit(e) {
        alert("OK");
        e.preventDefault();
    }

    render() {
        return <LoginView onLoginSubmit={this.onLoginSubmit}/>
    }
}
