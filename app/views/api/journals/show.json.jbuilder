
json.extract! @journal, :id, :title, :body, :category_id, :subtitle, :updated_at
json.author @journal.author.username
json.category @journal.category.title
json.photo url_for(@journal.photo)
