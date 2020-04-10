import React from "react";

class JournalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.journal;
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    const { btnText } = this.props;
    const scdButton = (btnText !== "Publish") ? "Back to Journals" : null;
    return (
      <div>
        <form className="journal-form">
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
          <div className="j-btns">
            <button className="j-scdButton">{scdButton}</button>
            <input className="publish-btn" type="submit" value={btnText} />
          </div>
        </form>
      </div>
    );
  }
}

export default JournalForm;
