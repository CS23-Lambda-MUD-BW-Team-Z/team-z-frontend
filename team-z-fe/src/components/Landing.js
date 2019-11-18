import React from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends React.Component {
    state = {

    }

    render() {
        return (
            <div className="landing-container">
                <h3>CS23 Build Week 1 Team Z MUD</h3>
                <Link className='landing-link' to='/login'>Login</Link>
                <Link className='landing-link' to='/register'>Register</Link>
            </div>
        )
    }
}