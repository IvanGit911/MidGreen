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
      const months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
      };
      const date = journal.updated_at.slice(0, 10).split("-");
      const dateShow = months[parseInt(date[1])] + '  '+ date[2];
      // debugger
      return (
        <li key={journal.id}>
          <Img className="journal-img" src={journal.image_url}></Img>

          <ul className="journal-info">
            <li>
              <Link to={`/journals/${journal.id}`}>{journal.title}</Link>
            </li>

            <li>{journal.body.slice(2, Math.floor(Math.random() * 50 + 50))}</li>
            <li>{`The author is ${journal.author_id}`}</li>
            <div className="journal-btm">
              <li>{dateShow}</li>
              <li>{`${Math.floor(Math.random() * 10 + 2)} min read`}</li>
            </div>
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
          <div className="category-follow">
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
