  function calculateWinner(squares) {
     
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] ===squares[b] && squares[a] === squares[c]) {
      alert('winner is' +squares[a]);
    }
  }
    return null;
  
}
class Square extends React.Component {
  render() {
    return (
      <button className="square"   onClick={() => this.props.onClick()} >
  {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  
  constructor(props)
  {
    super(props);
    this.state={status:'0',squares: Array(9).fill(null)};
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]}  onClick={() => this.handleClick(i)}  />;
  }
  
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.status;
    this.setState({squares: squares}, () => {
      if(this.state.status=='0')
      {
        this.setState({status:'1'});
      }
    else
      {
          this.setState({status:'0'});
      }
    
    calculateWinner(this.state.squares);
    });
    
    
    
    
  }


  render() {
    const status = this.state.status;
    const squares=this.state.squares;
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}



ReactDOM.render(
  <Board />,
  document.getElementById('root')
);