class Api::JournalsController < ApplicationController
    def index
    
        if params[:user_id]
            @journals = Journal.where(author_id: params[:user_id]).includes(:author, :category, "photo_attachment": :blob)
        elsif params[:category_id]
            @journals = Journal.where(category_id: params[:category_id]).includes(:author, :category, "photo_attachment": :blob)
        else
            @journals = Journal.all.includes(:author, :category, "photo_attachment": :blob)
        end
        render :index
    end

    #?! is includes need for show as well? can't tell the difference from server log => 6steps

    def show
        @journal = Journal.includes(:author, :category, "photo_attachment": :blob).find(params[:id])
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
        debugger
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
            render json: ["You can't update this journal!"], status: 401 #?!
        end
    end

    def destroy
        @journal = Journal.find(params[:id])
        if @journal.author_id == current_user.id
            @journal.destroy
        else
            render json: ["You can't delete this journal!"], status: 422 #?!
        end
    end

    private
    def journal_params
        params.require(:journal).permit(:title, :subtitle, :body, :category_id, :photo)
    end

end
