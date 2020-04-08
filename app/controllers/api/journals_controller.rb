class Api::JournalsController < ApplicationController
    def index
        # debugger
        if params[:user_id]
            @journals = User.find(params[:user_id]).journals 
        elsif params[:category_id]
            @journals = Category.find(params[:category_id]).journals
        end
        render :index
    end

    def show
        @journal = Journal.find(params[:id])
        render :show
    end

    def create
        @journal = Journal.new(journal_params)
        @journal.author_id = current_user.id
        if @journal.save
            render :show
        else
            render json: @journal.errors.full_messages, status: 422
        end
    end

    def update
        @journal = Journal.find(params[:id])
        if @journal.author_id == current_user.id
            if @journal.update(journal_params)
                render :show
                return 
            else 
                render json: @journal.errors.full_messages, status: 422
                return
            end
        else
            render json: ["You can't delete this journal!"], status: 401 #?!
        end
    end

    def destroy
        @journal = Journal.find(params[:id])
        if @journal.author_id == current_user.id
            @journal.destroy
            #?! how to user currentuser.id to navigate back to index page
            # render 
        else
            render json: ["You can't delete this journal!"], status: 422 #?!
        end
    end

    private
    def journal_params
        params.require(:journal).permit(:title, :body, :category_id)
    end

end
