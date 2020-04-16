import React from "react";

class CreateChildComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };
    this.updateComment = this.updateComment.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  updateComment(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmitComment(e) {
    e.preventDefault();
    // debugger;
    const childComment = {
      body: this.state.body,
      parent_comment_id: this.props.parentComment.id,
      journalId: this.props.parentComment.journal_id,
    };
    // debugger
    this.props.createComment(childComment).then(() => {
      // debugger;
      this.props.history.push(
        `/journals/${this.props.parentComment.journal_id}`
      );
    });
  }

  componentDidMount() {
    // debugger
    this.props.requestComment(this.props.match.params.commentId);
  }
  render() {
    const { parentComment } = this.props;
    // debugger;
    if (!parentComment) return null;

    return (
      <div className="comments">
        <h1>Showing comments for:</h1>
        <div className="comment-container">
          <div className="comment-top">
            <div className="comment-author">
              {parentComment.comment_author[0]}
            </div>
            <div className="comment-info">{parentComment.comment_author}</div>
          </div>
          <div className="comment-body">{parentComment.body}</div>
        </div>

        <form className="new-comment" onSubmit={this.handleSubmitComment}>
          <textarea
            cols="1"
            rows="3"
            className="new-comment-body"
            onChange={this.updateComment("body")}
          ></textarea>
          <input className="submit-comment-btn" type="submit" value="publish" />
        </form>
      </div>
    );
  }
}

export default CreateChildComments;
