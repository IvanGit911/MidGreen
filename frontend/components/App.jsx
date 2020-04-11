import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import EditUserContainer from "./users/edit_user_container";
import { Route, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import Modal from "./modal/modal";
import CategoriesBar from "../components/categories/category_container";
import Welcome from "./welcome/welcome";
import JournalIndexContainer from "./journals/journal_index_container";
import JournalDetailContainer from "../components/journals/journal_detail_container";
import CreateJournalContainer from "../components/journals/create_journal_container";
import EditJournalContainer from "../components/journals/edit_journal_container";
import UserJournalsContainer from "../components/users/user_journals_container";

const App = () => {
  return (
    <div className="body">
      <Modal />

      <div className="navbar">
        <div id="midgrn">
          <Link to="/">MidGreen</Link>
        </div>

        <div className="nav-btn">
          <NavBarContainer />
        </div>
      </div>
      <div>
        <ProtectedRoute path="/" component={CategoriesBar} />
      </div>

      <AuthRoute extract path="/" component={Welcome} />
      <ProtectedRoute path="/welcome" component={App} />

      <ProtectedRoute exact path="/me/settings" component={EditUserContainer} />

      <Route path="/users/:userId/journals" component={UserJournalsContainer} />

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

      <Route
        path="/categories/:categoryId/journals"
        component={JournalIndexContainer}
      />

      <div className="footer">
        <h1>this is footer</h1>
      </div>
    </div>
  );
};

export default App;
