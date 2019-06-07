class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer.";
    const options = ["item 1", "item 2", "item 3"];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOptions />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return <button>What should I do?</button>;
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    this.props.options = [];
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}
class AddOptions extends React.Component {
  handleAddOptions(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) alert(option);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOptions}>
          <input type="text" name="option" />
          <button>Add Options</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

/*
const onFormSubmit = (e)=>{
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option)
        e.target.elements.option.value = '';
        addOptions();
    }
};

const removeAll = () => {
    app.options=[]
    addOptions();
};

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    app.span = true;
    return option;
};

let visibility = false;

const showLength = () => {
    visibility = !visibility;
    addOptions();
}

const removeList = () => {
    
    addOptions()
}
const addOptions = function(){
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'} </p>
            <button onClick = {showLength}>{visibility ? 'Hide Length' : 'Show Length'}</button>
            {visibility && (
                <p>{app.options.length}</p>
            )}
            <button disabled = {app.options.length < 1}onClick = {removeAll}>Remove All</button>
            <button disabled = {app.options.length <= 1} onClick = {onMakeDecision}>What Should I Do?</button>
            
            <ol>
                {
                app.options.map((n)=>   <div key={n}>
                                                <li> {n}</li>
                                                <button onClick = {removeList}>Remove</button>
                                        </div> 
                                        )
                }
            </ol>
    
            <form onSubmit = {onFormSubmit}>
                <input type='text' name="option"/>
                <button>Add Options</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

addOptions();
*/
