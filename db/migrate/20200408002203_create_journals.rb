class CreateJournals < ActiveRecord::Migration[5.2]
  def change
    create_table :journals do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :category_id, null: false

      t.timestamps
    end
    add_index :journals, :author_id
    add_index :journals, :category_id
  end
end
