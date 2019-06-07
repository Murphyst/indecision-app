var addRoot = document.getElementById("app");

// let visibilty = false;

// const toggleVisibility = () => {
//   visibilty = !visibilty;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibilty ? "Hide Details" : "Show Details"}
//       </button>
//       {visibilty && (
//         <div>
//           <p>Hey, these are sone details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(jsx, addRoot);
// };

// render();

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visibilty: false };
    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
  }
  handleVisibilityToggle() {
    this.setState(prevState => ({
      visibilty: !prevState.visibilty
    }));
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibilityToggle}>
          {this.state.visibilty ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibilty && (
          <div>
            <p>Hey, these are sone details you can now see!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, addRoot);
