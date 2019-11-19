import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

export default class Unauthorized extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="unauthorized-container">
                <h1 className="unauthorized-title">You are unauthorized to view this page! Please login first to continue.</h1>
                <h3 className="unauthorized-subtitle"><Link className='landing-link' to='/login'>Return to Login</Link></h3>
            </div>
        )
    }
}