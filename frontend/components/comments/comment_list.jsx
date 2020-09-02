import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//todo journalId no user?
class CommentList extends React.Component {
  componentDidMount() {
    // to fetch comment, but this is in journal, fetch journal?
  }

  render() {
    debugger
    const { comment, allComments, comment_authors, journalId } = this.props;
    const nestedComments = (allComments[comment.id] || []).map((comment) => {
      return (
        <CommentList
          key={comment.id}
          journalId={journalId}
          comment={comment}
          allComments={allComments}
          comment_authors={comment_authors}
        />
      );
    });
    //todo if comment_author is cuurentuser, show edit and delete. Otherwise, not.
    //comment_authors
    // debugger;
    return (
      <>
        <>
          <div className="comment-top">
            <div className="comment-author">
              {comment_authors[comment.author_id][0]}
            </div>
            <div className="comment-info">
              <div>{comment_authors[comment.author_id]}</div>
              {/* <div>date</div> */}
            </div>
          </div>
          <div className="comment-btm">
            <div className="comment-body">{comment.body}</div>
            <div>
              <p>edit</p>
              <Link
                className="new-child-comment"
                to={`/comments/${comment.id}/new`}
              >
                Write a comment
              </Link>
            </div>
          </div>
        </>

        <div
          className="child-comments"
          style={{
            marginLeft: "25px",
            marginTop: "10px",
            borderTop: "1px solid rgba(0, 0, 0, 0.3)",
          }}
        >
          {nestedComments}
        </div>
      </>
    );
  }
}

const msp = (state, ownProps) => {
  // debugger
  return {};
  // comment: state.entities.comments[ownProps.match.params.commentId]
};

const mdp = (dispatch) => ({});

export default connect(msp, mdp)(CommentList);
