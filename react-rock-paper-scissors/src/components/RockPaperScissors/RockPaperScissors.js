import React, { Component } from 'react';
import './RockPaperScissors.css';

class RockPaperScissors extends Component {

    render() {
        return (
            <div>
                <button className="button" disabled>
                    <span className="icon" role="img" aria-label="Rock">👊</span>
                </button>
                <button className="button" disabled>
                    <span className="icon" role="img" aria-label="Paper">✋️</span>
                </button>
                <button className="button" disabled>
                    <span className="icon" role="img" aria-label="Scissors">✌️</span>
                </button>
            </div>
        );
    }
}

export default RockPaperScissors;