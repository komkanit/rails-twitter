Rails.application.routes.draw do
  devise_for :users
  use_doorkeeper
  namespace :api do
    resources :tweets, only: [:index, :show, :create]
  end

  resources :tweets, only: :index

  root to: 'tweets#index'
end
