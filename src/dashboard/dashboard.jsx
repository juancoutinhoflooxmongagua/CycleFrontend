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
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-dark">Dashboard Financeiro</h1>
          <p className="text-muted fs-5">Visão geral de créditos e débitos</p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card  border border-success shadow h-100">
              <div className="card-body text-center bg-light rounded">
                <h5 className="text-success fw-bold mb-2">Créditos</h5>
                <i className="bi bi-arrow-down-circle-fill fs-1 text-success mb-3"></i>
                <h3 className="fw-bold">R$ {credit.toFixed(2)}</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border border-danger shadow h-100">
              <div className="card-body text-center bg-light rounded">
                <h5 className="text-danger fw-bold mb-2">Débitos</h5>
                <i className="bi bi-arrow-up-circle-fill fs-1 text-danger mb-3"></i>
                <h3 className="fw-bold">R$ {debt.toFixed(2)}</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border border-primary shadow h-100">
              <div className="card-body text-center bg-light rounded">
                <h5 className="text-info fw-bold mb-2">Consolidado</h5>
                <i className="bi bi-calculator-fill fs-1 text-info mb-3"></i>
                <h3 className="fw-bold">R$ {consolidated.toFixed(2)}</h3>
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
