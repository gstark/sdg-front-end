import React, { Component } from 'react'

class CohortListItem extends Component {
  render() {
    return <li className="list-group-item">{this.props.cohort.name}</li>
  }
}

export default CohortListItem
