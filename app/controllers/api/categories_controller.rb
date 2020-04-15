class Api::CategoriesController < ApplicationController
    def index
        @categories = Category.all
        render :index
    end

    def show
        @category = Category.includes(:journals).find(params[:id])
        render :show
    end

end
