class AddColumnToJournals < ActiveRecord::Migration[5.2]
  def change
    add_column :journals, :image_url, :string
  end
end
