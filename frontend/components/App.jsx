import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import EditUserContainer from './users/user_form';
import { Route, Link } from "react-router-dom";
import { AuthRoute } from "../utils/route_util";
import Modal from './modal/modal'

const App = () => {
  return (
    <div>
      <Modal />
      <div className="navbar">
        <div className="navbar-content">
          <Link id="midgrn" to="/">
            MidGreen
          </Link>

          <div className="nav-btn">
            <NavBarContainer />
          </div>
        </div>
      </div>

      {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
            
      <Route path="/me/settings" component={EditUserContainer} />

      <Route path="/welcome-to-midgreen" component={NavBarContainer} />
    </div>
  );
};

export default App;
