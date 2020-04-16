import React from "react";
import { Link } from "react-router-dom";

//todo journalId no user?

const CommentList = ({ comment, allComments, comment_authors, journalId }) => {
  const nestedComments = (allComments[comment.id] || []).map((comment) => {
    return (
      <CommentList
        key={comment.id}
        journalId={journalId}
        comment={comment}
        allComments={allComments}
        comment_authors={comment_authors}
        // type="child"
      />
    );
  });

  // debugger;
  return (
    <div>
      <div>
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
            <Link
              className="new-child-comment"
              to={`/comments/${comment.id}/new`}
            >
              Write a comment
            </Link>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default CommentList;
