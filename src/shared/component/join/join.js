import React, {Component} from 'react';
import {createUser} from '../../service/user-service';
import {Redirect} from 'react-router';
import {CREATED} from 'http-status';
import {JoinView} from "./join-view";
import {Login} from "../login/login";

export class Join extends Component {
    constructor(props) {
        super(props);

        this.onSubmitJoin = this.onSubmitJoin.bind(this);
        this.state = {
            created: false
        }
    }

    onSubmitJoin(user) {
        let result = createUser(user);

        if(result.status === CREATED) {
            this.setState({created: true});
        }
    }

    render() {
        return <div>
            <JoinView/>
            {this.state.created && <Redirect to={Login} />}
        </div>
    }
}