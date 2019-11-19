import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleSubmit = event => {
        event.preventDefault();
        // this.props.login(this.state)

        const endpoint = "https://lambda-mud-test.herokuapp.com/api/login/"
        axios
            .post(endpoint, this.state)
            .then(res => {
                const token = res.data["key"];
                localStorage.setItem("token", token);
                this.props.loginKey(localStorage.getItem('token'))
                this.props.history.push("/game");
            })
            .catch(error => {
                console.log("error", error);
            });
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-page">
                    <h1 className="title">Login to Play</h1>
                    <p className="subtitle">You must be logged into your account in order to play.</p>
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <input
                            type="text"
                            placeholder="username"
                            onChange={this.handleChange}
                            value={this.state.username}
                            name="username"
                        />
                        <input
                            type="text"
                            placeholder="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            name="email"
                        />
                        <input
                            type="password"
                            placeholder="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            name="password"
                        />
                        <button type="submit">Login</button>
                        <button onClick={() => { this.props.history.push('/') }}>Back to Home</button>
                    </form>
                    <p className="login-register-link">
                        Don't have an account yet?
                        <Link className="signup-redirect" to="/register"> Register here!</Link>
                    </p>
                </div>
            </div>
        )
    }
}