import React from 'react';
import {Button, Col, Form, FormControl, FormGroup} from "react-bootstrap";
import {COL_SPAN_INPUT, COL_SPAN_LABEL} from "../constant/col-span";

export const JoinView = (props) =>
    <Form horizontal onSubmit={props.onSubmitJoin}>
        <FormGroup controlId="email">
            <Col sm={COL_SPAN_LABEL}>Email</Col>
            <Col sm={COL_SPAN_INPUT}>
                <FormControl type="email"/>
            </Col>
        </FormGroup>
        <FormGroup controlId="lastName">
            <Col sm={COL_SPAN_LABEL}>성</Col>
            <Col sm={COL_SPAN_INPUT}><FormControl/></Col>
        </FormGroup>
        <FormGroup controlId="firstName">
            <Col sm={COL_SPAN_LABEL}>이름</Col>
            <Col sm={COL_SPAN_INPUT}><FormControl/></Col>
        </FormGroup>
        <FormGroup>
            <Col smOffset={COL_SPAN_LABEL} sm={COL_SPAN_INPUT}><Button type="submit">JOIN</Button></Col>
        </FormGroup>
    </Form>;
