import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            registrationErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        axios
            .post(
                "/register",
                {
                    email: this.state.email,
                    password: this.state.password
                },
                { withCredentials: true }
            )
            .then(response => {
                if (response.data.message === "User has been created.") {
                    console.log(response);
                }
            })
            .catch(error => {
                console.log("registration error", error);
            });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <input 
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Field>
                    <Form.Field>
                    <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Field>
                    <Button type='submit'>Register</Button>
                </Form>
            </div>
        );
    }
}