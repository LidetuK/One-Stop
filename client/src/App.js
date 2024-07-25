import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import CounselorGrid from './pages/CounselorGrid';
import Register from './pages/Register';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CounselorList from './pages/CounselorList';
import CounselorDiborah from './pages/Counselor/CounselorDiborah';
import CounselorMeskerem from './pages/Counselor/CounselorMeskerem';
import CounselorMakida from './pages/Counselor/CounselorMakida';
import CounselorEmebet from './pages/Counselor/CounselorEmebet';
import CounselorHana from './pages/Counselor/CounselorHana';
import CounselorTamirat from './pages/Counselor/CounselorTamirat';
import CounselorSelome from './pages/Counselor/CounselorSelome';
import CounselorZinash from './pages/Counselor/CounselorZinash';
import Booking from './pages/Booking';
import Invoice from './pages/Invoice';
import BlogList from './pages/Blogs/BlogList';
import BlogDetails from './pages/Blogs/BlogDetails';
import AdminLogin from './pages/Admin/AdminLogin';
import PasswordReset from './pages/Admin/PasswordReset';
import ContacUs from './pages/ContactUs';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/AdminLogin" component={AdminLogin} />
          <Route exact path="/PasswordReset" component={PasswordReset} />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/ContactUs" component={ContacUs} />

          <Route path="/CounselorGrid" component={CounselorGrid} />
          <Route path="/CounselorList" component={CounselorList} />

          <Route path="/CounselorDiborah" component={CounselorDiborah} />
          <Route path="/CounselorMakida" component={CounselorMakida} />
          <Route path="/CounselorMeskerem" component={CounselorMeskerem} />
          <Route path="/CounselorHana" component={CounselorHana} />
          <Route path="/CounselorEmebet" component={CounselorEmebet} />
          <Route path="/CounselorSelome" component={CounselorSelome} />
          <Route path="/CounselorZinash" component={CounselorZinash} />
          <Route path="/CounselorTamirat" component={CounselorTamirat} />

          <Route path="/BlogList" component={BlogList} />
          <Route path="/BlogDetails" component={BlogDetails} />

          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
        </Switch>
        <Footer />
      </Router>

      <Router>
        <Route exact path="/AdminLogin" component={AdminLogin} />
        <Route exact path="/PasswordReset" component={PasswordReset} />
      </Router>

      <Router>
        <Route path="/Booking" component={Booking} />
        <Route path="/Invoice" component={Invoice} />
      </Router>
    </div>
  );
}

export default App;
