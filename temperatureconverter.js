function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeincel = this.handleChangeincel.bind(this);
     this.handleChangeinfahren = this.handleChangeinfahren.bind(this);
    this.state = {temperature: '',fahren:''};
  }

  handleChangeincel(e) {
    this.setState({temperature: e.target.value,fahren:e.target.value*2});
  }
   handleChangeinfahren(e) {
    this.setState({fahren: e.target.value,temperature:e.target.value/2});
  }

  render() {
    const temperature = this.state.temperature;
    const fahren=this.state.fahren;
    return (
      <div>
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChangeincel} />
         <input
          value={fahren}
          onChange={this.handleChangeinfahren} />
        
      </fieldset>
      <BoilingVerdict
          celsius={parseFloat(temperature)} />
        </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
