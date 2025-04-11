import React, { Component } from "react";
import ValueBox from "../widget/valueBox";

class Dashboard extends Component {
  render() {
    return (
      <div className="container py-5">
        <h2 className="text-white mb-4">Dashboard</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <ValueBox
              bgColor="bg-success"
              icon="fas fa-university"
              value="R$ 10.000"
              text="Total de Créditos"
            />
          </div>
          <div className="col-md-4">
            <ValueBox
              bgColor="bg-danger"
              icon="fas fa-credit-card"
              value="R$ 5.000"
              text="Total de Débitos"
            />
          </div>
          <div className="col-md-4">
            <ValueBox
              bgColor="bg-primary"
              icon="fas fa-money-bill-wave"
              value="R$ 5.000"
              text="Valor Consolidado"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
