
json.extract! @journal, :id, :title, :body, :category_id, :subtitle, :updated_at
json.author @journal.author.username
json.category @journal.category.title
json.photo url_for(@journal.photo)


all_comments = @journal.comments_by_parent
comment_authors = @journal.comment_authors

json.all_comments all_comments
json.comment_authors comment_authors



