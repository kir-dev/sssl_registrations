require "test_helper"

class ApiControllerTest < ActionDispatch::IntegrationTest
  test "should get available" do
    get api_available_url
    assert_response :success
  end

  test "should get open" do
    get api_open_url
    assert_response :success
  end

  test "should get close" do
    get api_close_url
    assert_response :success
  end
end
