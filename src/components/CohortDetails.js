import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class CohortDetails extends Component {
  state = {
    cohort: {
      students: []
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/cohorts/${this.props.match.params.id}.json`)
      .then(response => {
        console.log(response.data)
        this.setState({ cohort: response.data })
      })
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

  renderStudents = () => {
    if (this.state.cohort.students.length === 0) {
      return <></>
    }

    return (
      <ul className="list-group mb-3">
        <li className="list-group-item active">Students:</li>
        {this.state.cohort.students.map(student => (
          <li key={student.id} className="list-group-item">
            {student.name}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between align-items-center active">
            {this.state.cohort.name}
            <span className="badge badge-warning badge-pill">
              {this.state.cohort.student_count} Students
            </span>
          </li>
          <li className="list-group-item">
            Start: {this.state.cohort.start_date}
          </li>
          <li className="list-group-item">End: {this.state.cohort.end_date}</li>
        </ul>
        {this.renderStudents()}
        <div className="mb-3">
          <Link
            to={`/cohorts/edit/${this.state.cohort.id}`}
            className="btn btn-primary mr-2"
          >
            Edit
          </Link>
          <button className="btn btn-danger" onClick={this.deleteCohort}>
            Delete
          </button>
        </div>
      </>
    )
  }
}

export default CohortDetails
