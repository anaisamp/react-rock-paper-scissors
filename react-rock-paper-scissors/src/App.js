import React, { Component } from 'react';
import RockPaperScissors from './components/RockPaperScissors';
import Move from './components/Move';

import './App.css';

const winnerMoves = {
	'Rock': {
		wins: ['Scissors'],
	},
  'Paper': {
		wins: ['Rock'],
	},
	'Scissors': {
		wins: ['Paper'],
	},
};

const possibleMoves = Object.keys(winnerMoves);

export const getRandomNumber = () => {
  return Math.floor(Math.random() * possibleMoves.length + 1);
};

export const getWinner = (userMove, computerMove) => {
  if (userMove === computerMove) return 0;
  const n = winnerMoves[userMove].wins.some(wins => wins === computerMove) ? 1 : 2;
  return n;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userMove: null,
        computerMove: null,
        winner: null
    };
}

  getRandomMove = () => {
    const randomOption = getRandomNumber();
    let computerOption = {
      text: '',
      icon: '',
    };
    switch(randomOption) {
        case 1:
          computerOption = {
            text: 'Rock',
            icon: '👊',
          }
          break;
        case 2:
          computerOption = {
            text: 'Paper',
            icon: '✋️',
          }
          break;
        default:
          computerOption = {
            text: 'Scissors',
            icon: '✌️',
          }
          break;
    }
    return computerOption;
  };

  getUserMove = (option) => {
    const icons = {
      'Rock': '👊',
      'Paper':'✋️',
      'Scissors': '✌️',
    }
    const nextComputerMove = this.getRandomMove();
  
    this.setState({
      userMove: {
        text: option,
        icon: icons[`${option}`],
      },
      computerMove: nextComputerMove,
      winner: getWinner(option, nextComputerMove.text)
  });
  console.log(this.state);
  }

  getWinnerLabel = () => {
    let winnerLabel = "";

    if(this.state.winner === 0){
    winnerLabel = (<p className="black">Tied</p>);
    }
    else if(this.state.winner === 1) {
    winnerLabel = (<p className="green">You won!</p>);
    }
    else if(this.state.winner === 2) {
    winnerLabel = (<p className="red">You lost!</p>);
    }
    return winnerLabel;
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <aside className="aside aside-1">
            <h2>You</h2>
            <p>0 points</p>
            <button className="button" onClick={ () => this.getUserMove('Rock') }>
                <span className="icon" role="img" aria-label="Rock">👊</span>
            </button>
            <button className="button" onClick={ () => this.getUserMove('Paper') }>
                <span className="icon" role="img" aria-label="Paper">✋️</span>
            </button>
            <button className="button" onClick={ () => this.getUserMove('Scissors') }>
                <span className="icon" role="img" aria-label="Scissors">✌️</span>
            </button>
          </aside>
          <article className="main">
            <Move selectedOption = { this.state.userMove || '?' } />
              <span>vs.</span>
            <Move selectedOption = { this.state.computerMove || '?' } />
            { this.getWinnerLabel() }
          </article>
          <aside className="aside aside-2">
            <h2>Computer</h2>
            <p>0 points</p>
            <RockPaperScissors />
          </aside>
        </div>
      </div>
    );
  }
}

export default App;
