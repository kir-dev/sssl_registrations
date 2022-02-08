# frozen_string_literal: true

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

  UNIVERSITY_OPTIONS = %w[mernokinfo villamosmernok uzemmernok kulsos].freeze
  GROUP_OPTIONS      = %w[fekete feher sarga piros kek nincs].freeze

  validates :eula, presence: true, acceptance: true
  validates :name, presence: true
  validates :nickname, presence: true
  validates :email, presence: true
  validates :tel, presence: true
  validates :university, inclusion: { in: UNIVERSITY_OPTIONS }
  validates :year, numericality: { only_integer: true }
  validates :group, inclusion: { in: GROUP_OPTIONS }

  def self.to_csv
    registrations    = Registration.all
    reg_headers      = Registration.headers
    schedule_headers = Schedule.headers

    CSV.generate(headers: true) do |document|
      document << (reg_headers + schedule_headers).map { |h| I18n.t(h, default: h) }

      registrations.each do |reg|
        row = reg_headers.map { |h| translate_or_default(h, reg.send(h)) }
        row += schedule_headers.map { |sh| translate_or_default(sh, reg.schedule.send(sh)) }
        document << row
      end
    end
  end

  def self.headers
    Registration.columns.map(&:name) - %w[id updated_at]
  end

  def self.translate_or_default(key, str)
    if %w[university group].include? key
      I18n.t(str, default: str)
    else
      str
    end
  end

end
