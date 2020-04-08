import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import EditUserContainer from "./users/user_form";
import { Route, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import Modal from "./modal/modal";
import CategoriesBar from "../components/categories/category_container";
import Welcome from "./welcome/welcome";
import JournalContainer from './journals/journal_container'

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

      <Route exact path="/me/settings" component={EditUserContainer} />
      <Route path="/users/:userId/journals" component="" />
      <Route
        path="/categories/:categoryId/journals"
        component={JournalContainer}
      />

      <AuthRoute extract path="/" component={Welcome} />
      <ProtectedRoute path="/welcome" component={App} />
    </div>
  );
};

export default App;
