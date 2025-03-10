import React from "react";

import {NavLink, Link} from "react-router-dom"

class BlogDetails extends React.Component{
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
<h2 class="breadcrumb-title">Blog Details</h2>
</div>
</div>
</div>
</div>

<div class="content">
<div class="container">
<div class="row">
<div class="col-lg-8 col-md-12">
<div class="blog-view">
<div class="blog blog-single-post">
<div class="blog-image">
<a href="javascript:void(0);"><img alt="" src="assets/img/blog/blog1.jpg" class="img-fluid"/></a>
</div>
<h3 class="blog-title">One-Stop – Making your visit?</h3>
<div class="blog-info clearfix">
<div class="post-left"><ul>
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
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
</div>
</div>
<div class="card blog-share clearfix">
<div class="card-header">
<h4 class="card-title">Share the post</h4>
</div>
<div class="card-body">
<ul class="social-share">
<li><a href="#" title="Facebook"><i class="fab fa-facebook"></i></a></li>
<li><a href="#" title="Twitter"><i class="fab fa-twitter"></i></a></li>
<li><a href="#" title="Linkedin"><i class="fab fa-linkedin"></i></a></li>
<li><a href="#" title="Google Plus"><i class="fab fa-google-plus"></i></a></li>
<li><a href="#" title="Youtube"><i class="fab fa-youtube"></i></a></li>
</ul>
</div>
</div>
<div class="card author-widget clearfix">
<div class="card-header">
<h4 class="card-title">About Author</h4>
</div>
<div class="card-body">
<div class="about-author">
<div class="about-author-img">
<div class="author-img-wrap">
<a href="CounselorMakida"><img class="img-fluid rounded-circle" alt="" src="assets/img/counselor/book-doctor-12.jpg"/></a>
</div>
</div>
<div class="author-details">
<a href="CounselorMakida" class="blog-author-name">Dr. Makida Alemu</a>
<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
</div>
</div>
</div>
</div>
<div class="card blog-comments clearfix">
<div class="card-header">
<h4 class="card-title">Comments (12)</h4>
</div>
<div class="card-body pb-0">
<ul class="comments-list">
<li>
<div class="comment">
<div class="comment-author">
<img class="avatar" alt="" src="assets/img/patients/patient4.jpg"/>
</div>
 <div class="comment-block">
<span class="comment-by">
<span class="blog-author-name">Bethelehem Demissie</span>
</span>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p class="blog-date">Dec 6, 2023</p>
<a class="comment-btn" href="#">
<i class="fas fa-reply"></i> Reply
</a>
</div>
</div>
<ul class="comments-list reply">
<li>
<div class="comment">
<div class="comment-author">
<img class="avatar" alt="" src="assets/img/patients/patient5.jpg"/>
</div>
<div class="comment-block">
<span class="comment-by">
<span class="blog-author-name">Gelila Molla</span>
</span>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
<p class="blog-date">Dec 6, 2023</p>
<a class="comment-btn" href="#">
<i class="fas fa-reply"></i> Reply
</a>
</div>
</div>
</li>
<li>
<div class="comment">
<div class="comment-author">
<img class="avatar" alt="" src="assets/img/patients/patient3.jpg"/>
</div>
<div class="comment-block">
<span class="comment-by">
<span class="blog-author-name">Kalkidan Kassa</span>
</span>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
<p class="blog-date">December 7, 2023</p>
<a class="comment-btn" href="#">
<i class="fas fa-reply"></i> Reply
</a>
</div>
</div>
</li>
</ul>
</li>
<li>
<div class="comment">
<div class="comment-author">
<img class="avatar" alt="" src="assets/img/patients/patient6.jpg"/>
</div>
<div class="comment-block">
<span class="comment-by">
<span class="blog-author-name">Elsabet Gashaw</span>
</span>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p class="blog-date">December 11, 2023</p>
</div>
</div>
</li>
<li>
<div class="comment">
<div class="comment-author">
<img class="avatar" alt="" src="assets/img/patients/patient7.jpg"/>
</div>
<div class="comment-block">
<span class="comment-by">
<span class="blog-author-name">Jerusalem Dawit</span>
</span>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p class="blog-date">December 13, 2017</p>
<a class="comment-btn" href="#">
<i class="fas fa-reply"></i> Reply
</a>
</div>
</div>
</li>
</ul>
</div>
</div>
<div class="card new-comment clearfix">
<div class="card-header">
<h4 class="card-title">Leave Comment</h4>
</div>
<div class="card-body">
<form>
<div class="form-group">
<label>Name <span class="text-danger">*</span></label>
<input type="text" class="form-control"/>
</div>
<div class="form-group">
<label>Your Email Address <span class="text-danger">*</span></label>
<input type="email" class="form-control"/>
</div>
<div class="form-group">
<label>Comments</label>
<textarea rows="4" class="form-control"></textarea>
</div>
<div class="submit-section">
<button class="btn btn-primary submit-btn" type="submit">Submit</button>
</div>
</form>
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
export default BlogDetails;