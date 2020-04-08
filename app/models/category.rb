# == Schema Information
#
# Table name: categories
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Category < ApplicationRecord
    validates :title, :description, presence: true
    validates :title, uniqueness: true

    has_many :journals

end
