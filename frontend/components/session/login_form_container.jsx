import React from 'react';
import { connect } from "react-redux"
import SessionForm from "./session_form";
import {login} from '../../actions/session_actions'
import { Link } from 'react-router-dom';

const msp = (state, ownProps) => {
    // debugger
    return {
        errors: state.errors.session,
        formType: 'login',
        navLink: <Link to="/signup">Sign up</Link>
    }
};

const mdp = dispatch => ({
    processForm: (user) => dispatch(login(user))
});


export default connect(msp, mdp)(SessionForm);
