import React from "react";
import { Link } from "react-router-dom";

class JournalIndex extends React.Component {
  componentDidMount() {
    // debugger
    this.props.requestCategoryJournals(this.props.match.params.categoryId);
  }

  //   componentWillUnmount {

  //   }

  render() {
    // debugger
    const { category, journals } = this.props;
    // debugger;
    const journalList = journals.map((journal) => (
      <li key={journal.id}>
        <Link to={`/journals/${journal.id}`}>{journal.title}</Link>
      </li>
    ));

    return (
      <div className="journals">
        <p>{category.title}</p>
        <h1>{category.description}</h1>
        <p>{journalList}</p>
        <p>this is follow and cound of follow</p>
        <p>this is list of journal pic and journal title and an overview</p>
      </div>
    );
  }
}

export default JournalIndex;
