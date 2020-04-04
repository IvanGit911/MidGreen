import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import entitiesReducer from "./entities_reducer";

const rootReducer = combineReducers({
    entities: entitiesReducer
});

export default rootReducer;