import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEn: '',
            txtVn: ''
        }
    }

    render() {
        if (!this.props.shouldShowForm) {
            return (
                <div>
                    <button
                        className="btn btn-success"
                    >
                        Add new word
                    </button>
                </div>
            )
        }
        return (<div>
            <input
                type="text"
                className="form-control"
                placeholder="English"
                value={this.state.txtEn}
                onChange={evt => this.setState({ txtEn: evt.target.value })}
            />
            <br />
            <input
                placeholder="VietNamese"
                className="form-control"
                value={this.state.txtVn}
                onChange={evt => this.setState({ txtVn: evt.target.value })}
            />
            <br />
            <button
                className='btn btn-success'
            >
                Add Word
            </button>

            <button
                className="btn btn-warning"

            >
                Cancel
            </button>
        </div>)
    }
}

const mapStates = state => ({shouldShowForm: state.shouldShowForm})

export const WordForm = connect(mapStates)(WordFormComponent) 