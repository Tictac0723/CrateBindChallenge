import React, { Component } from 'react';
import logo from './github.gif';
import './Header.css';

class Header extends Component {
    render () {
        return (
            <div>
                <header className="the-header">
                    <img src={logo} className="header-logo" alt="github logo" />
                    <h1 className="header-title">Does she 'GIT' it?</h1> 
                </header>
            </div>
        )
    }
}

export default Header;