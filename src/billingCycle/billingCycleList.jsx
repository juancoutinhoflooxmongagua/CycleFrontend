import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './billingCycleActions'

class BillingCycleList extends Component {
  componentDidMount() {
    // Chama getList para obter a lista de ciclos de cobrança
    this.props.getList()
  }

  renderRows() {
    // Pegue a lista de ciclos de cobrança do estado
    const list = this.props.billingCycle.list || []
    return list.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.month}</td>
        <td>{item.year}</td>
        <td>
          <button 
            className="btn btn-warning me-2" 
            onClick={() => this.props.showUpdate(item)} // Passa o item para a ação de edição
          >
            Editar
          </button>
          <button 
            className="btn btn-danger" 
            onClick={() => this.props.showDelete(item)} // Passa o item para a ação de exclusão
          >
            Excluir
          </button>
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

// Mapeamento do estado para as props
const mapStateToProps = state => ({
  billingCycle: state.billingCycle
})

// Mapeamento das ações para as props
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getList, showUpdate, showDelete }, dispatch)

// Conecta o componente ao Redux
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)
