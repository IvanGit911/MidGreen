import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import CategoriesReducer from "./categories_reducer";
import journalsReducer from "./journals_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  categories: CategoriesReducer,
  journals: journalsReducer,
});

export default entitiesReducer;
