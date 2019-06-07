import React from "react";
import Option from "./Option";

export default props => {
  return (
    <div>
      <button onClick={props.dltBtn}>Remove All</button>
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
      {props.options.length === 0 && (
        <p>Please add an option to get started!</p>
      )}
    </div>
  );
};
