import React from "react";

import {NavLink, Link} from "react-router-dom"

class CounselorGrid extends React.Component{
    render(){
        return(
<>

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
<h2 class="breadcrumb-title">Our Counselors</h2>
</div>
</div>
</div>
</div>
<div class="content">
<div class="container-fluid">
<div class="row">
<div class="col-xl-6 col-lg-12 order-md-last order-sm-last order-last map-left">
<div class="row align-items-center mb-4">
<div class="col-md-6 col">
<h4>45 Counselors Found</h4>
</div>
<div class="col-md-6 col-auto">
<div class="view-icons ">
<Link to="CounselorGrid" class="grid-view active"><i class="fas fa-th-large"></i></Link>
<Link to="CounselorList" class="list-view"><i class="fas fa-bars"></i></Link>
</div>
<div class="sort-by d-sm-block d-none">
<span class="sortby-fliter">
<select class="select">
<option>Sort by</option>
<option class="sorting">Rating</option>
<option class="sorting">Popular</option>
<option class="sorting">Latest</option>
<option class="sorting">Free</option>
</select>
</span>
</div>
</div>
</div>
<div class="row">
<div class="col-sm-6 col-md-4 col-xl-6">
<div class="profile-widget">
<div class="doc-img">
<a href="CounselorDiborah">
<img class="img-fluid" alt="User Image" src="assets/img/Counselor/book-doctor-15.jpg"/>
</a>
<Link href="javascript:void(0)" class="fav-btn">
<i class="far fa-bookmark"></i>
</Link>
</div>
<div class="pro-content">
<h3 class="title">
<a href="CounselorDiborah">Dr. Diborah Kiros</a>
<i class="fas fa-check-circle verified"></i>
</h3>
<p class="speciality">MDS - Psychology</p>
<div class="rating">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<span class="d-inline-block average-rating">(17)</span>
</div>
<ul class="available-info">
<li>
<i class="fas fa-map-marker-alt"></i> Addis Ababa, Ethiopia
</li>
<li>
<i class="far fa-clock"></i> Available on Fri, 22 Mar
</li>
<li>
<i class="far fa-money-bill-alt"></i> FREE <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Am here to give FREE counseling service."></i>
</li>
</ul>
<div class="row row-sm">
<div class="col-6">
<a href="CounselorDiborah" class="btn view-btn">View Profile</a>
</div>
<div class="col-6"><Link to="Booking" class="btn book-btn">Book Now</Link>
</div>
</div>
</div>
</div>
</div>
<div class="col-sm-6 col-md-4 col-xl-6">
<div class="profile-widget">
<div class="doc-img">
<a href="CounselorMeskerem">
<img class="img-fluid" alt="User Image" src="assets/img/Counselor/book-doctor-01.jpg"/>
</a>
<a href="javascript:void(0)" class="fav-btn">
<i class="far fa-bookmark"></i>
</a>
</div>
<div class="pro-content">
<h3 class="title">
<a href="CounselorMeskerem">Dr. Meskerem Tibebu</a>
<i class="fas fa-check-circle verified"></i>
</h3>
<p class="speciality">BDS, MDS -Menta Health</p>
<div class="rating">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating">(35)</span>
</div>
<ul class="available-info">
<li>
<i class="fas fa-map-marker-alt"></i> Addis Ababa,  Ethiopia
</li>
<li>
<i class="far fa-clock"></i> Available on Fri, 22 Mar
</li>
<li>
<i class="far fa-money-bill-alt"></i> FREE <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
</li>
</ul>
<div class="row row-sm">
<div class="col-6">
<a href="CounselorMeskerem" class="btn view-btn">View Profile</a>
</div>
<div class="col-6"><Link to="Booking" class="btn book-btn">Book Now</Link>
</div>
</div>
</div>
</div>
</div>
<div class="col-sm-6 col-md-4 col-xl-6">
<div class="profile-widget">
<div class="doc-img">
<a href="CounselorEmebet">
<img class="img-fluid" alt="User Image" src="assets/img/Counselor/book-doctor-1.jpg"/>
</a>
<a href="javascript:void(0)" class="fav-btn">
<i class="far fa-bookmark"></i>
</a>
</div>
<div class="pro-content">
<h3 class="title">
<a href="CounselorEmebet">Dr. Emebet Worku</a>
<i class="fas fa-check-circle verified"></i>
</h3>
<p class="speciality">MBBS, MD - Psychology , DNB - Therapy</p>
<div class="rating">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
 <i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating">(27)</span>
</div>
<ul class="available-info">
<li>
<i class="fas fa-map-marker-alt"></i> Addis Ababa, Ethiopia
</li>
<li>
<i class="far fa-clock"></i> Available on Fri, 22 Mar
</li>
<li>
<i class="far fa-money-bill-alt"></i> FREE <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
</li>
</ul>
<div class="row row-sm">
<div class="col-6">
<a href="CounselorEmebet" class="btn view-btn">View Profile</a>
</div>
<div class="col-6"><Link to="Booking" class="btn book-btn">Book Now</Link>
</div>
</div>
</div>
</div>
</div>
<div class="col-sm-6 col-md-4 col-xl-6">
<div class="profile-widget">
<div class="doc-img">
<a href="CounselorMakida">
<img class="img-fluid" alt="User Image" src="assets/img/Counselor/book-doctor-12.jpg"/>
</a>
<a href="javascript:void(0)" class="fav-btn">
<i class="far fa-bookmark"></i>
</a>
</div>
<div class="pro-content">
<h3 class="title">
<a href="CounselorMakida">Dr. Makida Alemu</a>
<i class="fas fa-check-circle verified"></i>
</h3>
<p class="speciality">MBBS, MS - General counseling, MCh - Psychology</p>
<div class="rating">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating">(4)</span>
</div>
<ul class="available-info">
<li>
<i class="fas fa-map-marker-alt"></i> Bahir Dar, Ethiopia
</li>
<li>
<i class="far fa-clock"></i> Available on Fri, 22 Mar
</li>
<li>
<i class="far fa-money-bill-alt"></i> FREE <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
</li>
</ul>
<div class="row row-sm">
<div class="col-6">
<a href="CounselorMakida" class="btn view-btn">View Profile</a>
</div>
<div class="col-6"><Link to="Booking" class="btn book-btn">Book Now</Link>
</div>
</div>
</div>
</div>
</div>
<div class="col-sm-6 col-md-4 col-xl-6">
<div class="profile-widget">
<div class="doc-img">
<a href="CounselorHana">
<img class="img-fluid" alt="User Image" src="assets/img/Counselor/book-doc-05.jpeg"/>
</a>
<a href="javascript:void(0)" class="fav-btn">
<i class="far fa-bookmark"></i>
</a>
</div>
<div class="pro-content">
<h3 class="title">
<a href="CounselorHana">Dr. Hana Bekele</a>
<i class="fas fa-check-circle verified"></i>
</h3>
<p class="speciality">MS - Mental Health, MBBS, M.Ch - Psychology</p>
<div class="rating"> 
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating">(66)</span>
</div>
<ul class="available-info">
<li>
<i class="fas fa-map-marker-alt"></i> Adama, Ethiopia
</li>
<li>
<i class="far fa-clock"></i> Available on Fri, 22 Mar
</li>
<li>
<i class="far fa-money-bill-alt"></i> FREE
<i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
</li>
</ul>
<div class="row row-sm">
<div class="col-6">
<a href="CounselorHana" class="btn view-btn">View Profile</a>
</div>
<div class="col-6"><Link to="Booking" class="btn book-btn">Book Now</Link>
</div>
</div>
</div>
</div>
</div>
<div class="col-sm-6 col-md-4 col-xl-6">
<div class="profile-widget">
<div class="doc-img">
<a href="/ounselorSelome">
<img class="img-fluid" alt="User Image" src="assets/img/Counselor/Counselor3.png"/>
</a>
<a href="javascript:void(0)" class="fav-btn">
<i class="far fa-bookmark"></i>
</a>
</div>
<div class="pro-content">
<h3 class="title">
<Link to="CounselorSelome">Dr. Selome Getu</Link>
<i class="fas fa-check-circle verified"></i>
</h3>
<p class="speciality">MS - Mental Health, MBBS, M.Ch - Psychology</p>
<div class="rating">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating">(52)</span>
</div>
<ul class="available-info">
<li>
<i class="fas fa-map-marker-alt"></i> Addis Ababa, Ethiopia
</li>
<li>
<i class="far fa-clock"></i> Available on Fri, 22 Mar
</li>
<li>
<i class="far fa-money-bill-alt"></i> FREE
<i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Am Here to give you FREE counseling service"></i>
</li>
</ul>
<div class="row row-sm">
<div class="col-6">
<Link to="CounselorSelome" class="btn view-btn">View Profile</Link>
</div>
<div class="col-6"><Link to="Booking" class="btn book-btn">Book Now</Link>
</div>
</div>
</div>
</div>
</div>
<div class="col-sm-6 col-md-4 col-xl-6">
<div class="profile-widget">
<div class="doc-img">
<a href="CounselorZinash">
<img class="img-fluid" alt="User Image" src="assets/img/Counselor/Counselor53.png"/>
</a>
<a href="javascript:void(0)" class="fav-btn">
<i class="far fa-bookmark"></i>
</a>
</div>
<div class="pro-content">
<h3 class="title">
<Link to="CounselorZinash">Dr. Zinash Mitiku</Link>
<i class="fas fa-check-circle verified"></i>
</h3>
<p class="speciality">MBBS, MD - Psychology , Mental- Health</p>
<div class="rating">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating">(49)</span>
</div>
<ul class="available-info">
<li>
<i class="fas fa-map-marker-alt"></i> Addis Ababa, Ethiopia
</li>
<li>
<i class="far fa-clock"></i> Available on Fri, 22 Mar
</li>
<li>
<i class="far fa-money-bill-alt"></i> FREE
<i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
</li>
</ul>
<div class="row row-sm">
<div class="col-6">
<Link to="CounselorZinash" class="btn view-btn">View Profile</Link>
</div>
<div class="col-6"><Link to="Booking" class="btn book-btn">Book Now</Link>
</div>
</div>
</div>
</div>
</div>
<div class="col-sm-6 col-md-4 col-xl-6">
<div class="profile-widget">
<div class="doc-img">
<a href="doctor-profile.html">
<img class="img-fluid" alt="User Image" src="assets/img/Counselor/Counselor32.png"/>
</a>
<a href="javascript:void(0)" class="fav-btn">
<i class="far fa-bookmark"></i>
</a>
</div>
<div class="pro-content">
<h3 class="title">
<Link to="CounselorTamirat">Dr. Tamrat Hailu</Link>
<i class="fas fa-check-circle verified"></i>
</h3>
<p class="speciality">MS - Mental Health, MBBS, M.Ch - Psychology</p>
<div class="rating">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating">(112)</span>
</div>
<ul class="available-info">
<li>
<i class="fas fa-map-marker-alt"></i> Bahir-Dar, Ethiopia
</li>
<li>
<i class="far fa-clock"></i> Available on Fri, 22 Mar
</li>
<li>
<i class="far fa-money-bill-alt"></i> FREE
<i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
</li>
</ul>
<div class="row row-sm">
<div class="col-6">
<Link to="CounselorTamirat" class="btn view-btn">View Profile</Link>
</div>
<div class="col-6"><Link to="Booking" class="btn book-btn">Book Now</Link>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="load-more text-center">
<a class="btn btn-primary btn-sm" href="javascript:void(0);">Load More</a>
</div>

<div class="col-xl-6 col-lg-12 map-right">
    
<section class="contact-map d-flex">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31526.78350790142!2d38.752597300000005!3d8.98613675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b842cd3af76e3%3A0x21054039764535ef!2z4Yuo4Yqg4Y2N4Yiq4YqrIOGIheGJpeGIqOGJtSDhiq7hiJrhiL3hipUg4YuL4YqTIOGImOGIteGIquGLqyDhiaThibU!5e0!3m2!1sam!2set!4v1686501316351!5m2!1sam!2set" allowfullscreen="" loading="lazy"></iframe>
</section>
<div id="map" class="map-listing"></div>
</div>


</div>

</div>

</div>
</div>
</div>

<script src="assets/libs/jquery/jquery.min.js" type="f798a973a32e3e167469d534-text/javascript"></script>

<script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js" type="f798a973a32e3e167469d534-text/javascript"></script>

<script src="assets/libs/feather/feather.min.js" type="f798a973a32e3e167469d534-text/javascript"></script>

<script src="assets/libs/swiper/js/swiper.min.js" type="f798a973a32e3e167469d534-text/javascript"></script>

<script src="assets/js/slick.js" type="f798a973a32e3e167469d534-text/javascript"></script>
<script src="assets/js/pages/slick.init.js" type="f798a973a32e3e167469d534-text/javascript"></script>

<script src="assets/libs/theia-sticky-sidebar/dist/ResizeSensor.js" type="f798a973a32e3e167469d534-text/javascript"></script>
<script src="assets/libs/theia-sticky-sidebar/dist/theia-sticky-sidebar.js" type="f798a973a32e3e167469d534-text/javascript"></script>

<script src="assets/libs/select2/dist/js/select2.min.js" type="f798a973a32e3e167469d534-text/javascript"></script>
<script src="assets/js/pages/select.init.js" type="f798a973a32e3e167469d534-text/javascript"></script>

<script src="assets/js/moment.min.js" type="f798a973a32e3e167469d534-text/javascript"></script>
<script src="assets/libs/daterangepicker/daterangepicker.js" type="f798a973a32e3e167469d534-text/javascript"></script>
<script src="assets/js/pages/daterangepicker.init.js" type="f798a973a32e3e167469d534-text/javascript"></script>

<script src="assets/js/moment.min.js" type="f798a973a32e3e167469d534-text/javascript"></script>
<script src="assets/js/bootstrap-datetimepicker.min.js" type="f798a973a32e3e167469d534-text/javascript"></script>
<script src="assets/js/pages/datetimepicker.init.js" type="f798a973a32e3e167469d534-text/javascript"></script>

<script src="assets/libs/apex/apexcharts.min.js" type="f798a973a32e3e167469d534-text/javascript"></script>

<script src="assets/js/jquery-ui.min.js" type="f798a973a32e3e167469d534-text/javascript"></script>

<script src="assets/js/jquery-ui.min.js" type="f798a973a32e3e167469d534-text/javascript"></script>
<script src="assets/libs/fullcalendar/fullcalendar.min.js" type="f798a973a32e3e167469d534-text/javascript"></script>
<script src="assets/js/pages/fullcalendar.init.js" type="f798a973a32e3e167469d534-text/javascript"></script>

<script src="assets/libs/fancybox/jquery.fancybox.min.js" type="f798a973a32e3e167469d534-text/javascript"></script>

<script src="assets/js/circle-progress.min.js" type="f798a973a32e3e167469d534-text/javascript"></script>
<script src="assets/js/pages/progress-bar.init.js" type="f798a973a32e3e167469d534-text/javascript"></script>

<script src="assets/libs/bootstrap-tagsinput/bootstrap-tagsinput.js" type="f798a973a32e3e167469d534-text/javascript"></script>

<script src="assets/js/pages/dropzone.init.js" type="f798a973a32e3e167469d534-text/javascript"></script>
<script src="assets/js/pages/profile-settings.init.js" type="f798a973a32e3e167469d534-text/javascript"></script>

<script src="assets/js/owl.carousel.min.js" type="f798a973a32e3e167469d534-text/javascript"></script>

<script src="assets/libs/aos/aos.js" type="f798a973a32e3e167469d534-text/javascript"></script>

<script src="assets/js/app.js" type="f798a973a32e3e167469d534-text/javascript"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6adZVdzTvBpE2yBRK8cDfsss8QXChK0I" type="f798a973a32e3e167469d534-text/javascript"></script>
<script src="assets/js/map.js" type="f798a973a32e3e167469d534-text/javascript"></script>
<script src="../../../cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="f798a973a32e3e167469d534-|49" defer=""></script>
</>
            )
    }
}
export default CounselorGrid;