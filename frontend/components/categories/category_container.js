import { connect } from "react-redux";
import CategoriesBar from "./categories_bar";
import { requestAllCategories } from "../../actions/category_actions";

const msp = (state) => ({
  categories: Object.values(state.entities.categories),
});

const mdp = (dispatch) => ({
  requestAllCategories: () => dispatch(requestAllCategories()),
});

export default connect(msp, mdp)(CategoriesBar);
