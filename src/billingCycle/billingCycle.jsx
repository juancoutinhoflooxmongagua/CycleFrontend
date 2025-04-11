import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TabContent from "../common/tab/tabContent";
import { selectTab, showTabs } from "../common/tab/tabActions";

const BillingCycle = () => {
  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <a className="nav-link active" href="#tabList" data-bs-toggle="tab">
            <i className="fa fa-bars me-2"></i>Listar
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#tabCreate" data-bs-toggle="tab">
            <i className="fa fa-plus me-2"></i>Incluir
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#tabUpdate" data-bs-toggle="tab">
            <i className="fa fa-pencil me-2"></i>Alterar
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#tabDelete" data-bs-toggle="tab">
            <i className="fa fa-trash-o me-2"></i>Excluir
          </a>
        </li>
      </ul>

      <div className="tab-content card w-100" style={{ maxWidth: "600px" }}>
        <TabContent id="tabList">
          <div className="card-body text-center">
            Conteúdo da <strong>LISTA</strong>
          </div>
        </TabContent>
        <TabContent id="tabCreate">
          <div className="card-body text-center">
            Conteúdo de <strong>INCLUIR</strong>
          </div>
        </TabContent>
        <TabContent id="tabUpdate">
          <div className="card-body text-center">
            Conteúdo de <strong>ALTERAR</strong>
          </div>
        </TabContent>
        <TabContent id="tabDelete">
          <div className="card-body text-center">
            Conteúdo de <strong>EXCLUIR</strong>
          </div>
        </TabContent>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ tab: state.tab });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ selectTab, showTabs }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle);
