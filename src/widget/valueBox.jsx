import React from 'react'
import Grid from '../layout/grid'

const ValueBox = ({ bgColor, icon, value, text }) => (
  <div className={`card text-white ${bgColor} shadow`} style={{ borderRadius: '1rem' }}>
    <div className="card-body d-flex align-items-center">
      <i className={`${icon} fa-3x me-4`}></i>
      <div>
        <h6 className="mb-1">{text}</h6>
        <h4 className="fw-bold">{value}</h4>
      </div>
    </div>
  </div>
);

export default ValueBox;
