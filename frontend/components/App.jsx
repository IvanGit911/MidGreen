import React from "react";
import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Route } from "react-router-dom";
import { AuthRoute } from '../utils/route_util';

const App = () => (
    <div>
        <div className="navbar">
            <p id='midgrn'>MidGreen</p>
            
            <div className="nav-btn">
                <NavBarContainer />
            </div>

        </div>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;