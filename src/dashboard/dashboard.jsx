import React, { Component } from "react";
import ValueBox from "../widget/valueBox";

class Dashboard extends Component {
    render() {
      return (
        <div>
      
          <ValueBox
            cols='12 4'
            color='green'
            icon='bank'
            value='R$ 10'
            text='Total de Créditos'
          />
          <ValueBox
            cols='12 4'
            color='red'
            icon='credit-card'
            value='R$ 10'
            text='Total de Débitos'
          />
          <ValueBox
            cols='12 4'
            color='blue'
            icon='money'
            value='R$ 0'
            text='Valor Consolidado'
          />
        </div>
      );
    }
  }
  
  export default Dashboard;