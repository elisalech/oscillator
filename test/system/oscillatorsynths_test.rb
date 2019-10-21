require "application_system_test_case"

class OscillatorsynthsTest < ApplicationSystemTestCase
  setup do
    @oscillatorsynth = oscillatorsynths(:one)
  end

  test "visiting the index" do
    visit oscillatorsynths_url
    assert_selector "h1", text: "Oscillatorsynths"
  end

  test "creating a Oscillatorsynth" do
    visit oscillatorsynths_url
    click_on "New Oscillatorsynth"

    fill_in "Detune", with: @oscillatorsynth.detune
    fill_in "Frequency", with: @oscillatorsynth.frequency
    fill_in "Wave", with: @oscillatorsynth.wave
    click_on "Create Oscillatorsynth"

    assert_text "Oscillatorsynth was successfully created"
    click_on "Back"
  end

  test "updating a Oscillatorsynth" do
    visit oscillatorsynths_url
    click_on "Edit", match: :first

    fill_in "Detune", with: @oscillatorsynth.detune
    fill_in "Frequency", with: @oscillatorsynth.frequency
    fill_in "Wave", with: @oscillatorsynth.wave
    click_on "Update Oscillatorsynth"

    assert_text "Oscillatorsynth was successfully updated"
    click_on "Back"
  end

  test "destroying a Oscillatorsynth" do
    visit oscillatorsynths_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Oscillatorsynth was successfully destroyed"
  end
end
