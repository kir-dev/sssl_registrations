json.extract! user, :id, :name, :email, :internal_id, :accepted, :admin, :created_at, :updated_at
json.url user_url(user, format: :json)
