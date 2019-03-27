import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ListCohorts from './components/ListCohorts'
import CohortDetails from './components/CohortDetails'
import CreateCohort from './components/CreateCohort'
import EditCohort from './components/EditCohort'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Suncoast Developers Guild</h1>
        </div>
        <Router>
          <Switch>
            <Route exact path="/" component={ListCohorts} />
            <Route exact path="/cohorts/new" component={CreateCohort} />
            <Route exact path="/cohorts/:id" component={CohortDetails} />
            <Route exact path="/cohorts/edit/:id/" component={EditCohort} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
