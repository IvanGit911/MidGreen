import React from "react";
import dateHelper from "../../utils/date_helper";
import { Link } from "react-router-dom";
import Comment from "./comment";

class JournalDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {//this for create top-level comment
      body: "",
      journal_id: this.props.match.params.journalId,
    };
    this.updateComment = this.updateComment.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this)
  }

  updateComment(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmitComment(e){
    e.preventDefault();
    debugger
    this.props.createComment(this.state)
    //this will have a when
  }

  componentDidMount() {
    this.props.requestJournal(this.props.match.params.journalId);
  }

  render() {
    const { journal } = this.props;

    if (!journal) return null;

    const comment_authors = journal.comment_authors;
    // debugger
    // debugger

    const showComments = journal.all_comments
      ? Object.keys(journal.all_comments).length !== 0
        ? journal.all_comments[""].map((comment) => {
            //toplevel.map
            return (
              <Comment
                key={comment.id}
                journalId={journal.id}
                comment={comment}
                allComments={journal.all_comments}
                comment_authors={comment_authors}
              />
            );
          })
        : null
      : null;

    return (
      <>
        <div className="journal-content">
          <ul className="journal-detail">
            <li className="journal-title">{journal.title}</li>
            <li className="journal-subtitle">{journal.subtitle}</li>
            <li className="journal-authinfo">
              <div>{journal.author[0]}</div>
              <div>
                <div className="journal-authinfo-1">
                  <div>
                    <Link to="">{journal.author}</Link>
                  </div>
                  <button className="journal-flw-btn">Follow</button>
                </div>
                <div className="journal-authinfo-2">
                  <div>{dateHelper(journal.updated_at)}</div>
                  <div>{`${Math.floor(Math.random() * 10 + 2)} min read`}</div>
                </div>
              </div>
            </li>
            <li>
              <img src={journal.photo} />
            </li>
            <li className="journal-body">
              <p>{journal.body[0].toUpperCase()}</p>
              <div>{journal.body.slice(1)}</div>
            </li>
          </ul>
        </div>
        <div className="comments">
          <div>
            <Link to={`/journals/${journal.id}/comments/new`}>
              Write a comment
            </Link>{" "}
          </div>
          <h1>Comments</h1>
          <form onSubmit={this.handleSubmitComment}>
            <textarea cols="1" rows="3" onChange={this.updateComment('body')}></textarea>
            <input type="submit" value="Publish" />
          </form>
          {showComments}
        </div>
      </>
    );
  }
}

export default JournalDetail;
