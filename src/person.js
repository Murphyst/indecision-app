import React from "react";
import ReactDOM from "react-dom";

class Adult extends React.Component {
  render() {
    return <h1>Deneme</h1>;
  }
}

const canDrink = age => age >= 21;

export default age => age > 65;

export { Adult, canDrink };
