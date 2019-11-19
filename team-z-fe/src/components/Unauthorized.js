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
                <h1 className="unauthorized-title">Error 403</h1>
                <h3 className="unauthorized-subtitle">
                    Unfortunately, you don't have the permissions required to access this page.<br /><br />Please
                    <Link className="landing-link" to="/login"> login </Link>
                    first or return to
                    <Link className='landing-link' to='/'> home</Link>.
                 </h3>
            </div>
        )
    }
}