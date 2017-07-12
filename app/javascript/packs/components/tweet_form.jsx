import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TweetForm extends Component {
  tweetMessageForm() {
    return (
      <div className="input-group input-group-lg">
        <input
          type="text"
          value={this.props.tweetMessage}
          className={`form-control ${this.props.formError ? 'form-control-danger' : ''}`}
          placeholder="What's Happening?"
          onChange={this.props.onInputChange}
        />
        {
          this.props.formError &&
          <div className="form-control-feedback">
            Tweet message can't be blank.
          </div>
        }
        <span className="input-group-btn">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.props.onTweet}
          >
            Tweet
                  </button>
        </span>
      </div>
    )
  }

  render() {
    return (
      <div className="row justify-content-center mb-3">
        <div className="col-6">
          <div className="card">
            <div className="card-block">{this.tweetMessageForm()}</div>
          </div>
        </div>
      </div>
    )
  }
}

TweetForm.propTypes = {
  tweetMessage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onTweet: PropTypes.func.isRequired
}

export default TweetForm
