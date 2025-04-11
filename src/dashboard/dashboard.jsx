import React, { Component } from "react";
import ValueBox from "../widget/valueBox";
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { credit, debt } = this.props.summary;
    const consolidated = credit - debt;

    return (
      <div className="container py-5">
        <h2 className="text-white mb-4">Dashboard</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <ValueBox
              bgColor="bg-success"
              icon="fas fa-university"
              value={`R$ ${credit}`}
              text="Total de Créditos"
            />
          </div>
          <div className="col-md-4">
            <ValueBox
              bgColor="bg-danger"
              icon="fas fa-credit-card"
              value={`R$ ${debt}`}
              text="Total de Débitos"
            />
          </div>
          <div className="col-md-4">
            <ValueBox
              bgColor="bg-primary"
              icon="fas fa-money-bill-wave"
              value={`R$ ${consolidated}`}
              text="Valor Consolidado"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary });

export default connect(mapStateToProps)(Dashboard);
