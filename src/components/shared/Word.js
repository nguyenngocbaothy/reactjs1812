import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordComponent extends Component {
    state = {  }

    getButton() {
        if (this.props.wordInfo.isMemoried) {
            return <button className="btn btn-warning">Forgot</button>;
        }

        return <button className="btn btn-success">Memoried</button>;
    }

    get shouldShowWord() {
        const { filterMode, wordInfo } = this.props;
        if (filterMode === 'SHOW_ALL') return true;
        if (filterMode === 'SHOW_FORGOT') return !wordInfo.isMemoried;
        return wordInfo.isMemoried;
    }

    render() {
        if (!this.shouldShowWord) return null;
        const { en, vn, isMemoried } = this.props.wordInfo;
        const engClassName = isMemoried ? 'text-success' : 'text-danger';
        return (
            <div>
                <h3 className={ engClassName }>
                    { en }
                </h3>
                <p>{ vn }</p>
                <button className="btn btn-danger">
                    Remove
                </button>
                { this.getButton() }
            </div>      
        );
    }
}

const mapStates = state => ({filterMode: state.filterMode})

export const Word = connect(mapStates)(WordComponent) 