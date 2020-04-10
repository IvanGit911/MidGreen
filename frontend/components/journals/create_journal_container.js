import { connect } from "react-redux";
import CreateJournalForm from "./journal_form";
import { createJournal } from "../../actions/journal_actions";

const msp = (state) => ({
  journal: {
    title: "",
    body: "",
    image_url: "",
  },
});

const mdp = (dispatch) => ({
  createJournal: (journal) => dispatch(createJournal(journal)),
});

export default connect(msp, mdp)(CreateJournalForm);
