import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUpdate(){
      
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    const { formType, errors, otherForm, closeModal } = this.props;
    const errList = errors.map((err, idx) => <li key={idx}>{err}</li>);
    const msg =
      formType === "Go Green." ? "Already have an account? " : "No account? ";
    const btn_text = formType === "Go Green." ? "Sign up" : "Log in";

    return (
      <div className="modal-content">
        <form onSubmit={this.handleSubmit}>
          <div>{formType}</div>
          <div onClick={closeModal} className="close-x">
            &times;
          </div>

          <ul className="session-err">{errList}</ul>
          <label htmlFor="username">
            Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
            />
          </label>
          <br />
          <label htmlFor="password">
            Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <br />
          <input type="submit" value={btn_text} />
        </form>
        <div>
          {msg}
          {otherForm}
        </div>
      </div>
    );
  }
}

export default SessionForm;
