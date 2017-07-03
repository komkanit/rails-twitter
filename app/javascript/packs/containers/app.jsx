import React, {Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }

  componentDidMount() {
    fetch('/api/tweets/')
      .then(response => response.json())
      .then(response => {
        console.log(response)
        this.setState({tweets: response, loading: false})
      })
  }

  render() {
    const {loading, tweets} = this.state
    if (loading) {
      return <div>Loading...</div>
    }
    return (
    <ul>
      {tweets.map(tweet => (
        <li key={tweet.id}>{tweet.text}</li>
      ))}
    </ul>
    )
  }
}

export default App