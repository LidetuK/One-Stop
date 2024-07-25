import React from "react";
import {Link} from "react-router-dom"


class PasswordReset extends React.Component{
    constructor(props){
        super(props);
        this.state=()=>{
          this.akash="Login"
      } }
    render(){

        return(
            
<div class="main-wrapper">
<div class="header d-none">

<ul class="nav nav-tabs user-menu">

<li class="nav-item">
<a href="#" id="dark-mode-toggle" class="dark-mode-toggle">
<i class="feather-sun light-mode"></i><i class="feather-moon dark-mode"></i>
</a>
</li>

</ul>

</div>
<div class="row">

<div class="col-md-6 login-bg">
<div class="login-banner">
<img src="assets/img/login-banner.png" class="img-fluid" alt=""/>
</div>
</div>
<div class="col-md-6 login-wrap-bg">

<div class="login-wrapper">
<div class="loginbox">
<div class="img-logo">
<img src="assets/img/logo.png" class="img-fluid" alt="Logo"/>
</div>
<h3>Reset Password</h3>
<p class="account-subtitle">Enter your email to get a password reset link</p>
<form action="">
<div class="form-group form-focus">
<input type="email" class="form-control floating"/>
<label class="focus-label">Enter Email</label>
</div>
<div class="d-grid">
<button class="btn btn-primary" type="submit">Reset Password</button>
</div>
<div class="dont-have">Remember your password? <Link to="AdminLogin">Login</Link></div>
 </form>
</div>
</div>

</div>
</div>
</div>

)
}

}

export default PasswordReset;