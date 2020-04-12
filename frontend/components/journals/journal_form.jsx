import React from "react";
import { Link, withRouter } from "react-router-dom";

class JournalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.journal;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    this.props
      .action(this.state)
      .then(() => this.props.history.push(`/users/${this.props.currentUserId}/journals`));
  }



  render() {
    const { btnText, currentUserId } = this.props;
    const scdButton = btnText !== "Publish" ? "Back to Journals" : null;
    // debugger
    return (
      <div>
        <form className="journal-form" onSubmit={this.handleSubmit}>
          <div className="j-btns">
            <Link
              className="j-scdButton"
              to={`/users/${currentUserId}/journals`}
            >
              {scdButton}
            </Link>
            <input className="publish-btn" type="submit" value={btnText} />
          </div>
          <input
            className="j-form-title"
            type="text"
            placeholder="Title"
            onChange={this.update("title")}
            value={this.state.title}
          />

          <textarea
            className="j-form-body"
            name=""
            id=""
            cols="1"
            rows="30"
            placeholder="Tell your story..."
            onChange={this.update("body")}
            value={this.state.body}
          ></textarea>
        </form>
        <div>+</div>
      </div>
    );
  }
}

export default withRouter(JournalForm);
