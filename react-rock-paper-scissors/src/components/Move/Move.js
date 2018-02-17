import React, { Component } from 'react';
import './Move.css';

class Move extends Component {
    render() {

        return(
            <div className="inline">
                <span className="move">
                    <span className="icon" role="img" aria-label={this.props.selectedOption.text}> 
                        {this.props.selectedOption.icon || '?' } 
                    </span>
                </span>
            </div>
        );
    }
}

export default Move;