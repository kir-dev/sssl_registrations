# == Schema Information
#
# Table name: users
#
#  id          :bigint           not null, primary key
#  accepted    :boolean          default(FALSE), not null
#  admin       :boolean          default(FALSE), not null
#  email       :string           not null
#  name        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  internal_id :string           not null
#
require "test_helper"

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
