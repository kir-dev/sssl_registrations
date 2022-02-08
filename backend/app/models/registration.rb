# == Schema Information
#
# Table name: registrations
#
#  id          :bigint           not null, primary key
#  email       :string
#  eula        :boolean
#  group       :string
#  name        :string
#  nickname    :string
#  other       :string
#  room_number :string
#  tel         :string
#  university  :string
#  year        :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'csv'

class Registration < ApplicationRecord
  has_one :schedule, dependent: :destroy
  accepts_nested_attributes_for :schedule, update_only: true
  validates :eula, presence: true, acceptance: true

  def self.to_csv
    registrations    = Registration.all
    reg_headers      = Registration.headers
    schedule_headers = Schedule.headers

    CSV.generate(headers: true) do |document|
      document << reg_headers + schedule_headers

      registrations.each do |reg|
        document << reg_headers.map { |h| reg.send(h) } + schedule_headers.map { |sh| reg.schedule.send(sh) }
      end
    end
  end

  def self.headers
    Registration.columns.map(&:name) - %w[id updated_at]
  end
end
