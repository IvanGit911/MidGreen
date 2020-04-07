class Category < ApplicationRecord
    validates :title, :description, presence: true

end
