import React from "react";

import {NavLink, Link} from "react-router-dom"

class About extends React.Component{
    render(){
        return(
            <main>
                <body class="about-page">
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
<div class="breadcrumb-bar">
<div class="container-fluid">
<div class="row align-items-center">
<div class="col-md-12 col-12">
<h2 class="breadcrumb-title">About Us</h2>
</div>
</div>
</div>
</div>


<section class="about-section">
<div class="container">
<div class="row">
<div class="col-lg-6 col-md-12">
<Link to="#" class="about-titile mb-4">ONE STOP ETHIOPIA</Link>
<h3 class="mb-4">Company Profile</h3>
<p>One-Stop Ethiopia is an online counseling service aims to serve as a multi-channel platform for victims of Sexual and Gender Based Violence (SGBV),
     harmful traditional practices, teenage pregnancy, STD, early marriage and abortion with FREE of charge online support by our expert counselors.</p>
<p class="mb-0">We facilitate easy access to the medical and legal services of the one stop centers in
the country, This would enable victims to recover from the psychological/emotional and physical
trauma they have suffered, as well as obtain legal remedy and justice they deserve.</p>
</div>
<div class="col-md-6">
</div>
</div>
</div>
</section>

<section class="select-category">
<div class="container">
<div class="row justify-content-center">
<div class="col-lg-4 col-md-6 category-col d-flex">
<div class="category-subox pb-0 d-flex flex-wrap w-100">
<h4>Visit Our Counselors</h4>
 <p>We work with best counselors to deliver top-notch counseling services.</p>
<div class="subox-img">
<div class="subox-circle">
<img src="assets/img/visit-01.jpeg" alt="" width="42"/>
</div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6 category-col d-flex">
<div class="category-subox pb-0 d-flex flex-wrap w-100">
<h4>One-Stop Information Desk</h4>
<p>We provide a wide range of detailed information.</p>
<div class="subox-img">
<div class="subox-circle">
<img src="assets/img/special.png" alt="" width="42"/>
</div>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6 category-col d-flex">
<div class="category-subox pb-0 d-flex flex-wrap w-100">
<h4>Find One-stop Center</h4>
<p>We provide a map to show where the nearest one stop center is located.</p>
<div class="subox-img">
<div class="subox-circle">
<img src="assets/img/location.png" alt="" width="42"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section class="section section-featurebox">
<div class="container">
<div class="section-header text-center">
<h2>Available Features in One-Stop Ethiopia</h2>
<p class="sub-title">we create a platform helpline platform with different features.</p>
</div>
<div class="row justify-content-center">
<div class="feature-col-list">
<div class="feature-col">
<div class="feature-subox d-flex flex-wrap justify-content-center">
<img src="assets/img/features/feature-07.jpg" class="img-fluid" alt="Features"/>
<h4>Counseling</h4>
</div>
</div>
<div class="feature-col">
<div class="feature-subox d-flex flex-wrap justify-content-center">
<img src="assets/img/features/feature-12.jpg" class="img-fluid" alt="Features"/>
<h4>Legal Support</h4>
</div>
</div>
<div class="feature-col">
<div class="feature-subox d-flex flex-wrap justify-content-center">
<img src="assets/img/features/feature-08.jpg" class="img-fluid" alt="Features"/>
<h4>Book Online</h4>
</div>
</div>
<div class="feature-col">
<div class="feature-subox d-flex flex-wrap justify-content-center">
<img src="assets/img/features/feature-09.jpg" class="img-fluid" alt="Features"/>
<h4>Info Desk</h4>
</div>
</div>
<div class="feature-col">
<div class="feature-subox d-flex flex-wrap justify-content-center">
<img src="assets/img/features/feature-10.jpg" class="img-fluid" alt="Features"/>
<h4>Announcements</h4>
</div>
</div>
<div class="feature-col">
<div class="feature-subox d-flex flex-wrap justify-content-center">
<img src="assets/img/features/feature-11.jpg" class="img-fluid" alt="Features"/>
<h4>Training</h4>
 </div>
</div>
</div>
</div>
</div>
</section>

<section class="section section-specialities">
<div class="container-fluid">
<div class="section-header text-center">
<h2>Special For You</h2>
<p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
<div class="row justify-content-center">
<div class="col-md-9">

<div class="specialities-slider slider">

<div class="speicality-item text-center">
<div class="speicality-img">
<img src="assets/img/specialities/specialities-01.png" class="img-fluid" alt="Speciality"/>
<span><i class="fa fa-circle" aria-hidden="true"></i></span>
</div>
<p>Text Chat</p>
</div>


<div class="speicality-item text-center">
<div class="speicality-img">
<img src="assets/img/specialities/specialities-02.png" class="img-fluid" alt="Speciality"/>
<span><i class="fa fa-circle" aria-hidden="true"></i></span>
</div>
<p>Video Chat</p>
</div>


<div class="speicality-item text-center">
<div class="speicality-img">
<img src="assets/img/specialities/specialities-03.png" class="img-fluid" alt="Speciality"/>
<span><i class="fa fa-circle" aria-hidden="true"></i></span>
</div>
<p>Call</p>
</div>


<div class="speicality-item text-center">
<div class="speicality-img">
<img src="assets/img/specialities/specialities-04.png" class="img-fluid" alt="Speciality"/>
<span><i class="fa fa-circle" aria-hidden="true"></i></span>
</div>
<p>Map</p>
</div>


<div class="speicality-item text-center">
<div class="speicality-img">
<img src="assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality"/>
<span><i class="fa fa-circle" aria-hidden="true"></i></span>
</div>
<p>News</p>
</div>

</div>

</div>
</div>
</div>
</section>


<section class="section section-testimonial">
<div class="container">
<div class="section-header text-center mb-4">
<h2>Testimonials</h2>
<p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
<div class="row justify-content-center">
<div class="col-lg-12">

<div class="testimonial-slider slider">

<div class="testimonial-item text-center">
<div class="testimonial-img">
<img src="assets/img/patients/patient1.jpg" class="img-fluid" alt="Speciality"/>
</div>
<div class="testimonial-content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p class="user-name">- Jennifer Robinson</p>
<p class="user-location mb-0">Leland, USA</p>
</div>
</div>


<div class="testimonial-item text-center">
<div class="testimonial-img">
<img src="assets/img/patients/patient2.jpg" class="img-fluid" alt="Speciality"/>
</div>
<div class="testimonial-content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p class="user-name">- Denise Stevens</p>
<p class="user-location mb-0">Abington, USA</p>
</div>
</div>


<div class="testimonial-item text-center">
<div class="testimonial-img">
<img src="assets/img/patients/patient3.jpg" class="img-fluid" alt="Speciality"/>
</div>
<div class="testimonial-content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p class="user-name">- Charles Ortega</p>
<p class="user-location mb-0">El Paso, USA</p>
</div>
</div>


<div class="testimonial-item text-center">
<div class="testimonial-img">
<img src="assets/img/patients/patient4.jpg" class="img-fluid" alt=""/>
</div>
<div class="testimonial-content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p class="user-name">- Jennifer Robinson</p>
<p class="user-location mb-0">Leland, USA</p>
</div>
</div>

</div>

</div>
</div>
</div>
</section>
</div>

</body>
            </main>
        )
    }
}
export default About;