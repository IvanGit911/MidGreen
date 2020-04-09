import React from "react";
import { Link } from "react-router-dom";

class Dropdown extends React.Component {
  render() {
    const { logout, email } = this.props;

    return (
      <div>
        <button className="currentuser" onClick={this.handleClick}>
          {currentUser.username[0].toUpperCase()}
        </button>
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
              <li>New journal</li>
              <li>My journal</li>
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
      </div>
    );
  }
}

export default Dropdown;
