import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordComponent extends Component {
    state = {  }

    getButton() {
        const toggleWord = () => {this.props.dispatch({type: 'TOGGLE_WORD', _id: this.props.wordInfo._id})}
        if (this.props.wordInfo.isMemoried) {
            return <button className="btn btn-warning" onClick={toggleWord}>Forgot</button>;
        }

        return <button className="btn btn-success" onClick={toggleWord}>Memoried</button>;
    }

    get shouldShowWord() {
        const { filterMode, wordInfo } = this.props;
        if (filterMode === 'SHOW_ALL') return true;
        if (filterMode === 'SHOW_FORGOT') return !wordInfo.isMemoried;
        return wordInfo.isMemoried;
    }

    render() {
        if (!this.shouldShowWord) return null;
        const { en, vn, isMemoried, _id } = this.props.wordInfo;
        const engClassName = isMemoried ? 'text-success' : 'text-danger';
        return (
            <div>
                <h3 className={ engClassName }>
                    { en }
                </h3>
                <p>{ vn }</p>
                <button 
                    className="btn btn-danger"
                    onClick={evt => this.props.dispatch({type: 'REMOVE_WORD', _id})}
                >
                    Remove
                </button>
                { this.getButton() }
            </div>      
        );
    }
}

const mapStates = state => ({filterMode: state.filterMode})

export const Word = connect(mapStates)(WordComponent) 