import React from "react";

class EditUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user.id);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.updateUser(this.state);
  }

  render() {
    return (
      <div className="editUser">
        <div className="edit-title">User settings</div>
        <form className="user-form" onSubmit={this.handleUpdate}>
          <div className="editUser-box">
            <label className="editUser-title">Your username</label>
            <input
              className="editUser-input"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
            />
          </div>
          <input className="edit-btn" type="submit" value="Edit username" />
        </form>
        <form className="user-form" onSubmit={this.handleUpdate}>
          <div className="editUser-box">
            <label className="editUser-title">Your email</label>
            <input
              className="editUser-input"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
            />
          </div>
          <input className="edit-btn" type="submit" value="Edit email" />
        </form>
      </div>
    );
  }
}

export default EditUserForm;
