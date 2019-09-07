import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginNav from '../LoginNav/LoginNav.react'


import 'bootstrap/dist/js/bootstrap'
import CommonLogin from '../CommonLogin/CommonLogin.react';




export const Navbar = () => {
    return(
<div>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top row">
<div className="col-sm-10">
<ul className="navbar-nav">
<li className="nav-item">
<a className="nav-link active" href="/"><i className="fa fa-home"></i>HOME</a>
</li>
<LoginNav></LoginNav>
</ul>

</div>
</nav>

</div>

    )
}
export default Navbar;