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
    resources :journals, only: [:index, :create, :show, :destroy, :update]
  end
end
