import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
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
                    username: this.state.username,
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
                            name="username"
                            placeholder="Username"
                            value={this.state.username}
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