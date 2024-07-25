import React from "react";
import {Link} from "react-router-dom"

class AdminLogin extends React.Component{
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
<h3>Login</h3>
<p class="account-subtitle">login to your account to continue</p>
<form method="POST" action="">
<input type="hidden" name="_token" value="40ELpMXqAbrRjDmgK1mHVo0BNm8UPlDMJDEHFbgq"/> <div class="form-group form-focus">
<input type="text" class="form-control floating" name="email" id="Email" />
<label class="focus-label">Enter Email</label>
<div class="text-danger pt-2">
</div>
</div>
<div class="form-group form-focus">
<input type="password" class="form-control floating pass-input" name="password" id="password" />
<label class="focus-label">Enter Password</label><span class="fa fa-eye-slash toggle-password pt-4"></span>
<div class="text-danger pt-2">
</div>
</div>
<div class="form-group">
<div class="row">
<div class="col-6">
<label class="custom_check mr-2 mb-0 d-inline-flex"> Remember me
<input type="checkbox" name="radio"/>
<span class="checkmark"></span>
</label>
</div>
  <div class="text-end">
  <Link class="forgot-link" to="PasswordReset">Forgot Password ?</Link>
  </div>
</div>
</div>
<div class="d-grid">
<button class="btn btn-primary" type="submit">Login</button>
</div>


</form>
</div>
</div>

</div>
</div>
</div>

)
}

}

export default AdminLogin;