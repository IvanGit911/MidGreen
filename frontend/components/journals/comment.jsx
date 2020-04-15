import React from "react";

const Comment = ({ comment, allComments }) => {
  const nestedComments = (allComments[comment.id] || []).map((comment) => {
    return (
      <Comment
        key={comment.id}
        comment={comment}
        allComments={allComments}
        type="child"
      />
    );
  });

  return (
    <div className="comment-container">
      <div>
        <div className="comment-top">
          <div className="comment-author">A</div>
          <div className="comment-info">
            <div>author: {comment.author}</div>
            <div>date</div>
          </div>
        </div>
              <div className="comment-body">{comment.body}</div>
      </div>

      <div
        className="child-comments"
              style={{ marginLeft: "25px", marginTop: "10px", borderTop: "1px solid rgba(0, 0, 0, 0.3)" }}
      >
        {nestedComments}
      </div>
    </div>
  );
};

export default Comment;
