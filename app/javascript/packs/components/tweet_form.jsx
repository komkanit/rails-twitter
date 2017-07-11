import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TweetForm extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.tweetMessage}
          className="form-control"
          onChange={this.props.onInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.props.onTweet}
        >
          Submit
        </button>
      </div>
    )
  }
}

TweetForm.propTypes = {
  tweetMessage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onTweet: PropTypes.func.isRequired,
}

export default TweetForm
