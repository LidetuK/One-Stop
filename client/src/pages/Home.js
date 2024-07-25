import React from "react";
import {NavLink, Link} from "react-router-dom"


class Home extends React.Component{
    render(){

        return(
        
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
<NavLink to="#">Counselor <i className="fas fa-chevron-down"></i></NavLink>
<ul className="submenu">
<li className=""><NavLink to="CounselorList">Counselor List</NavLink></li>
<li className=""><NavLink to="CounselorGrid">Counselor Grid</NavLink></li>
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
<div class="row">
<div class="col-lg-6 col-md-12 banner-left aos" data-aos="fade-up">
<a class="smooth-menu" href="#appointments">
<div class="scroll-down">
<div class="scroll-text">
<p>scroll dow</p>
</div>
<div class="scroll-center">
<div class="scroll-mouse">
<div class="scroll-wheel"></div>
</div>
<div>
<span class="scroll-arrow-one"></span>
</div>
<div>
<span class="scroll-arrow-two"></span>
</div>
</div>
</div>
</a>
<div class="banner-info">
<h2>Search Counselor,</h2>
<h2><span>Make an Appointment</span></h2>
</div>
<div class="banner-details">
<h4><img src="assets/img/banner-check.png" class="me-2" alt=""/>We provides solutions </h4>
<h4><img src="assets/img/banner-check.png" class="me-2" alt=""/> 100% Free counseling</h4>
<p>Discover the best Counseling & One-Stop Center nearest to your location.</p>
</div>

<br/>
<br/>

<br/>
<br/>
</div>
<div class="col-lg-6 col-md-12 aos" data-aos="fade-up">
<img src="assets/img/mo.png" class="img-fluid dr-img" alt=""/>
</div>
</div>
</div>
</div>
<section class="appoinment-section" id="appointments">
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="appoinment-wrapper">
<div class="appoinment-box aos" >
<form action="">
<div class="row">
<div class="col-lg-6 col-md-12">
<div class="form-group appoinment-location">
<i class="feather-search"></i> <input type="text" class="form-control" placeholder="Search Counselors, One-stop Ethiopia centers, etc ..."/>
</div>
</div>
<div class="col-lg-6 col-md-12">
<div class="appoinment-right">
<div class="form-group appoinment-location">
<i class="feather-map-pin"></i> <input type="text" class="form-control" placeholder="Search location"/>
</div>
<div class="form-group">
<button type="submit" class="btn appoinment-btn">
<i class="feather-search"></i>
</button>
</div>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
<div class="looking-section-three">
    
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="header-three aos" data-aos="fade-up">
<h2 class="mb-0">What are you looking for?</h2>
</div>  
<div class="appointment-bg">
<div class="custom-contain">
<div class="row">
    
<div class="col-xl-5 col-lg-4 col-md-12 aos" data-aos="fade-up">
<div class="appointment-left">
<img src="assets/img/imags.jpeg" class="img-fluid" alt=""/>
</div>
</div>
<div class="col-xl-7 col-lg-8 col-md-12">
    
<div class="row justify-content-center">
<div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
<div class="appointment-grid w-100">
<div class="appointment-icon icon-primary">
<i class=""><img src="assets/img/visit-01.jpeg" class="img-fluid" alt=""/></i>
</div>
<br/>
<br/>
<div class="appointment-info">
<a href="search.html" class="appointment-link">Visit Counselor</a>
<p>best counseling specialists are here for you.</p>
<a href="search.html" class="btn appointment-read-btn">GO <i class="fas fa-arrow-right ms-2"></i></a>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
<div class="appointment-grid w-100">
<div class="appointment-icon icon-green">
<i class=""><img src="assets/img/icon-03.png" class="img-fluid" alt=""/></i>
</div>
<div class="appointment-info">
<a href="pharmacy-search.html" class="appointment-link">What's New?</a>
<p>Stay up to date with new and updated contents on the One-Stop Ethiopia website.</p>
<a href="pharmacy-search.html" class="btn appointment-read-btn">GO<i class="fas fa-arrow-right ms-2"></i></a>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
<div class="appointment-grid w-100">
<div class="appointment-icon icon-red">
<i class=""><img src="assets/img/location.png" class="img-fluid" alt=""/></i>
</div>
<div class="appointment-info">
<Link to="#" class="appointment-link">Access <br/> Map</Link>
<p>Access map nearest to your location.</p>
<Link to="#" class="btn appointment-read-btn">GO<i class="fas fa-arrow-right ms-2"></i></Link>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section class="doctor-section">
<div class="doctor-right-img aos" data-aos="fade-up">
<img src="assets/img/Counselor/best-doctor-bg.jpg" class="img-fluid" alt=""/>
</div>
<div class="container">
<div class="section-header text-center aos" data-aos="fade-up">
<h2 class="color-primary">Book Our Counselor</h2>
<p class="sub-title color-grey">We work with best counselors to deliver top-notch counseling services for you.</p>
</div>
<div class="row">
<div class="col-md-12 aos" data-aos="fade-up">
<div class="doctor-book-slider slider">
<div class="doctor-profile-widget">
<a href="CounselorMeskerem">
<img src="assets/img/counselor/book-doctor-01.jpg" class="img-fluid book-doctor" alt=""/>
</a>
<div class="pro-content">
<div class="provider-info">
<div class="pro-icon">
<img src="assets/img/icons/icon2.svg" class="img-fluid" alt=""/>
</div>
<h3 class="mb-1">
<a href="CounselorMeskerem" tabindex="0">Meskerem Tibebu
<img src="assets/img/doctor-check.png" alt=""/>
</a>
</h3>
<p>Counselor</p>
<div>
<div class="rating">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating">4.9 ( 82 )</span>
</div>
</div>
<div class="content-info">
<div class="social-info">
<Link href="#" target="_blank"><i class="fab fa-facebook hi-icon"></i></Link>
<Link href="#" target="_blank"><i class="fab fa-linkedin hi-icon"></i></Link>
<Link href="#" target="_blank"><i class="fab fa-instagram hi-icon"></i></Link>
<Link href="#" target="_blank"><i class="fab fa-twitter hi-icon"></i></Link>
</div>
<div class="booking-btn">
<a href="booking.html" class="btn book-btn">
Send Request
</a>
</div>
</div>
</div>
</div>
</div>
<div class="doctor-profile-widget">
<a href="CounselorDiborah">
<img src="assets/img/counselor/book-doctor-15.jpg" class="img-fluid book-doctor" alt=""/>
</a>
<div class="pro-content">
<div class="provider-info">
<div class="pro-icon">
<img src="assets/img/icons/icon3.svg" class="img-fluid" alt=""/>
</div>
<h3 class="mb-1">
<a href="CounselorDiborah" tabindex="0">Deborah Kiros
<img src="assets/img/doctor-check.png" alt=""/>
</a>
</h3>
<p>Mental Therapist</p>
<div>
<div class="rating">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating">4.9 ( 82 )</span>
</div>
</div>
<div class="content-info">
<div class="social-info">
<Link href="#" target="_blank"><i class="fab fa-facebook hi-icon"></i></Link>
<Link href="#" target="_blank"><i class="fab fa-linkedin hi-icon"></i></Link>
<Link href="#" target="_blank"><i class="fab fa-instagram hi-icon"></i></Link>
<Link href="#" target="_blank"><i class="fab fa-twitter hi-icon"></i></Link>
</div>
<div class="booking-btn">
<Link href="booking.html" class="btn book-btn">
Send Request
</Link>
</div>
</div>
</div>
</div>
</div>
<div class="doctor-profile-widget">
<Link href="CounselorMakida">
<img src="assets/img/counselor/book-doctor-12.jpg" class="img-fluid book-doctor" alt=""/>
</Link>
<div class="pro-content">
<div class="provider-info">
<div class="pro-icon">
<img src="assets/img/icons/icon1.svg" class="img-fluid" alt=""/>
</div>
<h3 class="mb-1">
<Link href="CounselorMakida" tabindex="0">Makida Alemu
<img src="assets/img/doctor-check.png" alt=""/>
</Link>
</h3>
<p>Psychologist</p>
<div>
<div class="rating">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating">4.9 ( 82 )</span>
</div>
</div>
<div class="content-info">
<div class="social-info">
<Link href="#" target="_blank"><i class="fab fa-facebook hi-icon"></i></Link>
<Link href="#" target="_blank"><i class="fab fa-linkedin hi-icon"></i></Link>
<Link href="#" target="_blank"><i class="fab fa-instagram hi-icon"></i></Link>
<Link href="#" target="_blank"><i class="fab fa-twitter hi-icon"></i></Link>
</div>
<div class="booking-btn">
<a href="booking.html" class="btn book-btn">
Send Request
</a>
</div>
</div>
</div>
</div>
</div>
<div class="doctor-profile-widget">
<a href="CounselorHana">
<img src="assets/img/Counselor/book-doc-05.jpeg" class="img-fluid book-doctor" alt=""/>
</a>
<div class="pro-content">
<div class="provider-info">
<div class="pro-icon">
<img src="assets/img/icons/icon4.svg" class="img-fluid" alt=""/>
</div>
<h3 class="mb-1">
<a href="CounselorHana" tabindex="0">Hana Bekele
<img src="assets/img/doctor-check.png" alt=""/>
</a>
</h3>
<p>Mental Specialist</p>
<div>
<div class="rating">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating">4.9 ( 82 )</span>
</div>
</div>
<div class="content-info">
<div class="social-info">
<Link href="#" target="_blank"><i class="fab fa-facebook hi-icon"></i></Link>
<Link href="#" target="_blank"><i class="fab fa-linkedin hi-icon"></i></Link>
<Link href="#" target="_blank"><i class="fab fa-instagram hi-icon"></i></Link>
<Link href="#" target="_blank"><i class="fab fa-twitter hi-icon"></i></Link>
</div>
<div class="booking-btn">
<a href="booking.html" class="btn book-btn">
Send Request
</a>
</div>
</div>
</div>
</div>
</div>
<div class="doctor-profile-widget">
<a href="CounselorEmebet">
<img src="assets/img/counselor/book-doctor-1.jpg" class="img-fluid book-doctor" alt=""/>
</a>
 <div class="pro-content">
<div class="provider-info">
<div class="pro-icon">
<img src="assets/img/icons/icon2.svg" class="img-fluid" alt=""/>
</div>
<h3 class="mb-1">
<a href="CounselorEmebet" tabindex="0">Emebet Worku
<img src="assets/img/doctor-check.png" alt=""/>
</a>
</h3>
<p>Counselor</p>
<div>
<div class="rating">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating">4.9 ( 82 )</span>
</div>
</div>
<div class="content-info">
<div class="social-info">
<Link href="#" target="_blank"><i class="fab fa-facebook hi-icon"></i></Link>
<Link href="#" target="_blank"><i class="fab fa-linkedin hi-icon"></i></Link>
<Link href="#" target="_blank"><i class="fab fa-instagram hi-icon"></i></Link>
<Link href="#" target="_blank"><i class="fab fa-twitter hi-icon"></i></Link>
</div>
<div class="booking-btn">
<a href="booking.html" class="btn book-btn">
Send Request
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-md-12 text-end">
<div class="slick-view-btn me-2">
<a href="CounselorGrid" class="btn">View More <i class="fas fa-arrow-right ms-2"></i></a>
</div>
</div>
</div>
</div>
</section>


<section class="features-section">
<div class="container">
<div class="section-header text-center aos" data-aos="fade-up">
<h2 class="color-primary">Availabe Features in One-Stop Ethiopia</h2>
<p class="sub-title color-grey">we create a platform helpline platform with different features.</p>
</div>
<div class="row">
<div class="col-md-12 aos" data-aos="fade-up">
<div class="features-section-slider slider">
<div class="features-grid hvr-bounce-to-bottom">
<div class="features-cricle">
<div class="features-round">
<img src="assets/img/services/features-01.png" class="img-fluid" alt=""/>
</div>
</div>
<h4>Counseling</h4>
</div>
<div class="features-grid hvr-bounce-to-bottom">
<div class="features-cricle">
<div class="features-round">
<img src="assets/img/services/features-02.jpeg" class="img-fluid" alt=""/>
</div>
</div>
<h4>Training</h4>
</div>
<div class="features-grid hvr-bounce-to-bottom">
<div class="features-cricle">
<div class="features-round">
<img src="assets/img/services/features-03.png" class="img-fluid" alt=""/>
</div>
</div>
<h4>Video Chat</h4>
</div>
<div class="features-grid hvr-bounce-to-bottom">
<div class="features-cricle">
<div class="features-round">
<img src="assets/img/services/features-04.png" class="img-fluid" alt=""/>
</div>
</div>
<h4>Text Chat</h4>
</div>
<div class="features-grid hvr-bounce-to-bottom">
<div class="features-cricle">
<div class="features-round">
<img src="assets/img/services/features-05.png" class="img-fluid" alt=""/>
</div>
</div>
<h4>Call</h4>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-md-12 text-end">
<div class="slick-view-btn me-2">
<Link href="#" class="btn">
View More <i class="fas fa-arrow-right ms-2"></i>
</Link>
</div>
</div>
</div>
</div>
</section>


<section class="news-letter-bg">
<div class="container">
<div class="news-bg">
<div class="row">
<div class="col-lg-8 col-md-12 news-left aos" data-aos="fade-up">
<div>
<h2>Grab Our Newsletter</h2>
<p>To receive latest Information and Announcements from One-Stop Ethiopia.</p>
</div>
<div>
<form>
<div class="form-group">
<input type="text" class="form-control me-2" placeholder="Enter Your Email Address"/>
<button type="submit" class="btn">Subscribe</button>
</div>
</form>
</div>
</div>
<div class="col-lg-4 col-md-12 aos" data-aos="fade-up">
<div class="news-img">
<img src="assets/img/blog/news-letter-img.png" class="img-fluid" alt=""/>
</div>
</div>
</div>
</div>
</div>
</section>


<section class="news-section">
<div class="container">
<div class="section-header text-center aos" data-aos="fade-up">
<h2 class="color-primary">Let’s See Our Latest News</h2>
<p class="sub-title color-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
<div class="row justify-content-center">
<div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
<div class="grid-news w-100">
<div class="news-image">
<a href="BlogDetails">
<img className="img-fluid" src="assets/img/blog/blog0.jpg" alt="News Image"/>
</a>
</div>
<div class="news-content">
<ul>
<li>
<div class="news-date">
<Link href="#">
<i class="feather-calendar me-2"></i>
<span>4 Mar 2023</span>
</Link>
</div>
</li>
<li>
<div class="news-date">
<Link href="#" class="news-light-btn">
<i class="feather-tag me-2"></i>
<span>Community</span>
</Link>
</div>
</li>
</ul>
<h3 class="news-title">
<a href="BlogDetails">Community and gender based violence</a>
</h3>
<p>
<a href="BlogDetails">Read News</a>
</p>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
<div class="grid-news w-100">
<div class="news-image">
<Link to="BlogDetails">
<img class="img-fluid" src="assets/img/blog/blog1.jpg" alt="News Image"/>
</Link>
</div>
<div class="news-content">
<ul>
<li>
<div class="news-date">
<Link href="#">
<i class="feather-calendar me-2"></i>
<span>10 Apr 2023</span>
</Link>
</div>
</li>
<li>
<div class="news-date">
<Link href="#" class="news-light-btn">
<i class="feather-tag me-2"></i>
<span>Visit</span>
</Link>
</div>
</li>
</ul>
<h3 class="news-title">
<a href="BlogDetails">One-Stop Ethiopia – Making your visit?</a>
</h3>
<p>
<a href="BlogDetails">Read News</a>
</p>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
<div class="grid-news w-100">
<div class="news-image">
<a href="BlogDetails">
<img class="img-fluid" src="assets/img/blog/blog2.jpeg" alt="News Image"/>
</a>
</div>
<div class="news-content">
<ul>
<li>
<div class="news-date">
<Link href="#">
<i class="feather-calendar me-2"></i>
<span>15 Apr 2023</span>
</Link>
</div>
</li>
<li>
<div class="news-date">
<Link href="#" class="news-light-btn">
<i class="feather-tag me-2"></i>
<span>Online</span>
</Link>
</div>
</li>
</ul>
<h3 class="news-title">
<a href="BlogDetails">Benefits of consulting with an Online counselor</a>
</h3>
<p>
<a href="blog-details.html">Read News</a>
</p>
</div>
</div>
</div>
</div>
<div class="blog-details-btn text-center">
<a href="BlogList" class="btn view-more">View More <i class="fas fa-arrow-right ms-2"></i></a>
</div>
</div>
</section>

       
</div> 

        )
    }
}
export default Home;