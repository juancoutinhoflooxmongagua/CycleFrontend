import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './billingCycleActions'

class BillingCycleList extends Component {
  componentDidMount() {
    this.props.getList()
  }

  renderRows() {
    const list = this.props.billingCycle.list || []
    return list.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.month}</td>
        <td>{item.year}</td>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  billingCycle: state.billingCycle
})  

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)
