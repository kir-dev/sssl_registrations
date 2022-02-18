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
class AppConfig < ApplicationRecord
  validates :key, uniqueness: true

end
