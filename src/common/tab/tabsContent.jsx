import React from 'react';

export default props => (
  <div id={props.id} className='tab-pane'>
    {props.children}
  </div>
);
