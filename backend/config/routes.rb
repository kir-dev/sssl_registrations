Rails.application.routes.draw do
  resources :users
  get 'login', to: 'session#index', as: :login
  get 'auth/authsch/callback', to: 'session#callback'
  get 'logout', to: 'session#destroy', as: :logout


  root 'session#index'
end
