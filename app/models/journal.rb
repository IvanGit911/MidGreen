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
#  subtitle    :string
#
class Journal < ApplicationRecord
    validates :title, :body, :author_id, :category_id, presence: true

    validate :ensure_photo

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    has_many :comments, inverse_of: :journal


    belongs_to :category

    has_one_attached :photo 


    #todo  this may need to change

    def ensure_photo
        unless self.photo.attached?
            errors[:photo] << 'must exist to publish a journal!'
        end
    end


    def comments_by_parent
        comments_by_parent = Hash.new { |hash, key| hash[key] = [] }

        self.comments.includes(:author).each do |comment|
        comments_by_parent[comment.parent_comment_id] << comment
        end

        comments_by_parent
    end
end
