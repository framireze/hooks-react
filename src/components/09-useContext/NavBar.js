import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        // <nav>
        //     <ul>
        //         <li>
        //             <Link to="/">Home</Link>
        //         </li>
        //         <li>
        //             <Link to="/about">About</Link>
        //             {/* <a href="./about">About</a> */}
        //         </li>
        //         <li>
        //             <Link to="/login">Login</Link>
        //         </li>
        //     </ul>
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand" >Context</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <NavLink to="/" className='nav-item nav-link' >Home </NavLink>
                <NavLink to="/about" className="nav-item nav-link" >About</NavLink>
                <NavLink to="/login" className="nav-item nav-link" >Login</NavLink>
                </div>
            </div>
        </nav>
    
    )
}

//"nav-item nav-link"
