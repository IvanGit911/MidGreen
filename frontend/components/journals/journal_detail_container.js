import { connect } from "react-redux";
import JournalDetail from "./journal_detail";
import { requestJournal } from "../../actions/journal_actions";

const msp = (state, ownProps) => ({
  journal: state.entities.journals[ownProps.match.params.journalId],
});

const mdp = (dispatch) => ({
  requestJournal: (journalId) => dispatch(requestJournal(journalId)),
});

export default connect(msp, mdp)(JournalDetail);
