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
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  updateSelect(){
    return (e) => this.setState({ category_id: parseInt(e.target.value) });
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    const formData = new FormData();
    formData.append("journal[title]", this.state.title);
    formData.append("journal[body]", this.state.body);
    formData.append("journal[category_id]", this.state.category_id);

    if (this.state.imageUrl) {
      formData.append("journal[photo]", this.state.imageFile);
    } 

    //?!
    // else if (this.state.photo){
    //   formData.append("journal[photo]", this.state.photo);
    // }
    // debugger

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
    const { btnText, currentUserId, categories } = this.props;
    const scdButton = btnText !== "Publish" ? "Back to Journals" : null;
    const preview = this.state.imageUrl ? (
      <img src={this.state.imageUrl} alt="" />
    ) : null;

    // debugger;

    const categoryList = categories.map((category) => (
      <option key={category.id} value={`${category.id}`}>
        {category.title}
      </option>
    ));

    return (
      <div>
        <form className="journal-form" onSubmit={this.handleSubmit}>
          <div className="j-btns">
            <input className="publish-btn" type="submit" value={btnText} />
            <Link
              className="j-scdButton"
              to={`/users/${currentUserId}/journals`}
            >
              {scdButton}
            </Link>
          </div>
          <input
            className="j-form-title"
            type="text"
            placeholder="Title"
            onChange={this.update("title")}
            value={this.state.title}
          />
          <input
            className="j-form-subtitle"
            type="text"
            placeholder="Subtitle"
            onChange={this.update("subtitle")}
            value={this.state.subtitle}
          />

          <div>{preview}</div>
          <img src={this.state.photo} />

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
          <label className="select-cat">Select category:</label>

          <select
            className="select-cat-list"
            // value={(this.state.category_id).toString()}
            onChange={this.updateSelect()}
          >
            {categoryList}
          </select>
        </form>
        <label className="add-pic">
          <i className="fas fa-plus-circle"></i>
          <input type="file" onChange={this.handleFile} />
        </label>
      </div>
    );
  }
}

export default withRouter(JournalForm);
