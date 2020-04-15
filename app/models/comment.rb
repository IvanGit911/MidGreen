# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  body              :string           not null
#  author_id         :integer          not null
#  journal_id        :integer          not null
#  parent_comment_id :integer
#
class Comment < ApplicationRecord
    validates :body, presence: true

    after_initialize :ensure_journal_id!

    belongs_to :journal, inverse_of: :comments

    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id,
        inverse_of: :comments

    has_many :child_comments,
        class_name: :Comment,
        foreign_key: :parent_comment_id,
        primary_key: :id

    belongs_to :parent_comment,
        class_name: :Comment,
        foreign_key: :parent_comment_id,
        primary_key: :id,
        optional: true

    private
    def ensure_journal_id!
        self.journal_id ||= self.parent_comment.journal_id if parent_comment
    end


end
