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
        
        const endpoint = "https://lambda-university.herokuapp.com/api/login/"
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
                    Please Log In
                    <div className="login-form">
                        <form onSubmit={(event) => this.handleSubmit(event)}>
                            <input
                                type="text"
                                placeholder="username"
                                onChange={this.handleChange}
                                value={this.state.username}
                                name="username"
                            />
                            <input
                                type="password"
                                placeholder="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                                name="password"
                            />
                            <button type="submit">Login</button>
                            <button type="submit" onClick={()=>{this.props.history.push('/')}}>Go Back</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}