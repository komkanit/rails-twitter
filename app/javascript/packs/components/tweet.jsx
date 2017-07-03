import React from 'react'

const Tweet = ({tweet}) => (<li key={tweet.id}>{tweet.id} - {tweet.text}</li>)

export default Tweet