import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Tabs from '../common/tab/tabs';
import TabsHeader from '../common/tab/tabsHeader';
import TabsContent from '../common/tab/tabsContent';
import TabHeader from '../common/tab/tabHeader';
import TabContent from '../common/tab/tabContent';
import { init, create, update, remove } from './billingCycleActions';

import List from './billingCycleList';
import Form from './billingCycleForm';

// Importando o arquivo CSS
import './BillingCss.css';

class BillingCycle extends Component {
    componentWillMount() {
        this.props.init();
    }

    render() {
        return (
            <div className="container mt-4">
                <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
                <Content> 
                    <Tabs> 
                        <TabsHeader> 
                            <TabHeader label="Listar" icon="bars" target="tabList" />
                            <TabHeader label="Incluir" icon="plus" target="tabCreate" />
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
                        </TabsHeader> 
                        <TabsContent> 
                            <TabContent id="tabList">
                                <div className="table-responsive">
                                    <List />
                                </div>
                            </TabContent>
                            <TabContent id="tabCreate">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Incluir Ciclo de Pagamento</h4>
                                    </div>
                                    <div className="card-body">
                                        <Form onSubmit={this.props.create} submitLabel="Incluir" submitClass="btn btn-primary" />
                                    </div>
                                </div>
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Alterar Ciclo de Pagamento</h4>
                                    </div>
                                    <div className="card-body">
                                        <Form onSubmit={this.props.update} submitLabel="Alterar" submitClass="btn btn-info" />
                                    </div>
                                </div>
                            </TabContent>
                            <TabContent id="tabDelete">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Excluir Ciclo de Pagamento</h4>
                                    </div>
                                    <div className="card-body">
                                        <Form onSubmit={this.props.remove} readOnly={true} submitLabel="Excluir" submitClass="btn btn-danger" />
                                    </div>
                                </div>
                            </TabContent>
                        </TabsContent> 
                    </Tabs> 
                </Content> 
            </div> 
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    init, create, update, remove
}, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);
