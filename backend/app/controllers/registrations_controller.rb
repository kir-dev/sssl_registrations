# frozen_string_literal: true

class RegistrationsController < ApplicationController
  before_action :set_open, only: :index
  skip_before_action :verify_authenticity_token, only: %i[create], if: :api_request?
  skip_before_action :require_login, only: %i[create], if: :api_request?
  before_action :set_registration, only: %i[show edit update destroy]

  # GET /registrations or /registrations.json or /registrations.csv
  def index
    @registrations = Registration.all
    respond_to do |format|
      format.html
      format.csv do
        send_data Registration.to_csv, filename: "reg_export-#{Time.zone.today}.csv"
      end
    end
  end

  # GET /registrations/1 or /registrations/1.json
  def show; end

  # GET /registrations/new
  def new
    @registration = Registration.new
    @registration.build_schedule
  end

  # GET /registrations/1/edit
  def edit; end

  # POST /registrations or /registrations.json
  def create
    @registration = Registration.new(registration_params)
    respond_to do |format|
      if @registration.save
        format.html { redirect_to registration_url(@registration), notice: 'Registration was successfully created.' }
        format.json do
          render status: :created,
                 json:   @registration.to_json(include: { schedule: { only: %i[monday tuesday wednesday thursday] } })
        end
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @registration.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /registrations/1 or /registrations/1.json
  def update
    respond_to do |format|
      if @registration.update(registration_params)
        format.html { redirect_to registration_url(@registration), notice: 'Registration was successfully updated.' }
        format.json { render :show, status: :ok, location: @registration }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @registration.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /registrations/1 or /registrations/1.json
  def destroy
    @registration.destroy

    respond_to do |format|
      format.html { redirect_to registrations_url, notice: 'Registration was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_registration
    @registration = Registration.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def registration_params
    params[:registration][:schedule_attributes] = params[:schedule] if params[:registration][:schedule_attributes].nil?
    params.require(:registration).permit(:name, :nickname, :email, :tel, :year, :university, :group, :room_number,
                                         :other, :eula, schedule_attributes: [%i[monday tuesday wednesday thursday]])
  end

  def api_request?
    request.format.json?
  end
end
