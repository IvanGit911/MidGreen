class Api::UsersController < ApplicationController

    def show
        @user = User.includes(:journals).find(params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render '/api/users/show'
        else
            render json:@user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find(params[:id])

        if @user.update(user_params)
            render :show
        else
            render json:@user.errors.full_messages, status: 422
        end
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
