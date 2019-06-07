var addRoot = document.getElementById("app");
/*
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();  
};
const renderCounterApp = () => {
    const template = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} >+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(template, addRoot);
};
renderCounterApp();

*/

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.minusOne = this.minusOne.bind(this);
    this.addOne = this.addOne.bind(this);
    this.reset = this.reset.bind(this);
  }
  componentDidMount() {
    const countString = localStorage.getItem("count");
    const count = parseInt(countString, 10);
    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }
  addOne() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }
  minusOne() {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }
  reset() {
    this.setState(prevState => ({ count: (prevState = 0) }));
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<CounterApp />, addRoot);
