import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TweetForm extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <input
            type="text"
            value={this.props.tweetMessage}
            className="form-control"
            onChange={this.props.onInputChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.props.onTweet}
        >
          Submit
        </button>
      </form>
    )
  }
}

TweetForm.propTypes = {
  tweetMessage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onTweet: PropTypes.func.isRequired,
}

export default TweetForm
