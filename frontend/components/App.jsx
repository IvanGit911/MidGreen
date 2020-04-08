import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import EditUserContainer from "./users/user_form";
import { Route, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import Modal from "./modal/modal";
import CategoriesBar from "../components/categories/category_container";
import Welcome from "./welcome/welcome";

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
        <div>
          <CategoriesBar />
        </div>
      </div>

      <Route path="/me/settings" component={EditUserContainer} />
      
      {/* <Link to="/welcome-to-midgreen">test</Link>
      <ProtectedRoute extract path="/" component={App} />
      <ProtectedRoute path="/welcome-to-midgreen" component={Welcome} /> */}

    </div>
  );
};

export default App;
