json.partial! 'comment', comment: @comment


#json.extract! @comment, :id,:body,:journal_id, :parent_comment_id
#debugger
#json.extract! @new_comment
#json.comment_author @comment.author.username