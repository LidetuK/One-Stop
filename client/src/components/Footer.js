import React from "react";

import { Link} from "react-router-dom"

class Footer extends React.Component{
    render(){
        return(
   
<footer class="footer footer-one">

<div class="footer-top aos">
<div class="container">
<div class="row">
<div class="col-lg-3 col-md-6">

<div class="footer-widget footer-about">
<div class="footer-logo">
<img src="assets/img/logo.png" alt="logo"/>
</div>
<div class="footer-about-content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<div class="social-icon">
<ul>
<li><Link to="#" target="_blank"><i class="fab fa-facebook"></i> </Link>
</li>
<li><Link to="#" target="_blank"><i class="fab fa-linkedin"></i></Link>
</li>
<li><Link to="#" target="_blank"><i class="fab fa-instagram"></i></Link>
</li>
<li><Link to="#" target="_blank"><i class="fab fa-twitter"></i> </Link>
</li>
</ul>
</div>
</div>
</div>

</div>
<div class="col-lg-3 col-md-6">

<div class="footer-widget footer-menu">
<h2 class="footer-title">Quick Links</h2>
<ul>
<li><Link to="search.html">Search for Counselor</Link>
</li>
<li><Link to="Login">Login</Link>
</li>
<li><Link to="Register">Register</Link>
</li>
<li><Link to="booking.html">Appointment</Link>
</li>
<li><Link to="About">About Us</Link>
</li>
    <li><Link to="chat.html">Chat</Link>
    </li>
</ul>
</div>

</div>
<div class="col-lg-3 col-md-6">

<div class="footer-widget footer-contact">
<h2 class="footer-title">Our Location</h2>
<div class="footer-contact-info">
<div class="footer-address"><span><i class="feather-map-pin"></i></span>
<p>Addis Ababa, Ethiopia
<br/>Addis Ababa, AA <br/>2222</p>
</div>
<p><i class="feather-phone"></i>
+2519********</p>
<p class="mb-0"><i class="feather-mail"></i>
<a/> onestopethiopia@gmail.com</p>
</div>
</div>

</div>
</div>
</div>
</div>


<div class="footer-bottom">
<div class="container">

<div class="copyright">
<div class="row">
<div class="col-md-6 col-lg-6">
<div class="copyright-text">
<p class="mb-0">&copy; 2023 One-Stop Ethiopia. All rights reserved.</p>
</div>
</div>
<div class="col-md-6 col-lg-6">

<div class="copyright-menu">
<ul class="policy-menu">
<li><a href="term-condition.html">Terms and Conditions</a>
</li>
<li><a href="privacy-policy.html">Policy</a>
</li>
</ul>
</div>

</div>
</div>
</div>

</div>
</div>
</footer>
        )
    }
}
export default Footer;