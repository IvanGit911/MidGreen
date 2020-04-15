class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :journal_id, null: false
      t.integer :parent_comment_id
    end
    add_index :comments, :author_id
    add_index :comments, :journal_id
    add_index :comments, :parent_comment_id
  end
end
