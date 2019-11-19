import React from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends React.Component {
    state = {
    }

    render() {
        return (
            <>
                <div className="top-container">
                    <div className="text-container">
                        <h3 className="title">Lambda University</h3>
                        <p className="subtitle">A virtual university maze game,<br />powered by React & Django.</p>
                        <div className="button">
                            <Link className='landing-link' to='/register'>Register to Play</Link>
                        </div>
                    </div>
                </div>
                <div className="bottom-container">
                    <div className="text-container">
                        <h3 className="title">Already have an Account?</h3>
                        {/* <p className="subtitle">Log in below</p> */}
                        <div className="button">
                            <Link className='landing-link' to='/login'>Login</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}