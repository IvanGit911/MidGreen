export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
import * as CommentApiUtil from "../utils/comment_util";
import { receiveErrors } from "./error_actions";

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment,
});

export const createComment = (comment) => (dispatch) =>
  CommentApiUtil.createComment(comment).then((comment) =>
    dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
