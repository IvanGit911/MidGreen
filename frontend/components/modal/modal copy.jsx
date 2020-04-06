import React from "react";
import Modal from "react-modal";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";

class SessionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginIsOpen: false,
      signupIsOpen: false,
    };

    this.openLoginForm = this.openLoginForm.bind(this);
    this.closeLoginForm = this.closeLoginForm.bind(this);
    this.openSignupForm = this.openSignupForm.bind(this);
    this.closeSignupForm = this.closeSignupForm.bind(this);
    Modal.setAppElement("#root");
  }

  openLoginForm() {
    this.setState({ loginIsOpen: true });
  }

  closeLoginForm() {
    this.setState({ loginIsOpen: false });
  }

  openSignupForm() {
    this.setState({ signupIsOpen: true });
  }

  closeSignupForm() {
    this.setState({ signupIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openLoginForm}>Sign in</button>
        <button onClick={this.openSignupForm}>Get started</button>

        <Modal
          isOpen={this.state.loginIsOpen}
          onRequestClose={this.closeLoginForm}
        >
          <button onClick={this.closeLoginForm}>&times;</button>
          <LoginFormContainer />
        </Modal>

        <Modal
          isOpen={this.state.signupIsOpen}
          onRequestClose={this.closeSignupForm}
        >
          <button onClick={this.closeSignupForm}>&times;</button>
          <SignupFormContainer />
        </Modal>
      </div>
    );
  }
}

export default SessionModal;
