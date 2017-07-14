import React, { Component } from 'react'

class Tweet extends Component {
  render() {
    return <h1>Hello World {this.props.match.params.id}</h1>
  }
}

export default Tweet
