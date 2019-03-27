import React, { Component } from 'react'
import axios from 'axios'

class CohortDetails extends Component {
  state = {
    cohort: {}
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/cohorts/${this.props.match.params.id}`)
      .then(response => {
        console.log(response.data)
        this.setState({ cohort: response.data })
      })
    // use this.props.id to FETCH the cohort
  }

  deleteCohort = event => {
    console.log('Deleting cohort', this.state.cohort.id)
    axios
      .delete(`http://localhost:3000/cohorts/${this.state.cohort.id}`)
      .then(response => {
        // Because we are a routed component
        // we have this.props.history
        //
        // And we can use that to redirect us home!
        this.props.history.push('/')
      })
  }

  render() {
    return (
      <>
        <ul className="list-group">
          <li className="list-group-item active">{this.state.cohort.name}</li>
          <li className="list-group-item">
            Start: {this.state.cohort.start_date}
          </li>
          <li className="list-group-item">End: {this.state.cohort.end_date}</li>
          <li className="list-group-item">Number of students: 14</li>
        </ul>
        <button className="btn btn-danger" onClick={this.deleteCohort}>
          Delete
        </button>
      </>
    )
  }
}

export default CohortDetails
