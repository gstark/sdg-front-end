import React, { Component } from 'react'

class CohortListItem extends Component {
  render() {
    return <li>{this.props.cohort.name}</li>
  }
}

export default CohortListItem
