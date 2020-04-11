import React from "react";
import UserJournalsList from "./user_journals_list";

class UserJournals extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    const { user } = this.props;

    if (!user.journals) return null; //! to trigger componentDidMount

    return (
      <div>
        <h1>Your journals</h1>
        <UserJournalsList user={user} />
      </div>
    );
  }
}

export default UserJournals;
