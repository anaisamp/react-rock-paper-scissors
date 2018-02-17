import React, { Component } from 'react';
import './Move.css';

class Move extends Component {
    render() {
        return(
            <div className="round">
                {
                    this.props.selectedOption.icon ?
                    <span className="movedIcon" role="img" aria-label={this.props.selectedOption.text}>
                        { this.props.selectedOption.icon }
                    </span>
                    :
                    <div className="pulsingIcon">
                        <span className="movedIcon" role="img" aria-label="Waiting for the first move">👊</span>
                    </div>
                }
            </div>
        );
    }
}

export default Move;