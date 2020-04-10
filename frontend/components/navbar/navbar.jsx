import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
    this.container = React.createRef();

    // this.toggleShow = this.toggleShow.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  handleButtonClick() {
    // debugger;
    this.setState({ open: !this.state.open });
  }

  handleClickOutside(e) {
    if (this.container.current && !this.container.current.contains(e.target)) {
      this.setState({
        open: false,
      });
    }
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
      <div ref={this.container}>
        <button className="currentuser" onClick={this.handleButtonClick}>
          {currentUser.username[0].toUpperCase()}
        </button>
        {/* dropdown */}
        {/* <Dropdown logout={logout} email={email} currentUser={currentUser} /> */}

        {this.state.open && (
          <div id="user-dropdown" className="dropdown-content">
            <ul className="dropdown-box">
              <div className="user-info3">
                <li className="currentuser">
                  {currentUser.username[0].toUpperCase()}
                </li>
                <div className="user-info4">
                  <li className="current-username">
                    {currentUser.username.slice(0, 4)}
                  </li>
                  <li>{`@${email}`}</li>
                </div>
              </div>
              <div className="dropdown-action">
                <li>
                  <Link to="/new/journal">New journal</Link>
                </li>
                <li>
                  <Link to="/users/:userId/journals">My journal</Link>
                </li>
                <li>Profile</li>
                <li>
                  <Link to="/me/settings">Account settings</Link>
                </li>
              </div>
              <button id="logout-btn" onClick={logout}>
                Log out
              </button>
            </ul>
          </div>
        )}
      </div>
    );
  }

  render() {
    let { currentUser } = this.props;
    return currentUser ? this.loggedin(currentUser) : this.loggedout();
  }
}

export default NavBar;
