import React, { Component } from 'react'
import ListCohorts from './components/ListCohorts'
import CohortDetails from './components/CohortDetails'

class App extends Component {
  render() {
    return <CohortDetails id={2} />
  }
}

export default App
