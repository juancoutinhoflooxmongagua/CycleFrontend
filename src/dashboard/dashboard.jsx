import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'

class Dashboard extends Component {
  componentWillMount() {
    this.props.getSummary()
  }

  render() {
    const credit = (this.props.summary && this.props.summary.credit) || 0
    const debt = (this.props.summary && this.props.summary.debt) || 0
    const consolidated = credit - debt

    return (
        <div className="container mt-5">
          <h1 className="text-primary">Dashboard</h1>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card text-white bg-success mb-3">
                <div className="card-header">Créditos</div>
                <div className="card-body">
                  <h5 className="card-title">R$ {credit}</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white bg-danger mb-3">
                <div className="card-header">Débitos</div>
                <div className="card-body">
                  <h5 className="card-title">R$ {debt}</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white bg-info mb-3">
                <div className="card-header">Consolidado</div>
                <div className="card-body">
                  <h5 className="card-title">R$ {consolidated}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      
  }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
