import React, { Component } from 'react'
import axios from 'axios'

class CohortDetails extends Component {
  state = {
    cohort: {}
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/cohorts/${this.props.id}`)
      .then(response => {
        console.log(response.data)
        this.setState({ cohort: response.data })
      })
    // use this.props.id to FETCH the cohort
  }

  render() {
    return (
      <ul>
        <li>{this.state.cohort.name}</li>
        <li>{this.state.cohort.start_date}</li>
        <li>{this.state.cohort.end_date}</li>
      </ul>
    )
  }
}

export default CohortDetails
