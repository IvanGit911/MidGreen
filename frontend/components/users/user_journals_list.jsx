import React from "react";
import { Link, withRouter } from "react-router-dom";

class UserJournalsList extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(journalId) {
    this.props.deleteJournal(journalId).then(()=> this.props.history.push(`/users/${this.props.user.id}/journals`)); //?! how to refresh I tried return null, but not re-rendering
  }

  render() {
    const { user } = this.props;
    const myList = user.journals.map((journal) => (
      <li key={journal.id}>
        <Link to={`/journals/${journal.id}`}>{journal.title}</Link>
        <div className="my-j-btns">
          <Link to={`/journals/${journal.id}/edit`}>Edit journal</Link>
          <button onClick={() => this.handleDelete(journal.id)}>Delete journal</button>
        </div>
      </li>
    ));
    return (
      <>
        <ul className="my-journal-list">{myList}</ul>
      </>
    );
  }
}

export default withRouter(UserJournalsList);
