import React, { Component } from 'react';
import { connect } from 'react-redux';

export class WordFilterComponent extends Component {

    render() {
        return (
            <select
                className="form-control"
                value={this.props.filterMode}
                onChange={evt => this.props.dispatch({type: 'SET_FILTER_MODE', filterMode: evt.target.value})}
            >
                <option value="SHOW_ALL">SHOW ALL</option>
                <option value="SHOW_FORGOT">SHOW FORGOT</option>
                <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
            </select>
        )
    }
}

const mapStates = state => ({filterMode: state.filterMode})

export const WordFilter = connect(mapStates)(WordFilterComponent) 