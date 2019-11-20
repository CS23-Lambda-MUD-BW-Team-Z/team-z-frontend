import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class Register extends React.Component {
    state = {
        username: "",
        email: "",
        password1: "",
        password2: ""
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };
    //comments
    handleSubmit = event => {
        event.preventDefault();
        const endpoint = "https://lambda-university.herokuapp.com/api/registration/";
        axios
            .post(endpoint, this.state)
            .then(res => {
                console.log("key/token", res.data);
                const token = res.data["key"];
                localStorage.setItem("token", `Token ${token}`)
                this.props.history.push("/");
            })
            .catch(error => {
                console.log("error", error);
            })
    }

    render() {
        return (
            <div className="register-container">
                <div className="register-page">
                    <h1 className="title">Create an Account</h1>
                    <p className="subtitle">Get ready for an epic adventure into Lambda University!</p>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="Username"
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
                            placeholder="Password"
                            onChange={this.handleChange}
                            value={this.state.password1}
                            name="password1"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            onChange={this.handleChange}
                            value={this.state.password2}
                            name="password2"
                        />
                        <button type="submit">Register</button>
                        <button onClick={() => { this.props.history.push('/') }}>Back to Home</button>
                    </form>
                    <p className="login-register-link">
                        Already have an account?
                        <Link className="login-redirect" to="/login"> Login here!</Link>
                    </p>
                </div>
            </div>
        )
    }
}