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
      redirect_to '/403.html'
    end
  end

  def require_admin
    if !logged_in?
      redirect_to login_url
    elsif !logged_in_as_admin?
      redirect_to '/403.html'
    end
  end

end
