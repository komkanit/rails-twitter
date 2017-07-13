import React, { Component } from 'react'
import Tweet from './recent_tweets/tweet'
import Loading from './shared/loading'

class RecentTweets extends Component {
  render() {
    const { loading, tweets } = this.props
    if (loading) return <Loading />
    return (
      <div>
        {tweets.map(tweet => (<Tweet key={tweet.id} tweet={tweet} />))}
      </div>
    )
  }
}

export default RecentTweets;
