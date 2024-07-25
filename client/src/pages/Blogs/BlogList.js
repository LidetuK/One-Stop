import React from "react";

import {NavLink, Link} from "react-router-dom"

class BlogList extends React.Component{
    render(){
        return(
            <main>
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
<h2 class="breadcrumb-title">Blog List</h2>
</div>
</div>
</div>
</div>

<div class="content">
<div class="container">
<div class="row">
<div class="col-lg-8 col-md-12">

<div class="blog">
<div class="blog-image">
<Link to="BlogDetails"> <img class="img-fluid" src="assets/img/blog/blog1.jpg" alt="Post Image"/></Link>
</div>
<h3 class="blog-title"><Link to="BlogDetails">One-Stop Ethiopia – Making your visit?</Link></h3>
<div class="blog-info clearfix">
<div class="post-left">
<ul>
<li>
<div class="post-author">
<Link to="CounselorMakida"><img src="assets/img/counselor/book-doctor-12.jpg" alt="Post Author"/> <span>Dr. Makida Alemu</span></Link>
</div>
</li>
<li><i class="far fa-clock"></i>20 Apr 2023</li>
<li><i class="far fa-comments"></i>12 Comments</li>
<li><i class="fa fa-tags"></i>Visit</li>
</ul>
</div>
</div>
<div class="blog-content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<a href="blog-details.html" class="read-more">Read More</a>
</div>
</div>


<div class="blog">
<div class="blog-image">
<a href="blog-details.html"><img class="img-fluid" src="assets/img/blog/blog2.jpeg" alt=""/></a>
</div>
<h3 class="blog-title"><a href="blog-details.html">Benefits of consulting with an online counselors</a></h3>
<div class="blog-info clearfix">
<div class="post-left">
<ul>
<li>
<div class="post-author">
<a href="CounselorHana"><img src="assets/img/Counselor/book-doc-05.jpeg" alt="Post Author"/> <span>Dr. Hana Bekele</span></a>
</div>
</li>
<li><i class="far fa-clock"></i>25 Apr 2023</li>
<li><i class="far fa-comments"></i>7 Comments</li>
<li><i class="fa fa-tags"></i>Online</li>
</ul>
</div>
</div>
<div class="blog-content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<a href="blog-details.html" class="read-more">Read More</a>
</div>
</div>


<div class="blog">
<div class="blog-image">
<div class="video">
<iframe src="https://www.youtube.com/embed/nuVqJ_OriR8?rel=0&amp;controls=0&amp;showinfo=0" width="940" allowfullscreen></iframe>
</div>
</div>
<h3 class="blog-title"><a href="blog-details.html">Community and gender based violence </a></h3>
<div class="blog-info clearfix">
<div class="post-left">
<ul>
<li>
<div class="post-author">
<a href="CounselorDiborah"><img src="assets/img/Counselor/book-doctor-15.jpg" alt="Post Author"/> <span>Dr. Deborah Kiros</span></a>
</div>
</li>
<li><i class="far fa-clock"></i>23 Apr 2023</li>
<li><i class="far fa-comments"></i>29 Comments</li>
<li><i class="fa fa-tags"></i>Community</li>
</ul>
</div>
</div>
<div class="blog-content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<a href="blog-details.html" class="read-more">Read More</a>
</div>
</div>


<div class="blog">
<div class="blog-image">
<div class="video">
<iframe src="https://player.vimeo.com/video/133170635" width="940"></iframe>
</div>
</div>
<h3 class="blog-title"><a href="blog-details.html">5 Great reasons to use an Online Counseling</a></h3>
<div class="blog-info clearfix">
<div class="post-left">
<ul>
<li>
<div class="post-author">
<a href="doctor-profile.html"><img src="assets/img/counselor/book-doctor-1.jpg" alt="Post Author"/> <span>Dr. Emebet Alemu</span></a>
</div>
</li>
<li><i class="far fa-clock"></i>2 Dec 2023</li>
<li><i class="far fa-comments"></i>41 Comments</li>
<li><i class="fa fa-tags"></i>Counseling Tips</li>
</ul>
</div>
</div>
<div class="blog-content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<a href="blog-details.html" class="read-more">Read More</a>
</div>
</div>


<div class="row">
<div class="col-md-12">
<div class="blog-pagination">
<nav>
<ul class="pagination justify-content-center">
<li class="page-item disabled">
<a class="page-link" href="#" tabindex="-1"><i class="fas fa-angle-double-left"></i></a>
</li>
<li class="page-item">
<a class="page-link" href="#">1</a>
</li>
<li class="page-item active">
<a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
</li>
<li class="page-item">
<a class="page-link" href="#">3</a>
</li>
<li class="page-item">
<a class="page-link" href="#"><i class="fas fa-angle-double-right"></i></a>
</li>
</ul>
</nav>
</div>
</div>
</div>

</div>

<div class="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">

<div class="card search-widget">
<div class="card-body">
<form class="search-form">
<div class="input-group">
<input type="text" placeholder="Search..." class="form-control"/>
<div class="input-group-append">
<button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
</div>
</div>
</form>
</div>
</div>


<div class="card post-widget">
<div class="card-header">
<h4 class="card-title">Latest Posts</h4>
</div>
<div class="card-body">
<ul class="latest-posts">
<li>
<div class="post-thumb">
<a href="blog-details.html">
<img class="img-fluid" src="assets/img/blog/blog1.jpg" alt=""/>
</a>
</div>
<div class="post-info">
<h4>
<a href="blog-details.html">One-Stop Ethiopia – Making your visit?</a>
</h4>
<p>4 Dec 2023</p>
</div>
</li>
<li>
<div class="post-thumb">
<a href="blog-details.html">
<img class="img-fluid" src="assets/img/blog/blog2.jpeg" alt=""/>
</a>
</div>
<div class="post-info">
<h4>
 <a href="blog-details.html">What are the benefits of Online Counselor Booking?</a>
</h4>
<p>3 Dec 2023</p>
</div>
</li>
<li>
<div class="post-thumb">
<a href="blog-details.html">
<img class="img-fluid" src="assets/img/blog/blog2.jpeg" alt=""/>
</a>
</div>
<div class="post-info">
<h4>
<a href="blog-details.html">Benefits of consulting with an Online Counselor</a>
</h4>
<p>3 Dec 2019</p>
</div>
</li>
<li>
<div class="post-thumb">
<a href="blog-details.html">
<img class="img-fluid" src="assets/img/blog/blog2.jpeg" alt=""/>
</a>
</div>
<div class="post-info">
<h4>
<a href="blog-details.html">5 Great reasons to use an Online Counseling</a>
</h4>
<p>2 Dec 2023</p>
</div>
</li>
<li>
<div class="post-thumb">
<a href="blog-details.html">
<img class="img-fluid" src="assets/img/blog/blog2.jpeg" alt=""/>
</a>
</div>
<div class="post-info">
<h4>
<a href="blog-details.html">Online Counselor Appointment Scheduling</a>
</h4>
<p>1 Dec 2023</p>
</div>
</li>
</ul>
</div>
</div>


<div class="card category-widget">
<div class="card-header">
<h4 class="card-title">Blog Categories</h4>
</div>
<div class="card-body">
<ul class="categories">
<li><a href="#">online <span>(62)</span></a></li>
<li><a href="#">services Care <span>(27)</span></a></li>
<li><a href="#">visit <span>(41)</span></a></li>
<li><a href="#">Counseling Tips <span>(16)</span></a></li>
<li><a href="#">Sector Research <span>(55)</span></a></li>
<li><a href="#">Therapy Treatment <span>(07)</span></a></li>
</ul>
</div>
</div>


<div class="card tags-widget">
<div class="card-header">
<h4 class="card-title">Tags</h4>
</div>
<div class="card-body">
<ul class="tags">
<li><a href="#" class="tag">Women</a></li>
<li><a href="#" class="tag">Girls</a></li>
<li><a href="#" class="tag">Appointment</a></li>
<li><a href="#" class="tag">Booking</a></li>
<li><a href="#" class="tag">Request</a></li>
<li><a href="#" class="tag">Mental</a></li>
<li><a href="#" class="tag">Violence</a></li>
<li><a href="#" class="tag">Tips</a></li>
<li><a href="#" class="tag">Shedule</a></li>
<li><a href="#" class="tag">Treatment</a></li>
<li><a href="#" class="tag">Dr</a></li>
<li><a href="#" class="tag">Blogs</a></li>
<li><a href="#" class="tag">Online</a></li>
<li><a href="#" class="tag">STD</a></li>
<li><a href="#" class="tag">Counseling</a></li>
<li><a href="#" class="tag">Counselors</a></li>
<li><a href="#" class="tag">Psychologist</a></li>
<li><a href="#" class="tag">Therapist</a></li>
<li><a href="#" class="tag">Specialist</a></li>
<li><a href="#" class="tag">One-Stop</a></li>
</ul>
</div>
</div>

</div>

</div>
</div>
</div>

</div>

            </main>
        )
    }
}
export default BlogList;