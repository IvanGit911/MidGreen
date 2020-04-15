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
    <div style={{ marginLeft: "25px", marginTop: "10px" }}>
      <div>
        <div>{comment.body}</div>
        <div>author: {comment.author}</div>
      </div>

      {nestedComments}
    </div>
  );
};

export default Comment;
