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
    this.props
      .createComment(childComment)
      .then(() =>{
        debugger
        this.props.history.push(
          `/journals/${this.props.parentComment.journal_id}`
        )}
      );
    
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
      <div>
        <div>
          <div>Showing responses for:</div>
          <div>
            <div>{parentComment.comment_author}</div>
            <div>{parentComment.body}</div>
          </div>
        </div>

        <form onSubmit={this.handleSubmitComment}>
          <textarea
            cols="1"
            rows="3"
            onChange={this.updateComment("body")}
          ></textarea>
          <input type="submit" value="publish" />
        </form>
      </div>
    );
  }
}

export default CreateChildComments;
