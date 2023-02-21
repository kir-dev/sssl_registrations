# frozen_string_literal: true
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :authsch, ENV.fetch('CLIENT_ID'), ENV.fetch('CLIENT_SECRET'), scope: 'basic mail displayName sn givenName eduPersonEntitlement', :provider_ignores_state => true
end
