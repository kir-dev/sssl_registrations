Rails.application.routes.draw do
  resources :registrations
  resources :users
  get 'login', to: 'session#index', as: :login
  get 'auth/authsch/callback', to: 'session#callback'
  get 'logout', to: 'session#destroy', as: :logout
  get 'forbidden', to: 'session#forbidden', as: :forbidden
  post 'api/registrations', to: 'registrations#create'
  get 'api/available', to: 'api#available', as: :available
  get 'open_registrations', to: 'api#open', as: :open_registrations
  get 'close_registrations', to: 'api#close', as: :close_registrations
  root 'registrations#index'
end
