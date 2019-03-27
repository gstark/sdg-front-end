import React, { Component } from 'react'
import axios from 'axios'
import CohortListItem from './CohortListItem'

class ListCohorts extends Component {
  state = {
    cohorts: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/cohorts').then(response => {
      console.log(response.data)
      this.setState({ cohorts: response.data })
    })
  }

  render() {
    return (
      <>
        <ul className="list-group">
          {this.state.cohorts.map(cohort => (
            <CohortListItem key={cohort.id} cohort={cohort} />
          ))}
        </ul>
      </>
    )
  }
}

export default ListCohorts
