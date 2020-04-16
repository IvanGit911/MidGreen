class Api::CommentsController < ApplicationController

    def show
        @comment = Comment.includes(:author).find(params[:id])
        # @new_comment = @comment.child_comments.new
        render :show
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id
        # debugger
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :journal_id, :parent_comment_id)
    end
end
