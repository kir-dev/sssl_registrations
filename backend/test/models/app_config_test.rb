# == Schema Information
#
# Table name: app_configs
#
#  id         :bigint           not null, primary key
#  key        :string
#  value      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "test_helper"

class AppConfigTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
