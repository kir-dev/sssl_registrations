class ApiController < ApplicationController
  before_action :set_open
  skip_before_action :require_login, only: :available

  def available
    render json: { open: @open.value }
  end

  def open
    @open.value = true.to_s
    @open.save!
    redirect_to root_url
  end

  def close
    @open.value = false.to_s
    @open.save!
    redirect_to root_url
  end
end

