import React from "react";
import {Button, Col, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import {COL_SPAN_INPUT, COL_SPAN_LABEL} from "../constant/col-span";
import {Link} from "react-router-dom";

export const LoginView = (props) => {
    return <div>
        <h1>휴가 관리</h1>
        <Form horizontal onSubmit={props.onLoginSubmit}>
            <FormGroup controlId="email">
                <Col componentClass={ControlLabel} sm={COL_SPAN_LABEL}>Email</Col>
                <Col sm={COL_SPAN_INPUT}><FormControl type="email" placeholder="Email"/></Col>
            </FormGroup>
            <FormGroup controlId="password">
                <Col componentClass={ControlLabel} sm={COL_SPAN_LABEL}>Password</Col>
                <Col sm={COL_SPAN_INPUT}><FormControl type="password" placeholder="Password"/></Col>
            </FormGroup>
            <FormGroup>
                <Col smOffset={COL_SPAN_LABEL} sm={COL_SPAN_INPUT}><Button type="submit">LOGIN</Button></Col>
            </FormGroup>
            <FormGroup>
                <Col smOffset={COL_SPAN_LABEL} sm={COL_SPAN_INPUT}><Link to="/user/join">JOIN</Link></Col>
            </FormGroup>
        </Form>
    </div>
};