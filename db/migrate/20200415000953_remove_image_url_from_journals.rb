class RemoveImageUrlFromJournals < ActiveRecord::Migration[5.2]
  def change
    remove_column :journals, :image_url
  end
end
