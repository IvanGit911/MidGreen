Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: JSON} do
    resources :users, only: [:create, :show, :update, :destroy] do
      resources :journals, only: [:index]
    end

    resource :session, only: [:create, :destroy]
    resources :categories, only: [:index, :show] do
      resources :journals, only: [:index]
    end

    # custom routes
    post '/users/:id/follow', to: "users#follow", as: "follow_user"
    post '/users/:id/unfollow', to: "users#unfollow", as: "unfollow_user"
    
    resources :journals, only: [:index, :create, :show, :destroy, :update] 

    resources :comments, only: [:show, :create, :update, :destroy]
  end
end
