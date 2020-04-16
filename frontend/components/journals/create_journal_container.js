import { connect } from "react-redux";
import JournalForm from "./journal_form";
import { createJournal } from "../../actions/journal_actions";

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
});

// const mdp = (dispatch) => ({
//   action: (journal) => dispatch(createJournal(journal)),
// });

export default connect(msp, null)(JournalForm);
