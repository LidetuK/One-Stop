import React from "react";

import {NavLink, Link} from "react-router-dom"

class ContacUs extends React.Component{
    render(){
        return(
            <main>
 
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
<div class="breadcrumb-bar">
<div class="container-fluid">
<div class="row align-items-center">
<div class="col-md-12 col-12">
<h2 class="breadcrumb-title">Contact Us</h2>
</div>
</div>
</div>
</div>

<section class="contact-section">
<div class="container">
<div class="row mb-5">
<div class="col-md-12 text-center">
<h3 class="mb-4">Contact Us</h3>
<p>Great Counselor if you need your family member to get effective immediate assistance, One-stop center treatment or a simple consultation.</p>
</div>
</div>
<div class="row">
<div class="col-md-4 d-flex">
<div class="contact-box flex-fill">
<div class="infor-img">
<div class="image-circle">
<i class="feather-phone"></i>
</div>
</div>
<div class="infor-details text-center">
<label>Phone Number</label>
<p>+25199999999</p>
</div>
</div>
</div>
<div class="col-md-4 d-flex">
<div class="contact-box flex-fill">
<div class="infor-img">
<div class="image-circle bg-primary">
<i class="feather-mail"></i>
</div>
</div>
<div class="infor-details text-center">
<label>Email</label>
<p><a href="" class="__cf_email__" data-cfemail="bad9d5d4cedbd9cefadfc2dbd7cad6df94d9d5d7">[email&#160;protected]</a></p>
</div>
</div>
</div>
<div class="col-md-4 d-flex">
<div class="contact-box flex-fill">
<div class="infor-img">
<div class="image-circle">
<i class="feather-map-pin"></i>
</div>
</div>
<div class="infor-details text-center">
<label>Location</label>
<p>Online</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section class="contact-form">
<div class="container">
<div class="section-header text-center">
<h2>Get in touch!</h2>
</div>
<div class="row">
<div class="col-md-12">
<form action="#">
<div class="row">
<div class="col-md-6">
<div class="form-group">
<label>Your Name <span>*</span></label>
<input type="text" class="form-control"/>
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<label>Your Email <span>*</span></label>
<input type="text" class="form-control"/>
</div>
</div>
<div class="col-md-12">
<div class="form-group">
<label>Subject</label>
<input type="text" class="form-control"/>
</div>
</div>
<div class="col-md-12">
<div class="form-group">
<label>Comments <span>*</span></label>
<textarea class="form-control">

											</textarea>
</div>
</div>
</div>
<button class="btn bg-primary">Send Message</button>
</form>
</div>
</div>
</div>
</section>


<section class="contact-map d-flex">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.716346058072!2d-95.5565430855612!3d29.872453233633234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cfe4516785ed%3A0x774974592a609121!2s54%20Northwest%20Fwy%20%23558%2C%20Houston%2C%20TX%2077040%2C%20USA!5e0!3m2!1sen!2sin!4v1631855334452!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
</section>
</main>
)
}
}
export default ContacUs;