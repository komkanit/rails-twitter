import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home'
import Tweet from './tweet'

const app = () => (
  <Router>
    <div>
      <Route path="/tweets/:id" component={Tweet} />
      <Route exact path="/" component={Home} />
    </div>
  </Router>
)

export default app
