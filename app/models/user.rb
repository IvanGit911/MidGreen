# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true
    validates :username, :session_token, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :email, uniqueness: true, allow_nil: true

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :journals,
        foreign_key: :author_id,
        class_name: :Journal,
        dependent: :destroy

    has_many :comments, 
        foreign_key: :author_id,
        class_name: :Comment,
        inverse_of: :author


    has_many :a_follows_b,
        foreign_key: :follower_id,
        class_name: :Follow,
        dependent: :destroy

    has_many :b_followed_by_a,
        foreign_key: :followed_id,
        class_name: :Follow,
        dependent: :destroy
         
    has_many :followings, #a followed many people
        through: :a_follows_b,
        source: :followed

    has_many :followers, #b has many followers
        through: :b_followed_by_a,
        source: :follower




    def self.find_by_credentials(username, password) 
        user = User.find_by(username: username)
        # user ||= User.find_by(email: email) set username and emai to nil
        return nil unless user && user.is_password?(password)
        user
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.update(session_token: self.class.generate_session_token)
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end
end
