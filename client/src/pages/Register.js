import React from "react";
import {NavLink, Link} from "react-router-dom"


class Register extends React.Component{
    render(){

        return(
            
       <main>

<body class="account-page">
<div class="main-wrapper">

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
<NavLink to="#">Counselor <i className="fas fa-chevron-down"></i></NavLink>
<ul className="submenu">
<li className=""><NavLink to="BlogList">Counselor List</NavLink></li>
<li className=""><NavLink to="BlogDetails">Counselor Grid</NavLink></li>
</ul>
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
<li className=""><NavLink to="ContactUs">Contact Us</NavLink></li>
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
<br/>
<br/>
<div class="content">
<div class="container-fluid">
<div class="row">
<div class="col-md-8 offset-md-2">

<div class="account-content">
<div class="row align-items-center justify-content-center">
<div class="col-md-7 col-lg-6 login-left">
<img src="assets/img/login-banner.png" class="img-fluid" alt="Doccure Register"/>
</div>
<div class="col-md-12 col-lg-6 login-right">
<div class="login-header">
<h3>Getting Started <a href="doctor-register.html">Are you a Counselor?</a></h3>
</div>

<form action="https://eu-west-2.aws.data.mongodb-api.com/app/data-ohtuo/endpoint/data/v1">
<div class="form-group form-focus">
<input type="text" class="form-control floating"/>
<label class="focus-label">Name</label>
</div>
<div class="form-group form-focus">
<input type="text" class="form-control floating"/>
<label class="focus-label">Mobile Number</label>
</div>
<div class="form-group form-focus">
<input type="password" class="form-control floating"/>
<label class="focus-label">Create Password</label>
</div>
<div class="text-end">
<a class="forgot-link" href="/Login">Already have an account?</a>
</div>
<button class="btn btn-primary w-100 w-100 btn-lg login-btn" type="submit">Signup</button>
<div class="login-or">
<span class="or-line"></span>
<span class="span-or">or</span>
</div>
<div class="row form-row social-login">
<div class="col-6">
<Link href="#" class="btn btn-facebook w-100 w-100"><i class="fab fa-facebook-f me-1"></i> Login</Link>
</div>
<div class="col-6">
<Link href="#" class="btn btn-google w-100 w-100"><i class="fab fa-google me-1"></i> Login</Link>
</div>
</div>
</form>

</div>
</div>
</div>

</div>
</div>
</div>
</div>
</div>
</body>
       </main> 

        )
    }
}
export default Register;