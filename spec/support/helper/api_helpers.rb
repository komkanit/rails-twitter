module ApiHelpers
  #
  # Return parsed JSON or nil (if response is no_content)
  #
  def payload
    return if response.no_content?
    JSON.parse(response.body)
  end
end

# These Helpers are available in all tests that have api: true set.
RSpec.configure do |config|
  config.include ApiHelpers, api: true
end
