import React from "react";
import { Link } from "react-router-dom";
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

    if (!this.props.category) return null;

    const journalList = journals.map((journal) => {
      // debugger;
      return (
        <li key={journal.id}>
          <div className="journal-img">
            <Link to={`/journals/${journal.id}`}>
              <img src={journal.photo} />
            </Link>
          </div>

          <ul className="journal-info">
            <li className="j-index-title-1">
              <Link to={`/journals/${journal.id}`}>{journal.title}</Link>
            </li>

            <li>{journal.subtitle}</li>
            <li>{journal.author}</li>
            <ul className="journal-btm">
              <li>{dateHelper(journal.updated_at)}</li>
              <li>
                <i className="fas fa-circle"></i>
              </li>
              <li>{`${Math.floor(Math.random() * 10 + 2)} min read`}</li>
            </ul>
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
            {/* <button className="flw-category-btn">Follow</button> */}
            <p> 100k followers</p>
          </div>
        </div>
        <ul className="category-journals">{journalList}</ul>
      </div>
    );
  }
}

export default JournalIndex;
