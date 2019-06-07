import React from "react";

export default class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    // this.handleAddOptions = this.handleAddOptions.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOptions = e => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    const error = this.props.handleAddOptions(option);

    this.setState(() => {
      return { error };
    });

    document.getElementById("formInput").value = "";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOptions}>
          <input type="text" name="option" id="formInput" />
          <button>Add Option</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}
