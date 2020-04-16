import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import categoriesReducer from "./categories_reducer";
import journalsReducer from "./journals_reducer";
import commentsReducer from "./comments_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  categories: categoriesReducer,
  journals: journalsReducer,
  comments: commentsReducer,
});

export default entitiesReducer;
