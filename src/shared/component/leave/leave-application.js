import React, {Component} from 'react';
import moment from 'moment';
import {FULL_HUGA} from "../constant/huga-type";

export class HugaRegistration extends Component {
    constructor(props) {
        super(props);

        this.onStartDateChange = this.onStartDateChange.bind(this);
        this.onEndDateChange = this.onEndDateChange.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
        this.onRegisterSubmit = this.onRegisterSubmit.bind(this);

        this.state = {
            startDate: moment(),
            endDate: moment(),
            type: FULL_HUGA
        }
    }

    onTypeChange() {

    }

    onStartDateChange() {

    }

    onEndDateChange() {

    }

    onRegisterSubmit() {

    }

    render() {
        return <HugaRegistrationView
            onStartDateChange={this.onStartDateChange}
            onEndDateChange={this.onEndDateChange}
            onTypeChange={this.onTypeChange}
            onRegisterSubmit={this.onRegisterSubmit}
        />
    }
}