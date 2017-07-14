import React from 'react'
import { Link } from 'react-router-dom'

const Tweet = ({ tweet }) => {
  return (
    <div className="row justify-content-center mb-2">
      <div className="col-md-6">
        <div className="card">
          <div className="card-block">
            <span className="text-right float-right">
              <Link to={`/tweets/${tweet.id}`}>View</Link>
            </span>
            <h6 className="card-title">Tweet by Someone</h6>
            <p className="card-text">{tweet.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet
