import {
  RECEIVE_JOURNALS,
  RECEIVE_JOURNAL,
  REMOVE_JOURNAL,
} from "../actions/journal_actions";

const journalsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_JOURNALS:
      return Object.assign({}, action.journals);
    case RECEIVE_JOURNAL:
      return Object.assign({}, state, { [action.journal.id]: action.journal });
    case REMOVE_JOURNAL:
      const newState = Object.assign({}, state);
      delete newState[action.journalId];
      return newState;

    default:
      return state;
  }
};

export default journalsReducer;
