import React from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClickOutside(e) {}

  handleClick(e) {
    document.getElementById("user-dropdown").classList.toggle("show");

    // if (e.target.matches('dropdown-btn')){

    // } else {dropdown.classList.contains('show') && !e.target.matches('dropdown-content')
    //   const dropdown = document.getElementsByClassName('dropdown-content')[0];
    //   dropdown.classList.remove('show')
    // }
  }

  loggedout() {
    const { openModal } = this.props;
    return (
      <div className="session-btn">
        <button id="login-btn" onClick={() => openModal("login")}>
          Sign in
        </button>
        <button id="signup-btn" onClick={() => openModal("signup")}>
          Get started
        </button>
      </div>
    );
  }

  loggedin() {
    let { logout, currentUser } = this.props;
    const email = currentUser.email ? currentUser.email.split("@")[0] : null;
    return (
      <div>
        <button className="currentuser" onClick={this.handleClick}>
          {currentUser.username[0].toUpperCase()}
        </button>
        {/* dropdown */}
        <div id="user-dropdown" className="dropdown-content">
          <ul className="dropdown-box">
            <div className="user-info3">
              <li className="currentuser">
                {currentUser.username[0].toUpperCase()}
              </li>
              <div className="user-info4">
                <li className="current-username">{currentUser.username}</li>
                <li>{`@${email}`}</li>
              </div>
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
