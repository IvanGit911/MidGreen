import { connect } from "react-redux";
import { requestAllCategories } from "../../actions/category_action";
import { openModal, closeModal } from "../../actions/modal_action";
import Welcome from "./welcome";

const msp = (state) => ({
  categories: Object.values(state.entities.categories),
});

const mdp = (dispatch) => ({
  openModal: () => dispatch(openModal("signup")),
  requestAllCategories: () => dispatch(requestAllCategories()),
});

export default connect(msp, mdp)(Welcome);
