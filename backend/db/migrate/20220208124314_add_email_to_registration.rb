class AddEmailToRegistration < ActiveRecord::Migration[6.1]
  def change
    add_column :registrations, :email, :string
  end
end
