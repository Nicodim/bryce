import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = props => {

    return (
        <div className="header d-flex justify-content-between">
            <Link to="/">
                <h2>Test</h2>
                </Link>
            <ul className="header-btn d-flex justify-content-between">
                <li>
                    <Link to="/first">Page 1</Link>
                </li>
                <li>
                    <Link to="/sec">Page 2</Link>
                </li>
            </ul>

        </div>
    )
}

export default Header;