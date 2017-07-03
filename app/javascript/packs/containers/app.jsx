import React, {Component} from 'react'
import Tweet from '../components/tweet'
import Loading from '../components/loading'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {loading: true}
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
    if (loading) return <Loading/>

    return (
      <ul>
        {tweets.map(tweet => (<Tweet tweet={tweet}/>))}
      </ul>
    )
  }
}

export default App