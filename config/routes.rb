Rails.application.routes.draw do
  namespace :api do
    resources :tweets, only: :index
  end

  resources :tweets, only: :index

  root to: 'tweets#index'
end
