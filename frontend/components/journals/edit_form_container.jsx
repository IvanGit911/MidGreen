import React from 'react';
import { connect } from 'react-redux';
import CreateJournalForm from "./journal_form";
import {requestJournal} from '../../actions/journal_actions'


class EditJournalForm extends React.Component{
    componentDidMount(){

    }

}



const msp = (state, ownProps) => ({
  journal: {
    title: "",
    body: "",
    image_url: "",
  },
});

const mdp = (dispatch) => ({
  createJournal: (journal) => dispatch(createJournal(journal)),
  requestJournal: (journalId) => dispatch(requestJournal(journalId))
});

export default connect(msp, mdp)(EditJournalForm);