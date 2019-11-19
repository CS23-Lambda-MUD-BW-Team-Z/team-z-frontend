import React from "react";
import axios from "axios";
export default class Register extends React.Component {
    state = {
        username: "",
        password1: "",
        password2: ""
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };
    //comments
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
                </div>
            </div>
        )
    }
}