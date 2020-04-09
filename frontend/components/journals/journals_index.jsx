import React from "react";
import { Link } from "react-router-dom";
import Img from "react-image";
import dateHelper from "../../utils/date_helper";


class JournalIndex extends React.Component {
  componentDidMount() {
    this.props.requestCategoryJournals(this.props.match.params.categoryId);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.categoryId !== prevProps.match.params.categoryId
    ) {
      this.props.requestCategoryJournals(this.props.match.params.categoryId);
    }
  }

  render() {
    const { category, journals } = this.props;

    if (!this.props.category) {
      // debugger;
        // this.props.match.params.categoryId
      return (
        <>
          <p>refresh is not working</p>
        </>
      );
    }
    
    const journalList = journals.map((journal) => {

      return (
        <li key={journal.id}>
          <Img className="journal-img" src={journal.image_url}></Img>

          <ul className="journal-info">
            <li>
              <Link to={`/journals/${journal.id}`}>{journal.title}</Link>
            </li>

            <li>
              {journal.body.slice(2, Math.floor(Math.random() * 50 + 50))}
            </li>
            <li>{`The author is ${journal.author_id}`}</li>
            <div className="journal-btm">
              <li>{dateHelper(journal.updated_at)}</li>
              <li>{`${Math.floor(Math.random() * 10 + 2)} min read`}</li>
            </div>
          </ul>
        </li>
      );
    });
 

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
