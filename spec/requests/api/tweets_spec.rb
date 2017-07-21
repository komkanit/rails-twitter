require 'rails_helper'

RSpec.describe Api::TweetsController, type: :request, api: true do
  before { create_list(:tweet, 5) }

  describe 'GET #index' do
    before { get api_tweets_path }

    it { expect(response).to have_http_status(:ok) }
    it { expect(response).to match_response_schema(:tweets) }
    it { expect(payload.size).to eq(5) }
  end
end
