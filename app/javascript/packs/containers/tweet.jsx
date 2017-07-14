import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Tweet extends Component {
  state = { tweet: {} }

  componentDidMount() {
    fetch(`/api/tweets/${this.props.match.params.id}`)
      .then(response => response.json())
      .then((response) => { this.setState({ tweet: response }) })
  }

  render() {
    return (
      <div>
        <h1>{this.state.tweet.text}</h1>
        <small><Link to="/">Back</Link></small>
      </div>
    )
  }
}

export default Tweet
