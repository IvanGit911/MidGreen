import React from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleShow() {
    // debugger
  }

  handleClick(e) {
    document.getElementById("user-dropdown").classList.toggle("show");
    // const dropdown = document.getElementsByClassName('dropdown-content')[0];
    // if (dropdown.classList.contains('show') && !e.target.matches('dropdown-content')) {
    //     dropdown.classList.remove('show')
    // }
  }

  loggedout() {
    const { openModal } = this.props;
    return (
      <div>
        <button onClick={() => openModal("login")}>Login</button>
        <button onClick={() => openModal("signup")}>Signup</button>
      </div>
    );
  }

  loggedin() {
    let { logout, currentUser } = this.props;
    const email = currentUser.email ? currentUser.email.split("@")[0] : null;
    return (
      <div>
        {/* <div>{currentUser.username[0].toUpperCase()}</div> */}
        <button onClick={this.handleClick}>{currentUser.username}</button>
        {/* dropdown */}
        <div>
          <ul id="user-dropdown" className="dropdown-content">
            <div>
              <li>circle</li>
              <li>{currentUser.username}</li>
              <li>{`@${email}`}</li>
            </div>
            <li>New journal</li>
            <li>My journal</li>
            <li>Profile</li>
            <button id="logout-btn" onClick={logout}>
              Log out
            </button>
          </ul>
        </div>
      </div>
    );
  }

  render() {
    let { currentUser } = this.props;
    return currentUser ? this.loggedin(currentUser) : this.loggedout();
  }
}

export default NavBar;
