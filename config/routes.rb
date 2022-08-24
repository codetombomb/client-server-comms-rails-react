Rails.application.routes.draw do
  resources :seasons
  resources :locations
  resources :tracks
  resources :rider_races
  resources :races
  resources :riders
  resources :teams
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
