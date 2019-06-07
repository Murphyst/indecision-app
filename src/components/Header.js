import React from "react";

export default props => {
  return (
    <div>
      <h1 className="headerName">{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  );
};
