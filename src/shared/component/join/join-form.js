import React, {Component} from 'react';
import {Button, Col, Form, FormControl, FormGroup} from "react-bootstrap";
import {COL_SPAN_INPUT, COL_SPAN_LABEL} from "../constant/col-span";
import {notEmpty} from "../../validator/validator";

class JoinForm extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {validationState: {}};
    }

    handleChange({target: {id, value}}) {
        let validation;
        if (id === 'firstName' || id === 'lastName') {
            validation = {[id]: notEmpty(value)};
        }

        this.setState((prevState) => {
            let nextState = Object.assign(prevState, {[id]: value});
            let nextValidationState = Object.assign(prevState.validationState, validation);

            return {...nextState, validationState: nextValidationState}
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const {email, firstName, lastName, password} = this.state;

        this.props.onSubmit(email, firstName, lastName, password);
    }

    render() {
        const {validationState} = this.state;

        return <Form horizontal onSubmit={this.onSubmit}>
            <FormGroup controlId="email">
                <Col sm={COL_SPAN_INPUT}>
                    <FormControl type="email"
                                 onChange={this.handleChange}
                                 placeholder="3S Soft Email Address"
                    />
                </Col>
            </FormGroup>
            <FormGroup controlId="lastName"
                       validationState={validationState.lastName}>
                <Col sm={COL_SPAN_INPUT}>
                    <FormControl onChange={this.handleChange}
                                 placeholder="Last name"
                    />
                </Col>
            </FormGroup>
            <FormGroup controlId="firstName"
                       validationState={validationState.firstName}>
                <Col sm={COL_SPAN_INPUT}>
                    <FormControl onChange={this.handleChange}
                                 placeholder="First name"
                    />
                </Col>
            </FormGroup>
            <FormGroup controlId="password"
                       validationState={validationState.password}>
                <Col sm={COL_SPAN_INPUT}>
                    <FormControl onChange={this.handleChange}
                                 placeholder="Password"
                    />
                </Col>
            </FormGroup>
            <FormGroup>
                <Col smOffset={COL_SPAN_LABEL} sm={COL_SPAN_INPUT}><Button type="submit">JOIN</Button></Col>
            </FormGroup>
        </Form>;
    }
}

export {JoinForm};

