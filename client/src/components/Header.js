import React from "react";
import {NavLink, Link} from "react-router-dom"

class Header extends React.Component{
    render(){
        return(
    <>
<div className="main-wrapper">

<div className="home-one-banner">
<div className="bg-shapes">
<img src="assets/img/shapes/shape-10.png" class="shape-01 aos" alt="img" data-aos="fade-right"/>
<img src="assets/img/shapes/shape-9.png" class="shape-03 aos" alt="img" data-aos="zoom-out"/>
<img src="assets/img/shapes/shape-8.png" class="shape-04 aos" alt="img" data-aos="fade-left"/>
<img src="assets/img/shapes/shape-6.png" class="shape-02 aos" alt="img" data-aos="fade-down"/>
</div>
<div className="container">

<header className="header">
<div className="nav-bg">
<nav className="navbar navbar-expand-lg header-nav nav-transparent header-nav-one">
<div className="navbar-header">
<Link id="mobile_btn" href="javascript:void(0);">
<span className="bar-icon blue-bar">
<span></span>
<span></span>
<span></span>
</span>
</Link>
<NavLink to="/" className="navbar-brand logo">
<img src="assets/img/logo.png" className="img-fluid" alt="Logo"/>
</NavLink>
</div>
<div className="main-menu-wrapper">
<div className="menu-header">
<Link to="/" class="menu-logo">
<img src="assets/img/logo.png" class="img-fluid" alt="Logo"/>
</Link>
<Link id="menu_close" className="menu-close" href="javascript:void(0);"> <i className="fas fa-times"></i>
</Link>
</div>
<ul className="main-nav black-font grey-font">
<li className="has-submenu active">
    <a href="/" exact activeclassName="active">Home<i ></i></a>
</li>

<li className="has-submenu ">
<NavLink to="CounselorGrid" activeclassName="active">Counselor </NavLink>
</li>
<li className="has-submenu ">
<NavLink to="#">Announcemet<i class="fas fa-chevron-down"></i></NavLink>
<ul className="submenu">
<li className=""><NavLink to="search.html">Announcement List</NavLink></li>
<li className=""><NavLink to="favourites.html">Announcement Details</NavLink></li>
</ul>
</li>
<li className="has-submenu ">
<NavLink to="#">Blog <i class="fas fa-chevron-down"></i></NavLink>
<ul className="submenu">
<li className=""><NavLink to="BlogList">Blog List</NavLink></li>
<li className=""><NavLink to="BlogDetails">Blog Details</NavLink></li>
</ul>
</li>
<li className="has-submenu ">
<NavLink to="#">Pages <i className="fas fa-chevron-down"></i></NavLink>
<ul className="submenu">
<li className=""><NavLink to="/About">About Us</NavLink></li>
<li className=""><NavLink to="blog-grid.html">Contact Us</NavLink></li>
</ul>
</li>
<li className="has-submenu ">
<NavLink to="#">Map<i className="fas fa-chevron-down"></i></NavLink>
<ul className="submenu">
<li className=""><NavLink to="calendar.html">Map Grid</NavLink></li>
<li className=""><NavLink to="components.html">Map List</NavLink></li>
</ul>
</li>
<li className="login-link">
<NavLink to="login.html">Login / Signup</NavLink>
</li>
</ul>
<ul className="nav header-navbar-rht right-menu">
<li className="nav-item">
<Link className="nav-link login-blue-bg" to="/Login">Sign In</Link>
</li>
<li className="nav-item">
<Link className="nav-link signup-white-bg" to="/Register">Sign Up</Link>
</li>
</ul>
</div>
</nav>
</div>
</header>
</div>
</div>
</div>
</>      )
    }
}
export default Header;