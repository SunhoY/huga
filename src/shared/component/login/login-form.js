import React, {Component} from "react";
import {Button, Col, Form, FormControl, FormGroup} from "react-bootstrap";
import {COL_SPAN_INPUT, COL_SPAN_LABEL} from "../constant/col-span";
import {Link} from "react-router-dom";

export class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {};
    }

    onSubmit(e) {
        e.preventDefault();

        const {email, password} = this.state;

        this.props.onSubmit(email, password);
    }

    handleChange({target: {id, value}}) {
        this.setState({
            [id]: value
        });
    }

    render() {
        return <div>
            <h1>휴가 관리</h1>
            <Form horizontal onSubmit={this.onSubmit}>
                <FormGroup controlId="email">
                    <Col sm={COL_SPAN_INPUT}>
                        <FormControl type="email"
                                     placeholder="Email"
                                     onChange={this.handleChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup controlId="password">
                    <Col sm={COL_SPAN_INPUT}>
                        <FormControl type="password"
                                     placeholder="Password"
                                     onChange={this.handleChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={COL_SPAN_LABEL} sm={COL_SPAN_INPUT}><Button type="submit">LOGIN</Button></Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={COL_SPAN_LABEL} sm={COL_SPAN_INPUT}><Link to="/member/join">JOIN</Link></Col>
                </FormGroup>
            </Form>
        </div>
    }
}
