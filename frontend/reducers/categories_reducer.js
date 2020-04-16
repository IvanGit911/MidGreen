import {
  RECEIVE_ALL_CATEGORIES,
  RECEIVE_CATEGORY,
} from "../actions/category_actions";

const CategoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return Object.assign({}, action.categories);
    case RECEIVE_CATEGORY:
      const newItem = { [action.category.id]: action.category };
      return Object.assign({}, state, newItem);
    default:
      return state;
  }
};

export default CategoriesReducer;
