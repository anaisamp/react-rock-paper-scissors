import React, { Component } from 'react';
import Move from './components/Move';
import ResultLabel from './components/ResultLabel';
import './App.css';

export const winnerMoves = {
	'Rock': {
    wins: ['Scissors'],
    icon: '👊',
	},
  'Paper': {
    wins: ['Rock'],
    icon: '✋️',
	},
	'Scissors': {
    wins: ['Paper'],
    icon: '✌️',
	},
};

const possibleMoves = Object.keys(winnerMoves);

export const getRandomNumber = () => {
  return Math.floor(Math.random() * possibleMoves.length + 1);
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userMove: null,
        computerMove: null,
        winner: null,
        userWins: 0,
        computerWins: 0,
    };
  }

  getRandomMove = () => {
    const randomNumber = getRandomNumber();
    let computerRandomMove = {
      text: '',
      icon: '',
    };

    switch(randomNumber) {
        case 1:
          computerRandomMove = {
            text: 'Rock',
            icon: winnerMoves['Rock'].icon,
          }
          break;
        case 2:
          computerRandomMove = {
            text: 'Paper',
            icon: winnerMoves['Paper'].icon,
          }
          break;
        default:
          computerRandomMove = {
            text: 'Scissors',
            icon: winnerMoves['Scissors'].icon,
          }
          break;
    }
    return computerRandomMove;
  };

  getWinner = (userMove, computerMove) => {
    if (userMove === computerMove) return 0;
    return winnerMoves[userMove].wins.some(wins => wins === computerMove) ? 1 : 2;
  }

  getUserMoveAndUpdateState = (userMoveText) => {
    const nextComputerMove = this.getRandomMove();
    const nextUserMove = {
      text: userMoveText,
      icon: winnerMoves[`${userMoveText}`].icon,
    }
    const nextWinner = this.getWinner(nextUserMove.text, nextComputerMove.text);

    this.setState((prevState) => {
      return {
        userMove: nextUserMove,
        computerMove: nextComputerMove,
        winner: nextWinner,
        userWins: (nextWinner === 1) ? prevState.userWins + 1 : prevState.userWins,
        computerWins: (nextWinner === 2) ? prevState.computerWins + 1 : prevState.computerWins,
      }
    });
  }

  render() {
    return (
        <div className="wrapper">
          <aside className="aside aside-1">
            <h2>You</h2>
            <p>{this.state.userWins} point(s)</p>
          </aside>
          <article className="main">
            <div className="movesWrapper">
              <Move selectedOption = { this.state.userMove || '' } />
                <span>vs.</span>
              <Move selectedOption = { this.state.computerMove || '' } />
            </div>
            <ResultLabel winner={ this.state.winner } />
          </article>
          <aside className="aside aside-2">
            <h2>Computer</h2>
            <p> {this.state.computerWins} point(s)</p>
          </aside>
          <footer className="footer">
          { 
              possibleMoves.map((move) => {
                return (
                  <button className="button" key={move} onClick={ () => this.getUserMoveAndUpdateState(move) }>
                    <span className="icon" role="img" aria-label={ move }> { winnerMoves[move].icon }</span>
                  </button>);
              })
            }
          </footer>
        </div>
    );
  }
}

export default App;
