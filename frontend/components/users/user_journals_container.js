import UserJournals from "./user_journals";
import { connect } from "react-redux";
import {fetchUser} from '../../actions/user_actions'

const msp = (state, ownProps) => {
    // debugger
    return {
        // currentUserId: state.session.id,
        user: state.entities.users[state.session.id]
    }
};


const mdp = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(msp, mdp)(UserJournals);
