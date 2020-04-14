import { connect } from "react-redux";
import { requestAllJournals } from "../../actions/journal_actions";
import IndexPage from "./index_page";

const msp = (state) => ({
    journals: state.entities.journals,
    categories: state.entities.categories
});

const mdp = (dispatch) => ({
  requestAllJournals: () => dispatch(requestAllJournals()),
});

export default connect(msp, mdp)(IndexPage);
