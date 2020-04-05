import React from 'react';
import { connect } from "react-redux";
import SessionForm from "./session_form";
import {signup} from '../../actions/user_actions';
import { Link } from 'react-router-dom';



const msp = (state, ownProps) => {
    // debugger
    return {
        errors: state.errors.session,
        formType: 'signup',
        navLink: <Link to="/login">Log in</Link>
    }
};

const mdp = dispatch => ({
    processForm: (user) => dispatch(signup(user))
});


export default connect(msp, mdp)(SessionForm);