module Api
  class TweetsController < ApiController
    def index
      tweets = current_user.tweets
      render json: tweets
    end

    def show
      tweet = current_user.tweets.find(params[:id])
      render json: tweet
    end

    def create
      tweet = current_user.tweets.build(tweet_params)
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
