
# json.partial! 'category', category: @category


json.extract! @category, :id, :title, :description
json.journals @category.journals