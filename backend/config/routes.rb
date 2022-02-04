Rails.application.routes.draw do
  resources :registrations
  resources :users
  get 'login', to: 'session#index', as: :login
  get 'auth/authsch/callback', to: 'session#callback'
  get 'logout', to: 'session#destroy', as: :logout
  post 'api/registrations', to: 'registrations#create'

  root 'registrations#index'
end
