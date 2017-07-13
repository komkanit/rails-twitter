import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TweetForm extends Component {
  render() {
    return (
      <div className="row justify-content-center mb-3">
        <div className="col-md-6">
          <div className="card">
            <div className="card-block">
              <div className={`input-group input-group-lg ${this.props.formError ? 'has-danger' : ''}`}>
                <input
                  type="text"
                  value={this.props.tweetMessage}
                  className={`form-control ${this.props.formError ? 'form-control-danger' : ''}`}
                  placeholder="What's Happening?"
                  onChange={this.props.onInputChange}
                />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-primary" onClick={this.props.onTweet}>Tweet</button>
                </span>
              </div>
            </div>
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
