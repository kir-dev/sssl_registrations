class ApplicationController < ActionController::Base
  before_action :require_login

  protected

  def logged_in?
    session[:user_id]
  end

  helper_method :logged_in?

  def current_user
    @current_user ||= User.find(session[:user_id]) if logged_in?
  end

  helper_method :current_user

  def logged_in_as_admin?
    current_user&.admin?
  end

  helper_method :logged_in_as_admin?

  def logged_in_as_accepted?
    current_user&.admin? || current_user&.accepted
  end

  helper_method :logged_in_as_accepted?

  def require_login
    if !logged_in?
      redirect_to login_url
    elsif !logged_in_as_accepted?
      redirect_to forbidden_path
    end
  end

  def require_admin
    if !logged_in?
      redirect_to login_url
    elsif !logged_in_as_admin?
      redirect_to forbidden_path
    end
  end

  def set_open
    @open = AppConfig.find_or_create_by(key: :can_register) do |conf|
      conf.key   = :can_register
      conf.value = false.to_s
    end
  end

end
