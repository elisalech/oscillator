require 'test_helper'

class OscillatorsynthsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @oscillatorsynth = oscillatorsynths(:one)
  end

  test "should get index" do
    get oscillatorsynths_url
    assert_response :success
  end

  test "should get new" do
    get new_oscillatorsynth_url
    assert_response :success
  end

  test "should create oscillatorsynth" do
    assert_difference('Oscillatorsynth.count') do
      post oscillatorsynths_url, params: { oscillatorsynth: { detune: @oscillatorsynth.detune, frequency: @oscillatorsynth.frequency, wave: @oscillatorsynth.wave } }
    end

    assert_redirected_to oscillatorsynth_url(Oscillatorsynth.last)
  end

  test "should show oscillatorsynth" do
    get oscillatorsynth_url(@oscillatorsynth)
    assert_response :success
  end

  test "should get edit" do
    get edit_oscillatorsynth_url(@oscillatorsynth)
    assert_response :success
  end

  test "should update oscillatorsynth" do
    patch oscillatorsynth_url(@oscillatorsynth), params: { oscillatorsynth: { detune: @oscillatorsynth.detune, frequency: @oscillatorsynth.frequency, wave: @oscillatorsynth.wave } }
    assert_redirected_to oscillatorsynth_url(@oscillatorsynth)
  end

  test "should destroy oscillatorsynth" do
    assert_difference('Oscillatorsynth.count', -1) do
      delete oscillatorsynth_url(@oscillatorsynth)
    end

    assert_redirected_to oscillatorsynths_url
  end
end
