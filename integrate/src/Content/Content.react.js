import React from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Login from '../Login/Login.react'
import Home from '../Home/Home.react';

export const Content = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/adminLogin" component={Login}></Route>
                <Route path="/patientLogin" component={Login}></Route>
                <Route path="/donorLogin" component={Login}></Route>
                {/* <Route exact path="/adminLogin" component={()=><Login/>}></Route> */}
                
                {/* <Route path="/services" component={Services}></Route>
                <Route path="/contact" component={Contact}></Route> */}
                
            </Switch>
        </div>
    )
}
export default Content;