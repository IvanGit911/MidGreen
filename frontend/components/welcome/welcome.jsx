import React from "react";
import { connect } from "react-redux";

class Welcome extends React.Component {
  render() {
    const { openModal } = this.props;

    return (
      <ul className="welcome">
        <h1>We can’t just consume our way to a more sustainable world.</h1>
        {/* <li>todo this should be categories, but can't get access</li> */}
        <li>
          <ul className="checkmark-list">
            <li className="checkmark">
              <div>
                <div className="wel-icon">ic</div>
                <div>Up-to-date journalisms.</div>
              </div>
            </li>
            <li className="checkmark">
              <div>
                <div className="wel-icon">ic</div>
                <div>Undiscovered trends.</div>
              </div>
            </li>
            <li className="checkmark">
              <div>
                <div className="wel-icon">ic</div>
                <div>Categories you love.</div>
              </div>
            </li>
            <li className="wel-sub-sub-tle">
              All on MidGreen, all for sustainabiity.
            </li>
          </ul>
        </li>
        <li>
          <div className="wel-sub-1">
            <div className="wel-title">No charge. No ads.</div>
            <div className="wel-prg">
              Trust-proof. We don't publish fake journals. Never. Ever.
            </div>
          </div>
          <div className="wel-sub-tle">
            <div className="sub-tle-btn-box">
              <button className="wel-btn" onClick={openModal}>
                Get started
              </button>
            </div>
            <div className="sub-tle-msg">
              <div className="wel-sub-sub-tle">We do things greenly.</div>
              <div className="wel-prg">
                MidGreen is not like any other journalism app on the internet.
                Our sole purpose is to help you find compelling ideas,
                knowledge, and perspectives. We don’t serve ads—we serve you,
                the reader who intends to save the planet. MidGreen helps you
                find the best reading just for you and provides you with
                unlimited ideas with unlimited journals.
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="wel-tle-2">
            <h1 className="wel-title">
              100 million sustainabiity readers and growing.
            </h1>
            {/* <div className="wel-background">this need to be fixed</div> */}
            <div className="wel-cmt">
              this will be replaced with some awesome comments!!!
            </div>
          </div>
        </li>
        <li className="wel-btm">
          <div className="wel-title">Save the planet. Save the legacy.</div>
        </li>
        <button className="wel-btn" onClick={openModal}>
          Get started
        </button>
      </ul>
    );
  }
}

import { openModal, closeModal } from "../../actions/modal_action";

const msp = (state) => ({});

const mdp = (dispatch) => ({
  openModal: () => dispatch(openModal("signup")),
});

export default connect(null, mdp)(Welcome);
