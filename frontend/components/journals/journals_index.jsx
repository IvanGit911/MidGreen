import React from "react";
import { Link } from "react-router-dom";

class JournalIndex extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     category: this.props.category,
  //     journals: this.props.journals,
  //   };
  // }
  componentDidMount() {
    this.props.requestCategoryJournals(this.props.match.params.categoryId);
  }

  // componentWillUnmount() {
  //   // debugger
  //   this.props.requestCategory(this.props.match.params.categoryId);
  //   this.props.requestCategoryJournals(this.props.match.params.categoryId);
  // }

  render() {
    // debugger
    const { category, journals } = this.props;
    // debugger;
    const journalList = journals.map((journal) => (
      <li key={journal.id}>
        <div className="journal-img">this is the pic placeholder</div>
        <Link to={`/journals/${journal.id}`}>{journal.title}</Link>
      </li>
    ));
      // debugger
    return (
      <div className="journals">
        <div className="journal-top">
          <h1>{category.title}</h1>
          <p>{category.description}</p>
          <div className="category-flw">
            <button className="flw-category-btn">Follow</button>
            <p> 100k followers</p>
          </div>
        </div>
        <ul>{journalList}</ul>
        <p>this is list of journal pic and journal title and an overview</p>
      </div>
    );
  }
}

export default JournalIndex;
