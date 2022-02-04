# == Schema Information
#
# Table name: registrations
#
#  id          :bigint           not null, primary key
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
class Registration < ApplicationRecord
  has_one :schedule

  validates :eula, presence: true ,acceptance: true
end
