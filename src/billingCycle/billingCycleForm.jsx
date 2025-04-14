import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { create } from './billingCycleActions'; // <- usa a action real

const BillingCycleForm = ({ handleSubmit, create }) => {
  const onSubmit = (values) => {
    create(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Nome</label>
        <Field name="name" component="input" className="form-control" />
      </div>
      <div className="form-group">
        <label>Mês</label>
        <Field name="month" component="input" type="number" className="form-control" />
      </div>
      <div className="form-group">
        <label>Ano</label>
        <Field name="year" component="input" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Salvar</button>
    </form>
  );
};

const formWrapped = reduxForm({
  form: 'billingCycleForm'
})(BillingCycleForm);

export default connect(null, { create })(formWrapped);
