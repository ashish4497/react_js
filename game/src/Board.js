import React, { Component, Fragment } from 'react';
import Square from './Square';


export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      history: [],
      xIsNext: true
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    this.state.history.push(this.state.squares);
    squares[i] = (this.state.xIsNext ? 'X' : 'O');
    this.setState({
      squares,
      xIsNext: !this.state.xIsNext
    })
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />;

  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ];
    for (var i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  previous = () => {
    this.setState({
      squares:this.state.history.pop()|| this.state.history,
      xIsNext:!this.state.xIsNext
    })
  }


  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = alert('WINNER :' + winner)
      this.setState({squares:this.state.squares.splice()})
    } 
    else {
      status = 'Next player:' + (this.state.xIsNext ? 'X' : 'O');
    }


    // const back = this.previous(this.state.history);
    // if (back) {
    //   status = 'Previous olayer:' + (this.state.xIsNext ? 'o' : 'x');
    // } 

    return (
      <Fragment>
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
        <div>
          <button className="move-back" onClick = {this.previous}>undo</button>
        </div>
      </Fragment>
    )
  }
}