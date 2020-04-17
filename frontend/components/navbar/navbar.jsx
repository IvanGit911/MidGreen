import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
    this.container = React.createRef();

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.closeDropDown = this.closeDropDown.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleButtonClick() {
    // debugger;
    this.setState({ open: !this.state.open });
  }

  handleClickOutside(e) {
    // debugger
    if (this.container.current && !this.container.current.contains(e.target)) {
      this.setState({
        open: false,
      });
    }
  }

  closeDropDown() {
    // debugger
    this.setState({ open: false });
  }

  logout() {
    this.props.logout().then(() => this.closeDropDown());
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
    let { currentUser } = this.props;
    const email = currentUser.email ? currentUser.email.split("@")[0] : null;
    return (
      <div className="dropdown-box">
        <button className="currentuser-1" onClick={this.handleButtonClick}>
          {currentUser.username[0].toUpperCase()}
        </button>
        {/* dropdown */}
        {/* <Dropdown logout={logout} email={email} currentUser={currentUser} /> */}

        {this.state.open && (
         
          <ul ref={this.container} className="dropdown-content">
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
                <li className="dropdown-list" onClick={this.closeDropDown}>
                  <Link to="/new/journal">New journal</Link>
                </li>
                <li className="dropdown-list" onClick={this.closeDropDown}>
                  <Link to={`/users/${currentUser.id}/journals`}>
                    My journal
                  </Link>
                </li>
                <li className="dropdown-list">Profile</li>
                <li className="dropdown-list" onClick={this.closeDropDown}>
                  <Link to="/me/settings">Account settings</Link>
                </li>
              </div>
              <button id="logout-btn" onClick={this.logout}>
                Log out
              </button>
            </ul>
          
        )}
      </div>
    );
  }

  render() {
    let { currentUser } = this.props;
    return currentUser ? this.loggedin(currentUser) : this.loggedout();
  }
}

//add a class to control

export default NavBar;
