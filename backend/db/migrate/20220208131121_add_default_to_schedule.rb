class AddDefaultToSchedule < ActiveRecord::Migration[6.1]
  def change
    change_column_default :schedules, :monday, :false
    change_column_default :schedules, :tuesday, :false
    change_column_default :schedules, :wednesday, :false
    change_column_default :schedules, :thursday, :false
  end
end
