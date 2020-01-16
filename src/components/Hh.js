import React from 'react';

const Hh = props => {
  const children = props.children ? <span>{props.children}</span> : false;
  return (
    <div>
      <h1>CCL</h1>
      {children}
    </div>
  );
};
export default Hh;
