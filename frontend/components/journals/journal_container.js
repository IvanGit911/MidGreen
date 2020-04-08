import { connect } from "react-redux";
import JournalIndex from "./journals_index";
import { requestCategoryJournals } from "../../actions/journal_actions";
import { requestCategory } from "../../actions/category_action";

const msp = (state, ownProps) => {
  const category = state.entities.categories[ownProps.match.params.categoryId];
  return {
    category: category,
    journals: Object.values(state.entities.journals),
  };
};

const mdp = (dispatch) => ({
  requestCategoryJournals: (categoryId) =>
    dispatch(requestCategoryJournals(categoryId)),
  requestCategory: (categoryId) => dispatch(requestCategory(categoryId)),
});

export default connect(msp, mdp)(JournalIndex);
