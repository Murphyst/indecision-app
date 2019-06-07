const appRoot = document.getElementById("app");

class ForExample extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Example />
        <Example />
      </React.Fragment>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <h1>Example</h1>
      </div>
    );
  }
}

ReactDOM.render(<ForExample />, appRoot);
