# == Schema Information
#
# Table name: journals
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  body        :string           not null
#  author_id   :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_url   :string
#
class Journal < ApplicationRecord
    validates :title, :body, :author_id, :category_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User


    belongs_to :category

    has_one_attached :picture 
end
