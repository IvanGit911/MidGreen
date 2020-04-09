import React from "react";

class JournalDetail extends React.Component {
  componentDidMount() {
    this.props.requestJournal(this.props.match.params.journalId);
  }
  render() {
    const { journal } = this.props;

    return (
      <ul className="journal-detail">
        <li className="journal-title">{journal.title}</li>
        <li className="journal-subtitle">subtitle</li>
        <li class="journal-authinfo">
          <div>authorname, follow, date, read-time</div>
        </li>
        <li>img</li>
        <li className="journal-body">
            <p>
                    {journal.body[2].toUpperCase()}
            </p>
            {journal.body.slice(3)}
            </li>
      </ul>
    );
  }
}

export default JournalDetail;
