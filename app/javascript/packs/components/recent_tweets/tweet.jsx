import React from 'react'

const Tweet = ({ tweet }) => {
  return (
    <div className="row justify-content-center mb-2">
      <div className="col-md-6">
        <div className="card">
          <div className="card-block">
            <h6 className="card-title">Tweet by Someone</h6>
            <p className="card-text">{tweet.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet
