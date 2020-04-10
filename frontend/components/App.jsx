import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import EditUserContainer from "./users/edit_user_container";
import { Route, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import Modal from "./modal/modal";
import CategoriesBar from "../components/categories/category_container";
import Welcome from "./welcome/welcome";
import JournalContainer from "./journals/journal_container";
import JournalDetailContainer from "../components/journals/journal_detail_container";
import CreateJournalContainer from "../components/journals/create_journal_container";
import EditJournalContainer from "../components/journals/edit_journal_container";

const App = () => {
  return (
    <>
      <Modal />
      <div className="main">
        <div>
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
        </div>
        <div>
          <CategoriesBar />
        </div>

        <ProtectedRoute
          exact
          path="/me/settings"
          component={EditUserContainer}
        />
        <Route
          exact
          path="/journals/:journalId"
          component={JournalDetailContainer}
        />

        <Route exact path="/new/journal" component={CreateJournalContainer} />


        <Route
          path="/journals/:journalId/edit"
          component={EditJournalContainer}
        />

        <Route path="/users/:userId/journals" component="" />
        <Route
          path="/categories/:categoryId/journals"
          component={JournalContainer}
        />

        <AuthRoute extract path="/" component={Welcome} />
        <ProtectedRoute path="/welcome" component={App} />
      </div>
    </>
  );
};

export default App;
