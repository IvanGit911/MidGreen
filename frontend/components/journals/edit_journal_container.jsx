import React from "react";
import { connect } from "react-redux";
import JournalForm from "./journal_form";
import { requestJournal, updateJournal } from "../../actions/journal_actions";

class EditJournalForm extends React.Component {
  componentDidMount() {
    this.props.requestJournal(this.props.match.params.journalId);
  }

  render() {
    const { journal, action, btnText, currentUserId } = this.props;

    if (!journal) return null; //?!

    return (
      <>
        <JournalForm
          action={action}
          btnText={btnText}
          journal={journal}
          currentUserId={currentUserId}
        />
      </>
    );
  }
}

const msp = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    journal: state.entities.journals[ownProps.match.params.journalId],
    btnText: "Save and publish",
  };
};

const mdp = (dispatch) => ({
  action: (journal) => dispatch(updateJournal(journal)),
  requestJournal: (journalId) => dispatch(requestJournal(journalId)),
});

export default connect(msp, mdp)(EditJournalForm);
