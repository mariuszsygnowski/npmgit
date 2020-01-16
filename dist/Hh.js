import React from 'react';

const Hh = props => {
  const children = props.children ? React.createElement("span", null, props.children) : false;
  return React.createElement("div", null, React.createElement("h1", null, "CCL"), children);
};

export default Hh;