import React, { Component } from 'react'
import ListCohorts from './components/ListCohorts'
import CohortDetails from './components/CohortDetails'
import CreateCohort from './CreateCohort'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Suncoast Developers Guild</h1>
        </div>
        <ListCohorts />
      </div>
    )
  }
}

export default App
