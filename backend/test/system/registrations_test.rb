require "application_system_test_case"

class RegistrationsTest < ApplicationSystemTestCase
  setup do
    @registration = registrations(:one)
  end

  test "visiting the index" do
    visit registrations_url
    assert_selector "h1", text: "Registrations"
  end

  test "creating a Registration" do
    visit registrations_url
    click_on "New Registration"

    check "Eula" if @registration.eula
    fill_in "Group", with: @registration.group
    fill_in "Name", with: @registration.name
    fill_in "Nickname", with: @registration.nickname
    fill_in "Other", with: @registration.other
    fill_in "Room number", with: @registration.room_number
    fill_in "Tel", with: @registration.tel
    fill_in "University", with: @registration.university
    fill_in "Year", with: @registration.year
    click_on "Create Registration"

    assert_text "Registration was successfully created"
    click_on "Back"
  end

  test "updating a Registration" do
    visit registrations_url
    click_on "Edit", match: :first

    check "Eula" if @registration.eula
    fill_in "Group", with: @registration.group
    fill_in "Name", with: @registration.name
    fill_in "Nickname", with: @registration.nickname
    fill_in "Other", with: @registration.other
    fill_in "Room number", with: @registration.room_number
    fill_in "Tel", with: @registration.tel
    fill_in "University", with: @registration.university
    fill_in "Year", with: @registration.year
    click_on "Update Registration"

    assert_text "Registration was successfully updated"
    click_on "Back"
  end

  test "destroying a Registration" do
    visit registrations_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Registration was successfully destroyed"
  end
end