class Api::SessionsController < ApplicationController
    
    def create
        # check username or email exisitence
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        # @user ? @user : User.new(params[:user][:email], params[:user][:password])
        if @user
            login!(@user)
            # todo render rootpage
            render '/api/users/show'
        else
            render json:['Invalid Username or Password!'], status: 401 #?! 401
        end
    end

    def destroy
        if logged_in?
            logout!
            render json: {}
        else
            render json: ['Log in before continue!'], status: 404 #?! 404
        end
    end
    
end
