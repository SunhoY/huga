import React, {Component} from 'react';
import {LoginForm} from "./login-form";
import {login} from "../../redux/action/member/member-action";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);

        this.loginMember = this.loginMember.bind(this);
    }

    async loginMember(email, password) {
        try {
            this.props.dispatch(login(email, password));
        } catch (error) {
            alert('Email 또는 Password 가 올바르지 않습니다.');
        }
    }

    render() {
        const {memberRole} = this.props;

        return (
            <div>
                <LoginForm onSubmit={this.loginMember}/>
                {memberRole !== undefined && <Redirect to='/my-page'/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let {member: {role}} = state;

    return {memberRole: role}
};

let ConnectedLogin = connect(mapStateToProps)(Login);

export {ConnectedLogin};
