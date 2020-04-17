import React from "react";

class CreateTopLevelComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  updateComment(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmitComment(e) {
    e.preventDefault();
    // debugger
    this.props.createComment(this.state)
    // .then(() => {
    //     debugger
    //   this.props.history.push(
    //     `/journals/${this.props.journal.journalId}`
    //   );
    // });
  }

  render() {
    const {journal} = this.props;
    debugger
    return (
      <div className="comments">
        <h1>Showing comments for:</h1>
        <div className="comment-container">
          <div className="comment-top">
            <div className="comment-author">{journal.author[0]}</div>
            <div className="comment-info">{journal.author}</div>
          </div>
          <div className="comment-body">{journal.title}</div>
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

export default CreateTopLevelComment;
