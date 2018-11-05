import React, { Component } from 'react';

export class Word extends Component {
    state = {  }

    getButton() {
        if (this.props.wordInfo.isMemoried) {
            return <button className="btn btn-warning">Forgot</button>;
        }

        return <button className="btn btn-success">Memoried</button>;
    }

    render() {
        const { en, vn, isMemoried } = this.props.wordInfo;
        const engClassName = isMemoried ? 'text-success' : 'text-danger';
        return (
            <div>
                <h3 className={ engClassName }>
                    { en }
                </h3>
                <p>{ vn }</p>

                { this.getButton() }
            </div>      
        );
    }
}