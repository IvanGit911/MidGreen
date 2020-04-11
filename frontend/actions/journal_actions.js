import { receiveErrors } from "./error_actions";
import * as JournalApiUtil from "../utils/journal_util";

export const RECEIVE_JOURNALS = "RECEIVE_JOURNALS";
export const RECEIVE_JOURNAL = "RECEIVE_JOURNAL";
export const REMOVE_JOURNAL = "REMOVE_JOURNAL";

const receiveJournals = (journals) => ({
  type: RECEIVE_JOURNALS,
  journals,
});

const receiveJournal = (journal) => ({
  type: RECEIVE_JOURNAL,
  journal,
});

const removeJournal = (journalId) => ({
  type: REMOVE_JOURNAL,
  journalId,
});

// export const requestAuthoredJournals = (userId) => (dispatch) =>
//   JournalApiUtil.fetchAuthoredJournals(userId).then((journals) =>
//     dispatch(receiveJournals(journals))
//   );

export const requestCategoryJournals = (categoryId) => (dispatch) =>
  JournalApiUtil.fetchCategoryJournals(categoryId).then((journals) =>
    dispatch(receiveJournals(journals))
  );

export const requestJournal = (journalId) => (dispatch) =>
  JournalApiUtil.fetchJournal(journalId).then((journal) =>
    dispatch(receiveJournal(journal))
  );

export const createJournal = (journal) => (dispatch) =>
  JournalApiUtil.createJournal(journal).then(
    (journal) => dispatch(receiveJournal(journal)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );

export const updateJournal = (journal) => (dispatch) =>
  JournalApiUtil.updateJournal(journal).then(
    (journal) => dispatch(receiveJournal(journal)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );

export const deleteJournal = (journalId) => (dispatch) =>
  JournalApiUtil.deleteJournal(journalId).then(
    () => dispatch(removeJournal(journalId)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
