import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/user_actions";
import { Link } from "react-router-dom";
import { openModal, closeModal } from "../../actions/modal_action";

const msp = (state) => ({
  errors: state.errors.session,
  formType: "Go Green.",
});

const mdp = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal("login"))}>Sign in</button>
  ),
  closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(SessionForm);
