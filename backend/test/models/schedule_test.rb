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
require "test_helper"

class ScheduleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
