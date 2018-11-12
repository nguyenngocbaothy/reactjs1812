import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Word } from '../shared/Word';
import { WordForm } from '../shared/WordForm';
import { WordFilter } from '../shared/WordFilter';

import axios from 'axios';

class ListWordComponent extends Component {

    componentDidMount() {
        axios.get('https://word1203.herokuapp.com/word')
        .then(response => response.data)
        .then(res => console.log(res));
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         words: [
    //             { _id: 'a', en: 'One', vn: 'Mot', isMemoried: true },
    //             { _id: 'b', en: 'Two', vn: 'Hai', isMemoried: false },
    //             { _id: 'c', en: 'Three', vn: 'Ba', isMemoried: true }
    //         ],
    //         txtEn: '',
    //         txtVn: '',
    //         shouldShowForm: false,
    //         filterMode: 'SHOW_ALL'
    //     }
    // }

    // removeWord(_id) {
    //     this.setState(prevState => ({
    //         words: prevState.words.filter(w => w._id !== _id)
    //     }))
    // }

    // toogleWord(_id) {
    //     this.setState(prevState => ({
    //         words: prevState.words.map(w => {
    //             if (w._id !== _id) return w;
    //             return { ...w, isMemoried: !w.isMemoried }
    //         })
    //     }))
    // }

    // genWord(word) {
    //     const { filterMode } = this.state;
    //     const shouldShowWord = filterMode === 'SHOW_ALL' || (filterMode === 'SHOW_FORGOT' && !word.isMemoried) || (filterMode === 'SHOW_MEMORIZED' && word.isMemoried)
    //     if (!shouldShowWord) return null;
    //     const engClassName = word.isMemoried ? 'text-success' : 'text-danger';
    //     return (
    //         <div key={word._id}>
    //             <h3 className={engClassName}>{word.en}</h3>
    //             <p>{word.vn}</p>

    //             <button
    //                 className="btn btn-danger"
    //                 onClick={() => {
    //                     this.removeWord(word._id)
    //                 }}
    //             >
    //                 Remove
    //             </button>

    //             <button
    //                 className="btn btn-warning"
    //                 onClick={() => {
    //                     this.toogleWord(word._id)
    //                 }}
    //             >
    //                 Toogle
    //             </button>
    //         </div>
    //     )
    // }

    // addWord() {
    //     const word = {
    //         _id: Math.random(),
    //         en: this.state.txtEn,
    //         vn: this.state.txtVn,
    //         isMemoried: false
    //     }

    //     this.setState(prevState => ({
    //         words: prevState.words.concat(word),
    //         txtEn: '',
    //         txtVn: '',
    //         shouldShowForm: false
    //     }))
    // }

    // getForm() {
    //     if (!this.state.shouldShowForm) {
    //         return (
    //             <div>
    //                 <button
    //                     className="btn btn-success"
    //                     onClick={() => this.setState({
    //                         shouldShowForm: true
    //                     })}
    //                 >
    //                     Add new word
    //                 </button>
    //             </div>
    //         )
    //     }

    //     return (
    //         <div>
    //             <input
    //                 type="text"
    //                 className="form-control"
    //                 placeholder="English"
    //                 value={this.state.txtEn}
    //                 onChange={evt => this.setState({ txtEn: evt.target.value })}
    //             />
    //             <br />
    //             <input
    //                 placeholder="VietNamese"
    //                 className="form-control"
    //                 value={this.state.txtVn}
    //                 onChange={evt => this.setState({ txtVn: evt.target.value })}
    //             />
    //             <br />
    //             <button
    //                 className='btn btn-success'
    //                 onClick={this.addWord.bind(this)}
    //             >
    //                 Add Word
    //             </button>

    //             <button
    //                 className="btn btn-warning"
    //                 onClick={() => this.setState({
    //                         shouldShowForm: false
    //                     })
    //                 }
    //             >
    //                 Cancel
    //             </button>
    //         </div>
    //     )
    // }

    render() {
        return (
            <div className="form-group" style={{ width: '200px' }}>
                <WordFilter />

                <br />

                <WordForm />

                {/* { arr.map(word => <Word wordInfo={word} key={word._id}/>) } */}
                {/* { arr.map(word => this.getWord(word)) } */}
                {this.props.words.map(wordInfo => <Word key={wordInfo._id} wordInfo={wordInfo} />)}
            </div>
        );
    }
}

const mapStateToProp = state => ({words: state.words});

export const ListWord = connect(mapStateToProp)(ListWordComponent)