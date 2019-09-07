import React from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import './CommonLogin.css';
import SearchDonorByLocation from '../SearchDonorByLocation/SearchDonorByLocation.react';
import Buttonss from '../Buttonss/Buttonss.react';
import Login from '../Login/Login.react';

const CommonLogin = () => {

    return (
        <div className='commonlogin_wrapper'>
          
                    <div class="container">
<div class="dropdown">
    <button class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">Login/SignUp
    <span class="caret"></span></button>
    <ul class="dropdown-menu">
    <li><Link to='/adminLogin'>Admin</Link></li>
                   
    <li> <Link to='/patientLogin'>Patient</Link></li>
              
    <li> <Link to='/donorLogin'>Donor</Link></li>
      {/* <li><a class="nav-link" href="/adminLogin">Admin</a></li>
      <li><a class="nav-link" href="/patientLogin">Donor</a></li>
      <li><a  class="nav-link" href="/donorLogin">Patient</a></li> */}
    </ul>
  </div>
</div>
                    <Switch>
                    <Route exact path="/adminLogin" component={Login}></Route>
                    {/* <Route  path="/patientLogin" component={()=><Login name="Patient Login"/>} ></Route> */}
                    <Route  path="/patientLogin" component={Login}></Route> 
                    <Route  path="/donorLogin" component={Login}></Route> 
                </Switch>
               
             
        </div>
    );

}

export default CommonLogin;