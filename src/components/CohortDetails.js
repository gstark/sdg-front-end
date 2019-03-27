import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Form from 'react-jsonschema-form'

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
        <li className="list-group-item active d-flex justify-content-between align-items-center ">
          Students:
          <span className="badge badge-warning badge-pill">
            {this.state.cohort.student_count} Students
          </span>
        </li>
        {this.state.cohort.students.map(student => (
          <li key={student.id} className="list-group-item">
            {student.name}
          </li>
        ))}
      </ul>
    )
  }

  addStudent = form => {
    axios
      .post(
        `http://localhost:3000/cohorts/${this.state.cohort.id}/students.json`,
        {
          student: form.formData
        }
      )
      .then(response => {
        // Reload the cohort!
        axios
          .get(
            `http://localhost:3000/cohorts/${this.props.match.params.id}.json`
          )
          .then(response => {
            this.setState({ cohort: response.data })
          })
      })
  }

  addStudentForm = () => {
    const formSchema = {
      title: 'Add Student',
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string', title: 'Name', default: '' },
        address: { type: 'string', title: 'Address', default: '' },
        age: { type: 'integer', title: 'Age' },
        email: { type: 'string', title: 'E-mail' }
      }
    }

    return <Form schema={formSchema} onSubmit={this.addStudent} />
  }

  render() {
    return (
      <>
        <ul className="list-group mb-3">
          <li className="list-group-item active">{this.state.cohort.name}</li>
          <li className="list-group-item">
            Start: {this.state.cohort.start_date}
          </li>
          <li className="list-group-item">End: {this.state.cohort.end_date}</li>
        </ul>
        {this.renderStudents()}
        {this.addStudentForm()}
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
