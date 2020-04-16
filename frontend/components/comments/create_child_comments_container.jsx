import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";
import CreateChildComments from "./create_child_comments";
import { requestComment } from "../../actions/comment_actions";

const msp = (state, ownProps) => {
  // debugger
  return {
    parentComment: state.entities.comments[ownProps.match.params.commentId]
  }
};

const mdp = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  requestComment: (commentId) => dispatch(requestComment(commentId))
});

export default connect(msp, mdp)(CreateChildComments);
