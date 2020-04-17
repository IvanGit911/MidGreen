import React from "react";
import { Link, withRouter } from "react-router-dom";

class JournalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.journal;
    this.state["imageUrl"] = "";
    this.state["imageFile"] = null;

    this.handleFile = this.handleFile.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  updateSelect() {
    return (e) => this.setState({ category_id: parseInt(e.target.value) });
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

  handleCreate(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("journal[title]", this.state.title);
    formData.append("journal[subtitle]", this.state.subtitle);
    formData.append("journal[body]", this.state.body);
    formData.append("journal[category_id]", this.state.category_id);

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
  }

  handleUpdate(e) {
    e.preventDefault();
    if (this.state["imageFile"]) {
      const formData = new FormData();
      formData.append("journal[title]", this.state.title);
      formData.append("journal[subtitle]", this.state.subtitle);
      formData.append("journal[body]", this.state.body);
      formData.append("journal[category_id]", this.state.category_id);

      if (this.state.imageUrl) {
        formData.append("journal[photo]", this.state.imageFile);
      }

      $.ajax({
        url: `/api/journals/${this.state.id}`,
        method: "PATCH",
        data: formData,
        contentType: false,
        processData: false,
      }).then(() =>
        this.props.history.push(`/users/${this.props.currentUserId}/journals`)
      );
    } else {
      const newJournal = {
        id: this.state.id,
        title: this.state.title,
        subtitle: this.state.subtitle,
        body: this.state.body,
        category_id: this.state.category_id,
      };
      this.props
        .updateJournal(newJournal)
        .then(() => {
          debugger
            this.props.history.push(`/users/${this.props.currentUserId}/journals`)}
        );
    }
  }

  render() {
    const { btnText, currentUserId, categories } = this.props;
    const scdButton =
      btnText !== "Publish" ? (
        <Link className="j-scdButton" to={`/users/${currentUserId}/journals`}>
          Back to Journals
        </Link>
      ) : null;

    const preview = this.state.imageFile ? (
      <img className="preview-img" src={this.state.imageUrl} />
    ) : null;

    // debugger;

    const categoryList = categories.map((category) => (
      <option key={category.id} value={`${category.id}`}>
        {category.title}
      </option>
    ));

    const action =
      btnText === "Publish" ? this.handleCreate : this.handleUpdate;

    const showPic =
      btnText === "Publish" ? (
        preview
      ) : this.state.imageFile ? (
        preview
      ) : (
        <img src={this.state.photo} />
      );

    let selected = this.state.category_id.toString();
    debugger;
    return (
      <div>
        <form className="journal-form" onSubmit={action}>
          <div className="j-btns">
            {scdButton}
            <input className="publish-btn" type="submit" value={btnText} />
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

          {showPic}

          <textarea
            className="j-form-body"
            cols="1"
            rows="30"
            placeholder="Tell your story..."
            onChange={this.update("body")}
            value={this.state.body}
          ></textarea>
          <label className="select-cat">Select category:</label>

          <select
            className="select-cat-list"
            value={selected}
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
