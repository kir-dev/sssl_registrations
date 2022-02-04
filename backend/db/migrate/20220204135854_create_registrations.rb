class CreateRegistrations < ActiveRecord::Migration[6.1]
  def change
    create_table :registrations do |t|
      t.string :name
      t.string :nickname
      t.string :tel
      t.integer :year
      t.string :university
      t.string :group
      t.string :room_number
      t.string :other
      t.boolean :eula

      t.timestamps
    end
  end
end
