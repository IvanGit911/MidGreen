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
    <div className="comment-content" style={{ marginLeft: "25px", marginTop: "10px" }}>
      <div>
        <div className="comment-top">
          <div>pic</div>
          <div>author: {comment.author}</div>
          <div>date</div>
        </div>
        <div>{comment.body}</div>
      </div>

      <div className="child-comments">{nestedComments}</div>
    </div>
  );
};

export default Comment;
