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

  helper_method :logged_in_as_admin?

  def require_login
    redirect_to login_path, notice: 'Ehhez nincs jogosultságod' unless logged_in_as_accepted?
  end

  def require_admin
    redirect_to login_path, notice: 'Ehhez nincs jogosultságod' unless logged_in_as_admin?
  end

end
