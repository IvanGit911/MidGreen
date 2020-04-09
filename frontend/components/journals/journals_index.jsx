import React from "react";
import { Link } from "react-router-dom";
import Img from "react-image";

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
    const journalList = journals.map((journal) => {
      debugger
      return (
        <li key={journal.id}>
          
            <Img className="journal-img" src={journal.image_url}></Img>
          
          <ul className="journal-info">
            <li>
              <Link to={`/journals/${journal.id}`}>{journal.title}</Link>
            </li>

            <li>subtitle</li>
            <li>author name</li>
            <li>date</li>
            <li>4 mins read</li>
          </ul>
        </li>
      );
    });
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
        <ul className="category-journals">{journalList}</ul>
      </div>
    );
  }
}

export default JournalIndex;
