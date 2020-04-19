import { connect } from "react-redux";
import JournalForm from "./journal_form";
import { createJournal } from "../../actions/journal_actions";
import { clearErrors } from "../../actions/error_actions";
clearErrors

const msp = (state) => ({
  currentUserId: state.session.id,
  categories: Object.values(state.entities.categories),
  journal: {
    title: "",
    body: "",
    category_id: 1,
    subtitle: "",
  },
  btnText: "Publish",
  errors: state.errors.session,
});

const mdp = (dispatch) => ({
  createJournal: (journal) => dispatch(createJournal(journal)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(JournalForm);
