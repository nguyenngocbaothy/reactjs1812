import React, { Component } from 'react';
// import { Word } from '../shared/Word';

export class ListWord extends Component {
    state = {}

    constructor(props) {
        super(props);
        this.state = {
            words: [
                { _id: 'a', en: 'One', vn: 'Mot', isMemoried: true },
                { _id: 'b', en: 'Two', vn: 'Hai', isMemoried: false },
                { _id: 'c', en: 'Three', vn: 'Ba', isMemoried: true }
            ],
            txtEn: '',
            txtVn: ''
        }
    }

    removeWord(_id) {
        this.setState(prevState => ({
            words: prevState.words.filter(w => w._id !== _id)
        }))
    }

    toogleWord(_id) {
        this.setState(prevState => ({
            words: prevState.words.map(w => {
                if (w._id !== _id) return w;
                return { ...w, isMemoried: !w.isMemoried }
            })
        }))
    }

    genWord(word) {
        const engClassName = word.isMemoried ? 'text-success' : 'text-danger';
        return (
            <div key={word._id}>
                <h3 className={engClassName}>{word.en}</h3>
                <p>{word.vn}</p>

                <button
                    className="btn btn-danger"
                    onClick={() => {
                        this.removeWord(word._id)
                    }}
                >
                    Remove
                </button>

                <button
                    className="btn btn-warning"
                    onClick={() => {
                        this.toogleWord(word._id)
                    }}
                >
                    Toogle
                </button>
            </div>
        )
    }

    addWord() {
        const word = {
            _id: Math.random(),
            en: this.state.txtEn,
            vn: this.state.txtVn,
            isMemoried: false
        }

        this.setState(prevState => ({
            words: prevState.words.concat(word),
            txtEn: '',
            txtVn: ''
        }))
    }

    render() {
        return (
            <div className="form-group" style={{ width: '200px' }}>
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
                    onClick={this.addWord.bind(this)}
                >
                    Add
                </button>

                {/* { arr.map(word => <Word wordInfo={word} key={word._id}/>) } */}
                {/* { arr.map(word => this.getWord(word)) } */}
                {this.state.words.map(word => this.genWord(word))}
            </div>
        );
    }
}