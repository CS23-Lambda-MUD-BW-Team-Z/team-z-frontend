import React from "react";
import axios from "axios";

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

    handleSubmit = event => {
        event.preventDefault();
        const endpoint = "https://lambda-mud-test.herokuapp.com/api/registration/";
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
                    Create an Account
                    <form onSubmit={this.handleSubmit}>
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
                            type="text"
                            placeholder="password"
                            onChange={this.handleChange}
                            value={this.state.password1}
                            name="password1"
                        />
                        <input
                            type="text"
                            placeholder="confirm password"
                            onChange={this.handleChange}
                            value={this.state.password2}
                            name="password2"
                        />
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}