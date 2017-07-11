import React from 'react'

const Tweet = ({ tweet }) => {
  return (
    <div className="card w-50">
      <div className="card-block">
        <h3 className="card-title">Tweet by Someone</h3>
        <p className="card-text">{tweet.text}</p>
        <a href="#" className="btn btn-primary btn-xs">Button</a>
      </div>
    </div>
  )
}

export default Tweet
