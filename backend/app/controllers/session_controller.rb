# frozen_string_literal: true

class SessionController < ApplicationController
  skip_before_action :require_login

  def index; end

  def callback
    raw_user = request.env['omniauth.auth']['extra']['raw_info']
    @user = User.find_or_create_by(internal_id: raw_user['internal_id']) do |u|
      u.name = raw_user['displayName']
      u.email = raw_user['mail']
      u.admin = superuser? raw_user['internal_id']
    end
    session[:user_id] = @user.id
    redirect_to root_path
  end

  def destroy
    reset_session
    redirect_to root_url
  end

  private
  def superuser?(id)
    ENV.fetch('SUPERUSERS').split.include? id
  end
  

end
