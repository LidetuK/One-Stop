import React from "react";

import {NavLink, Link} from "react-router-dom"

class CounselorList extends React.Component{
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
<div class="col-xl-7 col-lg-12 order-md-last order-sm-last order-last map-left">
<div class="row align-items-center mb-4">
<div class="col-md-6 col">
<h4>45 Counselors Found</h4>
</div>
<div class="col-md-6 col-auto">
<div class="view-icons">
<Link to="CounselorGrid" class="grid-view"><i class="fas fa-th-large"></i></Link>
<Link to="CounselorList" class="list-view active"><i class="fas fa-bars"></i></Link>
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

<div class="card">
<div class="card-body">
<div class="doctor-widget">
<div class="doc-info-left">
<div class="doctor-img">
<a href="CounselorDiborah">
<img src="assets/img/Counselor/book-doctor-15.jpg" class="img-fluid" alt="User Image"/>
</a>
</div>
<div class="doc-info-cont">
<h4 class="doc-name"><a href="CounselorDiborah">Dr. Diborah Kiros</a></h4>
<p class="doc-speciality">MDS - Psychology</p>
<h5 class="doc-department"><img src="assets/img/services/features-01.png" class="img-fluid" alt="Speciality"/>Counselor</h5>
<div class="rating">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating">(17)</span>
</div>
<div class="clinic-details">
<p class="doc-location"><i class="fas fa-map-marker-alt"></i> Addis Ababa, Ethiopia</p>
<ul class="clinic-gallery">
<li>
<a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
<img src="assets/img/features/feature-01.jpg" alt="Feature"/>
</a>
</li>
<li>
<a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
<img src="assets/img/features/feature-02.jpg" alt="Feature"/>
</a>
</li>
<li>
<a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
<img src="assets/img/features/feature-04.jpg" alt="Feature"/>
</a>
</li>
</ul>
</div>
<div class="clinic-services">
<span>Therapy</span>
<span> Legal Support</span>
</div>
</div>
</div>
<div class="doc-info-right">
<div class="clini-infos">
<ul>
<li><i class="far fa-thumbs-up"></i> 98%</li>
<li><i class="far fa-comment"></i> 17 Feedback</li>
<li><i class="fas fa-map-marker-alt"></i> Addis Ababa, Ethiopia</li>
<li><i class="far fa-money-bill-alt"></i> FREE <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i> </li>
</ul>
</div>
<div class="clinic-booking">
<Link class="view-pro-btn" to="CounselorDiborah">View Profile</Link>
<Link class="apt-btn" to="Booking">Book Appointment</Link>
</div>
</div>
</div>
</div>
</div>


<div class="card">
<div class="card-body">
<div class="doctor-widget">
<div class="doc-info-left">
<div class="doctor-img">
<a href="CounselorMeskerem">
<img src="assets/img/Counselor/book-doctor-01.jpg" class="img-fluid" alt="User Image"/>
</a>
</div>
<div class="doc-info-cont">
<h4 class="doc-name"><a href="CounselorMeskerem">Dr. Meskerem Tibebu</a></h4>
<p class="doc-speciality">BDS, MDS -Menta Health</p>
<h5 class="doc-department"><img src="assets/img/services/features-01.png" class="img-fluid" alt="Speciality"/>Counselor</h5>
<div class="rating">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating">(35)</span>
</div>
<div class="clinic-details">
<p class="doc-location"><i class="fas fa-map-marker-alt"></i> Addis Ababa, Ethiopia</p>
<ul class="clinic-gallery">
<li>
<a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
<img src="assets/img/features/feature-01.jpg" alt="Feature"/>
</a>
</li>
<li>
<a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
<img src="assets/img/features/feature-02.jpg" alt="Feature"/>
</a>
</li>
<li>
<a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
<img src="assets/img/features/feature-04.jpg" alt="Feature"/>
</a>
</li>
</ul>
</div>
<div class="clinic-services">
<span>Therapy</span>
<span> Legal Support</span>
</div>
</div>
</div>
<div class="doc-info-right">
<div class="clini-infos">
<ul>
<li><i class="far fa-thumbs-up"></i> 100%</li>
<li><i class="far fa-comment"></i> 35 Feedback</li>
<li><i class="fas fa-map-marker-alt"></i>Addis Ababa, Ethiopia</li>
<li><i class="far fa-money-bill-alt"></i> FREE <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i></li>
</ul>
</div>
<div class="clinic-booking">
<a class="view-pro-btn" href="CounselorMeskerem">View Profile</a>
<Link class="apt-btn" to="Booking">Book Appointment</Link>
</div>
</div>
</div>
</div>
</div>


<div class="card">
<div class="card-body">
<div class="doctor-widget">
<div class="doc-info-left">
<div class="doctor-img">
<a href="CounselorEmebet">
<img src="assets/img/Counselor/book-doctor-1.jpg" class="img-fluid" alt="User Image"/>
</a>
</div>
<div class="doc-info-cont">
<h4 class="doc-name"><a href="CounselorEmebet">Dr. Emebet Worku</a></h4>
<p class="doc-speciality">MBBS, MD - Psychology , DNB - Therapy</p>
<p class="doc-department"><img src="assets/img/services/features-01.png" class="img-fluid" alt="Speciality"/>Counselor</p>
<div class="rating">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating">(27)</span>
</div>
<div class="clinic-details">
<p class="doc-location"><i class="fas fa-map-marker-alt"></i>Addis Ababa, Ethiopia</p>
<ul class="clinic-gallery">
<li>
<a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
<img src="assets/img/features/feature-01.jpg" alt="Feature"/>
</a>
</li>
<li>
<a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
<img src="assets/img/features/feature-02.jpg" alt="Feature"/>
</a>
</li>
<li>
<a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
<img src="assets/img/features/feature-03.jpg" alt="Feature"/>
</a>
</li>
<li>
<a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
<img src="assets/img/features/feature-04.jpg" alt="Feature"/>
</a>
</li>
</ul>
</div>
<div class="clinic-services">
<span>Therapy</span>
<span> counseling</span>
</div>
</div>
</div>
<div class="doc-info-right">
<div class="clini-infos">
<ul>
<li><i class="far fa-thumbs-up"></i> 99%</li>
<li><i class="far fa-comment"></i> 35 Feedback</li>
<li><i class="fas fa-map-marker-alt"></i> Addis Ababa, Ethiopia</li>
<li><i class="far fa-money-bill-alt"></i> FREE <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i></li>
</ul>
</div>
<div class="clinic-booking">
<a class="view-pro-btn" href="CounselorEmebet">View Profile</a>
<Link class="apt-btn" to="Booking">Book Appointment</Link>
</div>
</div>
</div>
</div>
</div>


<div class="card">
<div class="card-body">
<div class="doctor-widget">
<div class="doc-info-left">
<div class="doctor-img">
<a href="CounselorMakida">
<img src="assets/img/Counselor/book-doctor-12.jpg" class="img-fluid" alt="User Image"/>
</a>
</div>
<div class="doc-info-cont">
<h4 class="doc-name"><a href="CounselorMakida">Dr. Makida Alemu</a></h4>
<p class="doc-speciality">MBBS, MS - General counseling, MCh - Psychology</p>
<p class="doc-department"><img src="assets/img/services/features-01.png" class="img-fluid" alt="Speciality"/>Counselor</p>
<div class="rating">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating">(4)</span>
</div>
<div class="clinic-details">
<p class="doc-location"><i class="fas fa-map-marker-alt"></i> Bahir Dar, Ethiopia</p>
<ul class="clinic-gallery">
<li>
<a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
<img src="assets/img/features/feature-01.jpg" alt="Feature"/>
</a>
</li>
<li>
<a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
<img src="assets/img/features/feature-02.jpg" alt="Feature"/>
</a>
</li>
<li>
<a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
<img src="assets/img/features/feature-03.jpg" alt="Feature"/>
</a>
</li>
<li>
<a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
<img src="assets/img/features/feature-04.jpg" alt="Feature"/>
</a>
</li>
</ul>
</div>
<div class="clinic-services">
<span>counseling</span>
<span> Therapy</span>
</div>
</div>
</div>
<div class="doc-info-right">
<div class="clini-infos">
<ul>
<li><i class="far fa-thumbs-up"></i> 97%</li>
<li><i class="far fa-comment"></i> 4 Feedback</li>
<li><i class="fas fa-map-marker-alt"></i> Bahir Dar, Ethiopia</li>
<li><i class="far fa-money-bill-alt"></i> FREE <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i></li>
</ul>
</div>
<div class="clinic-booking">
<a class="view-pro-btn" href="CounselorMakida">View Profile</a>
<Link class="apt-btn" to="Booking">Book Appointment</Link>
</div>
</div>
</div>
</div>
</div>


<div class="card">
<div class="card-body">
<div class="doctor-widget">
<div class="doc-info-left">
<div class="doctor-img">
<a href="CounselorHana">
<img src="assets/img/Counselor/book-doc-05.jpeg" class="img-fluid" alt="User Image"/>
</a>
</div>
<div class="doc-info-cont">
<h4 class="doc-name"><a href="CounselorHana">Dr. Hana Bekele</a></h4>
<p class="doc-speciality">MS - Mental Health, MBBS, M.Ch - Psychology</p>
<p class="doc-department"><img src="assets/img/services/features-01.png" class="img-fluid" alt="Speciality"/>Counselor</p>
<div class="rating">
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star filled"></i>
<i class="fas fa-star"></i>
<span class="d-inline-block average-rating">(52)</span>
</div>
<div class="clinic-details">
<p class="doc-location"><i class="fas fa-map-marker-alt"></i> Adama, Ethiopia</p>
<ul class="clinic-gallery">
<li>
<a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
<img src="assets/img/features/feature-01.jpg" alt="Feature"/>
</a>
</li>
<li>
<a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
<img src="assets/img/features/feature-02.jpg" alt="Feature"/>
</a>
</li>
<li>
<a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
<img src="assets/img/features/feature-03.jpg" alt="Feature"/>
</a>
</li>
<li>
<a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
<img src="assets/img/features/feature-04.jpg" alt="Feature"/>
</a>
</li>
</ul>
</div>
<div class="clinic-services">
<span>Therapy </span>
<span> counseling</span>
</div>
</div>
</div>
<div class="doc-info-right">
<div class="clini-infos">
<ul>
<li><i class="far fa-thumbs-up"></i> 100%</li>
<li><i class="far fa-comment"></i> 52 Feedback</li>
<li><i class="fas fa-map-marker-alt"></i> Adama, Ethiopia</li>
<li><i class="far fa-money-bill-alt"></i> FREE <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i></li>
</ul>
</div>
<div class="clinic-booking">
<a class="view-pro-btn" href="CounselorHana">View Profile</a>
<Link class="apt-btn" to="Booking">Book Appointment</Link>
</div>
</div>
</div>
</div>
</div>

<div class="load-more text-center">
<a class="btn btn-primary btn-sm" href="javascript:void(0);">Load More</a>
</div>
</div>

<div class="col-xl-5 col-lg-12 map-right">
<div id="map" class="map-listing"></div>

</div>

</div>

</div>
</div>

</div>
</> 
            )
        }
    }
    export default CounselorList;