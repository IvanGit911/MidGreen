class Api::SessionsController < ApplicationController
    def create
        @user = User.new(params[:user][:email], params[:user][:password])
        if @user.save
            login!(@user)
            # todo render rootpage
            render '/api/users/show'
        else
            render json:['Invalid Email or Password!']. status: 401 #?! 401
        end
    end

    def destroy
        if logged_in?
            logout!
            render json: {}
        else
            render json: ['Not logged in!'], status: 404 #?! 404
        end
    end
    
end
