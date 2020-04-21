import React from "react";
import dateHelper from "../../utils/date_helper";
import { Link } from "react-router-dom";
import CommentList from "../comments/comment_list";
import CreateTopLevelCommentContainer from "../comments/create_top_level_comment_container";
import { follow, unfollow } from "../../utils/user-api_util";

class JournalDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followed: false,
    };
    // this for create top-level comment
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    this.props.requestJournal(this.props.match.params.journalId);
  }

  handleFollow() {
    // debugger
    // if follow, unfollow. vise versa

    follow(this.props.journal.author_id).then(() =>
      this.setState({ followed: !this.state.followed })
    )
  }

  render() {
    const { journal, currentUser } = this.props;

    if (!journal) return null;
    debugger
    const comment_authors = journal.comment_authors;
    // debugger
    const showComments = journal.all_comments
      ? Object.keys(journal.all_comments).length !== 0
        ? journal.all_comments[""].map((comment) => {
            //toplevel.map
            return (
              <CommentList
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
    // debugger
    const placeHolderText = showComments
      ? "Write a comment..."
      : "Be the first to write a comment...";

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
                  <button
                    className="journal-flw-btn"
                    onClick={this.handleFollow}
                  >
                    Follow
                  </button>
                </div>
                <div className="journal-authinfo-2">
                  <div>{dateHelper(journal.updated_at)}</div>
                  <i className="fas fa-circle"></i>
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

        <div className="m-j-add-comment">
          <Link to={`/journals/${journal.id}/newComment`}>
            {placeHolderText}
          </Link>
        </div>

        <div className="comments">
          <h1>Comments</h1>
          {showComments}
        </div>
      </>
    );
  }
}

export default JournalDetail;
