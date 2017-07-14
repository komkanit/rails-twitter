Rails.application.routes.draw do
  namespace :api do
    resources :tweets, only: [:index, :show, :create]
  end

  resources :tweets, only: :index
  get '/*path', to: 'tweets#index' 
  root to: 'tweets#index'
end
