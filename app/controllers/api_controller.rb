class ApiController < ActionController::API
  before_action :doorkeeper_authorize!

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_error

  private def current_user
    return if doorkeeper_token.blank?
    @current_user ||= User.find(doorkeeper_token.resource_owner_id)
  end

  concerning :Errors do
    private def api_error(status, message)
      render status: status, json: { error: status, error_description: message }
    end

    private def invalid_resource_error(resource)
      message = resource.errors.full_messages.to_sentence
      api_error :unprocessable_entity, message
    end

    private def record_not_found_error
      api_error :not_found, 'not found'
    end

    private def not_authorized_error
      api_error :unauthorized, 'not authorized'
    end
  end
end
