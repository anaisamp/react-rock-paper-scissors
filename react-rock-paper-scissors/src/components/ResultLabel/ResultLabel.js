import React, { Component } from 'react';
import './ResultLabel.css';

class ResultLabel extends Component {

    getLabel = (winner) => {
        let label = {
            text: "Fight!",
            style: ""
        }
        switch(winner) {
            case 0:
                label = {
                    text: "Tied",
                    style: "bold"
                }
                break;
            case 1:
                label = {
                    text: "You win!",
                    style: "green"
                }
                break;
            case 2: 
                label = {
                    text: "Computer wins",
                    style: "red"
                }
                break;
            default:
                break;
        }
        return label;
      }

    render() {
        const label = this.getLabel(this.props.winner);
        return(
            <p className={ label.style }> { label.text } </p>
        );
    }
}
export default ResultLabel;