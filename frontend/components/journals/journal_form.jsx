import React from "react";
import { Link, withRouter } from "react-router-dom";

class JournalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.journal;
    this.state["imageUrl"] = "";
    this.state["imageFile"] = null;

    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    const formData = new FormData();
    formData.append("journal[title]", this.state.title);
    formData.append("journal[body]", this.state.body);
    if (this.state.imageUrl) {
      formData.append("journal[photo]", this.state.imageFile);
    }
    $.ajax({
      url: "/api/journals",
      method: "POST",
      data: formData,
      contentType: false,
      processData: false,
    }).then(() =>
      this.props.history.push(`/users/${this.props.currentUserId}/journals`)
    );

    // this.props
    //   .action(this.state)
    //   .then(() => this.props.history.push(`/users/${this.props.currentUserId}/journals`));
  }

  handleFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, imageFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  render() {
    const { btnText, currentUserId } = this.props;
    const scdButton = btnText !== "Publish" ? "Back to Journals" : null;
    const preview = this.state.imageUrl ? (
      <img src={this.state.imageUrl} alt="" />
    ) : null;
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

          <div>{preview}</div>

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
        <div className="add-pic">
          <input type="file" onChange={this.handleFile} />
        </div>
      </div>
    );
  }
}

export default withRouter(JournalForm);
