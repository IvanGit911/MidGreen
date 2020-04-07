import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import CategoriesReducer from "./categories_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  categories: CategoriesReducer,
});

export default entitiesReducer;
