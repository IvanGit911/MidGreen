#json.partial! '/api/users/user', user: @user

json.extract! @user, :id, :username, :email
json.journals @user.journals do |journal|
    json.extract! journal, :id, :title, :body
end
json.followers @user.followers.each do |follower|
    json.extract! follower, :id, :username
end
json.followings @user.followings.each  do |follower|
    json.extract! follower, :id, :username
end 