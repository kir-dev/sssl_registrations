# frozen_string_literal: true
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins ENV['ALLOWED_ORIGIN'].present? ? ENV['ALLOWED_ORIGIN'] : 'localhost:8080'
    resource '/api/*', headers: :any, methods: [:post]
  end
end
