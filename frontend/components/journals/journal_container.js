import { connect } from "react-redux";
import JournalIndex from "./journals_index";



const msp = (state, ownProps) => {
    debugger
    return {
        category: state.entities.categories
        // journals:
    }

}

const mdp = (dispatch) => ({
  requestCategoryJournals: (categoryId) => dispatch(requestCategoryJournals(categoryId)),
});

export default connect(msp, mdp)(JournalIndex);