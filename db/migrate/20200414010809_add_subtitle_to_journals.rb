class AddSubtitleToJournals < ActiveRecord::Migration[5.2]
  def change
    add_column :journals, :subtitle, :string
  end
end
