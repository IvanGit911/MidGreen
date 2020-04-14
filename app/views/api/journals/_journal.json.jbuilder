json.extract! journal, :id, :title, :body, :author_id, :category_id, :subtitle, :updated_at
json.author journal.author.username
json.photo url_for(journal.photo)