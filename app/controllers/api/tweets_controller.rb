module Api
  class TweetsController < ApiController
    def index
      tweets = Tweet.all
      render json: Tweet.all
    end

    def show
      tweet = Tweet.find(params[:id])
      render json: tweet
    end

    def create
      tweet = Tweet.new(tweet_params)
      if tweet.save
        render json: tweet, status: :created
      else
        invalid_resource_error(tweet)
      end
    end

    private

    def tweet_params
      params.permit(:text)
    end
  end
end
