import React from 'react'
import { reduxForm, Field } from 'redux-form'

const BillingCycleForm = (props) => {
  const { handleSubmit } = props

  const onSubmit = (values) => {
    console.log('Form values:', values)
  }

  return (
    <form role="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="box-body">
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
      </div>
      <div className="box-footer">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)
