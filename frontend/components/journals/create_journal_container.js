import { connect } from "react-redux";
import JournalForm from "./journal_form";
import { createJournal } from "../../actions/journal_actions";

const msp = (state) => ({
  journal: {
    title: "",
    body: "",
    image_url: "",
  },
  btnText: "Publish",
});

const mdp = (dispatch) => ({
  action: (journal) => dispatch(createJournal(journal)),
});

export default connect(msp, mdp)(JournalForm);
