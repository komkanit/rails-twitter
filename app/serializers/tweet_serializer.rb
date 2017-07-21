class TweetSerializer < ActiveModel::Serializer
  attributes :id, :text, :tweet_at

  def tweet_at
    I18n.l(object.created_at, format: :long)
  end
end
