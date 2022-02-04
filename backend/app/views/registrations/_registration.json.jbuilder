json.extract! registration, :id, :name, :nickname, :tel, :year, :university, :group, :room_number, :other, :eula, :created_at, :updated_at
json.url registration_url(registration, format: :json)
