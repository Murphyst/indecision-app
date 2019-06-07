const appRoot = document.getElementById("app");

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: [] };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.log("Something has happened even if nothing has happened");
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("ComponentWillUnmount!");
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState(prevState => {
      return {
        options: prevState.options.filter(option => optionToRemove !== option)
      };
    });
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOptions(option) {
    if (!option) {
      return "Enter valid value to add item!";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists!";
    }
    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          dltBtn={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOptions handleAddOptions={this.handleAddOptions} />
      </div>
    );
  }
}

const Header = props => {
  return (
    <div>
      <h1 className="headerName">{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  );
};

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What Should I Do?
      </button>
    </div>
  );
};

const Options = props => {
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

const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOptions(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    const error = this.props.handleAddOptions(option);

    this.setState(() => {
      return { error };
    });

    document.getElementById("formInput").value = "";
  }

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

ReactDOM.render(<IndecisionApp />, appRoot);

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
