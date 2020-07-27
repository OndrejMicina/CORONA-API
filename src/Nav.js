import React from 'react';
import './css/App.css';
import {Link} from 'react-router-dom'

function Nav() {
    const navStyle={
        color:'white' ,
        marginTop: '20px',
    };
    const navLogo={
        color:'white' ,
        textDecoration:'none'
    };
  return (
    <nav>
        <Link to="/"style={navLogo} ><h1>CORONA API</h1></Link>
        <ul className="nav-links">            
            <Link style={navStyle} to='/'><li>HOME</li></Link>
            <Link style={navStyle} to='/countries'><li>COUNTRIES</li></Link>            
        </ul>
    </nav>
  );
}

export default Nav;
