import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEn: '',
            txtVn: ''
        }
        this.addWord = this.addWord.bind(this);
    }

    addWord() {
        const { txtEn, txtVn } = this.state;
        const word = {
            _id: Math.random() + '',
            en: txtEn,
            vn: txtVn,
            isMemorized: false
        };
        this.props.dispatch({type: 'ADD_WORD', word})
        this.setState({txtEn: '', txtVn: ''});
    }

    render() {
        const { dispatch, shouldShowForm } = this.props;
        if (!shouldShowForm) {
            return (
                <div>
                    <button
                        className="btn btn-success"
                        onClick={() => dispatch({type: 'TOGGLE_FORM'})}
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
                onClick={this.addWord}
            >
                Add Word
            </button>

            <button
                className="btn btn-warning"
                onClick={() => dispatch({type: 'TOGGLE_FORM'})}
            >
                Cancel
            </button>
        </div>)
    }
}

const mapStates = state => ({shouldShowForm: state.shouldShowForm})

export const WordForm = connect(mapStates)(WordFormComponent) 