import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './billingCycleActions'

class BillingCycleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showActions: false,
      selectedItem: null
    }
  }

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
        <td>
          <button 
            className="btn btn-info" 
            onClick={() => this.setState({ showActions: !this.state.showActions, selectedItem: item })}
          >
            Ações
          </button>
          {this.state.showActions && this.state.selectedItem === item && (
            <div>
              <button className="btn btn-warning mt-2">Editar</button>
              <button className="btn btn-danger mt-2 ms-2">Excluir</button>
            </div>
          )}
        </td>
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
              <th>Ações</th>
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
