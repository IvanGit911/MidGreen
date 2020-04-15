
json.extract! @journal, :id, :title, :body, :category_id, :subtitle, :updated_at
json.author @journal.author.username
json.category @journal.category.title
json.photo url_for(@journal.photo)

all_comments = @journal.comments_by_parent
json.all_comments all_comments
json.top_level all_comments[nil]

# json.child_of_1 all_comments[nil].first.child_comments ?! this is N+1?

all_comments[nil].each do |comment|
    # debugger
    json.child all_comments[comment.id]
end

# debugger
