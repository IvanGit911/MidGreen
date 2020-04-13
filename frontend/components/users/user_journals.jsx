import React from "react";
import UserJournalsList from "./user_journals_list";
import { Link } from "react-router-dom";


class UserJournals extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    const { user, deleteJournal } = this.props;

    if (!user.journals) return null; //! to trigger componentDidMount
    
    return (
      <div className="my-journals">
        <div className="m-j-top">
          <h1>Your journals</h1>
          <Link className="new-j-btn" to="/new/journal">
            Write a journal
          </Link>
        </div>
        <div className="count-journals">Published {user.journals.length}</div>

        <UserJournalsList user={user} deleteJournal={deleteJournal} />
      </div>
    );
  }
}

export default UserJournals;
