import React, {Component} from 'react';
import {registerNewMember} from '../../service/member-service';
import {Redirect} from 'react-router';
import {JoinForm} from "./join-form";
import {createMember} from "../../model/member";

export class Join extends Component {
    constructor(props) {
        super(props);

        this.onJoinSubmit = this.onJoinSubmit.bind(this);
        this.state = {
            created: false
        }
    }

    async onJoinSubmit(email, firstName, lastName) {
        const newMember = createMember(email, firstName, lastName);

        try {
            await registerNewMember(newMember);

            this.setState({created: true}, () => {
                alert('성공적으로 생성되었습니다. 관리자에게 등급업을 요청하세요.');
            });
        } catch (error) {
            alert('실패하였습니다.');
        }
    }

    render() {
        return <div>
            <JoinForm onSubmit={this.onJoinSubmit}/>
            {this.state.created && <Redirect to='/' />}
        </div>
    }
}