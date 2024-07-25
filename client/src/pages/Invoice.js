import React from "react";

import {NavLink, Link} from "react-router-dom"

class Invoice extends React.Component{
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
            <h2 class="breadcrumb-title">Appointment Details</h2>
            </div>
            </div>
            </div>
            </div>
            
<div class="content">
<div class="container-fluid">
<div class="row">
<div class="col-lg-8 offset-lg-2">
<div class="invoice-content">
<div class="invoice-item">
<div class="row">
<div class="col-md-6">
<div class="invoice-logo">
<img src="assets/img/logo.png" alt="logo"/>
</div>
</div>
<div class="col-md-6">
<p class="invoice-details">
<strong>Request:</strong> #00124 <br/>
<strong>Issued:</strong> 20/07/2023
</p>
</div>
</div>
</div>

<div class="invoice-item">
<div class="row">
<div class="col-md-6">
<div class="invoice-info">
<strong class="customer-text">Request From</strong>
<p class="invoice-details invoice-details-two">
Selam Telahun <br/>
Around Kera,<br/>
Addis Ethiopia, Ethiopia <br/>
</p>
</div>
</div>
<div class="col-md-6">
<div class="invoice-info invoice-info2">
<strong class="customer-text">Request To</strong>
<p class="invoice-details">
dr. Makida <br/>
299 Star Trek Drive, Panama City, <br/>
Florida, 32405, USA <br/>
</p>
</div>
</div>
</div>
</div>


<div class="invoice-item">
<div class="row">
<div class="col-md-12">
<div class="invoice-info">
<strong class="customer-text">Payment Method</strong>
<p class="invoice-details invoice-details-two">
Debit Card <br/>
XXXXXXXXXXXX-2541 <br/>
HDFC Bank<br/>
</p>
</div>
</div>
</div>
</div>


<div class="invoice-item invoice-table-wrap">
<div class="row">
<div class="col-md-12">
<div class="table-responsive">
<table class="invoice-table table table-bordered">
<thead>
<tr>
<th>Description</th>
<th class="text-center">Quantity</th>
<th class="text-center">VAT</th>
<th class="text-end">Total</th>
</tr>
</thead>
<tbody>
<tr>
<td>General Consultation</td>
<td class="text-center">1</td>
<td class="text-center">$0</td>
<td class="text-end">$100</td>
</tr>
<tr>
<td>Video Call Booking</td>
<td class="text-center">1</td>
<td class="text-center">$0</td>
<td class="text-end">$250</td>
</tr>
</tbody>
</table>
</div>
</div>
<div class="col-md-6 col-xl-4 ms-auto">
<div class="table-responsive">
<table class="invoice-table-two table">
<tbody>
<tr>
<th>Subtotal:</th>
<td><span>$350</span></td>
</tr>
<tr>
<th>Discount:</th>
<td><span>-10%</span></td>
</tr>
<tr>
<th>Total Amount:</th>
<td><span>$315</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>


<div class="other-info">
<h4>Other information</h4>
<p class="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam finibus pellentesque libero.</p>
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
export default Invoice;