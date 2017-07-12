import React, { Component } from 'react'
import RecentTweets from '../components/recent_tweets'
import TweetForm from '../components/tweet_form'
class App extends Component {
  state = { tweetMessage: '', formError: false, loading: true, tweets: [] }

  componentDidMount = () => {
    fetch('/api/tweets/')
      .then(response => response.json())
      .then(response => { this.setState({ tweets: response, loading: false }) })
  }

  onInputChange = (event) => {
    this.setState({ tweetMessage: event.target.value })
  }

  onTweet = (event) => {
    fetch(
      '/api/tweets/',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: this.state.tweetMessage })
      }
    )
      .then(response => response.json())
      .then(response => {
        if (response.error === undefined) {
          let { tweets } = this.state
          tweets.push(response)
          this.setState({ 
            tweetMessage: '', 
            formError: false,
            tweets: tweets.reverse() })
        } else {
          this.setState({formError: true}) 
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { loading, tweets } = this.state
    return (
      <div className="container">
        <TweetForm
          onInputChange={this.onInputChange}
          onTweet={this.onTweet}
          tweetMessage={this.state.tweetMessage}
          formError={this.state.formError}
        />
        <RecentTweets loading={loading} tweets={tweets} />
      </div>
    )
  }
}

export default App
