# frozen_string_literal: true

# == Schema Information
#
# Table name: schedules
#
#  id              :bigint           not null, primary key
#  monday          :boolean          default(FALSE)
#  thursday        :boolean          default(FALSE)
#  tuesday         :boolean          default(FALSE)
#  wednesday       :boolean          default(FALSE)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  registration_id :bigint           not null
#
# Indexes
#
#  index_schedules_on_registration_id  (registration_id)
#
# Foreign Keys
#
#  fk_rails_...  (registration_id => registrations.id)
#
class Schedule < ApplicationRecord
  belongs_to :registration

  def accepted_days
    attributes.select { |_, value| value == true }.map { |key, _| key.to_s }
  end

  def self.headers
    Schedule.columns.map(&:name) - %w[id updated_at created_at registration_id]
  end
end
