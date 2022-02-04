require "test_helper"

class SessionControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get session_index_url
    assert_response :success
  end

  test "should get callback" do
    get session_callback_url
    assert_response :success
  end

  test "should get destroy" do
    get session_destroy_url
    assert_response :success
  end
end
