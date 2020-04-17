import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";
import CreateTopLevelComment from "./create_top_level_comment";

const msp = (state, ownProps) => {
  // debugger;
  return {
    comment: {
      body: "",
      journal_id: state.entities.journals[ownProps.match.params.journalId].id,
      // journal_id: state.entities.journals[ownProps.journalId].id,
    },
    journal: state.entities.journals[ownProps.match.params.journalId],
    // journal: state.entities.journals[ownProps.journalId],
  };
};

const mdp = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
});

export default connect(msp, mdp)(CreateTopLevelComment);
