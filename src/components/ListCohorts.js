import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
        <div className="list-group">
          {this.state.cohorts.map(cohort => (
            <CohortListItem key={cohort.id} cohort={cohort} />
          ))}
        </div>

        <Link className="btn btn-primary" to="/cohorts/new">
          Create
        </Link>
      </>
    )
  }
}

export default ListCohorts
