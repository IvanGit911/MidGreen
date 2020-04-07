import React from "react";
import { fetchUser, updateUser } from "../../actions/user_actions";
import { connect } from "react-redux";

class EditUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user.id);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.targer.value });
  }

  render() {
    const { updateUser } = this.props;
    debugger;
    return (
      <div className="editUser">
        <div className="edit-title">User settings</div>
        <form className="user-form">
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
        <form className="user-form">
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

const msp = (state, ownProps) => {
  debugger;
  return {
    // user: state.entities.users[ownProps.match.params.userId],
    user: state.entities.users[state.session.id],
  };
};

const mdp = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateUser: (user) => dispatch(signup(user)),
});

export default connect(msp, mdp)(EditUserForm);
