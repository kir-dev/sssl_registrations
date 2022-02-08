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
    registrations = Registration.all
    headers       = Registration.headers

    CSV.generate(headers: true) do |document|
      document << headers

      registrations.each do |reg|
        document << headers.map do |h|
          val = reg.send(h)
          if val.methods.include? :accepted_days
            val.accepted_days.join ', '
          else
            val
          end
        end

      end
    end
  end

  private

  def self.headers
    Registration.columns.map(&:name) - %w[id updated_at] + ['schedule']
  end
end
