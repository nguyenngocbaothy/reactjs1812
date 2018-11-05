import React, { Component } from 'react';

export class MyInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEn: '',
            txtVn: ''
        }
    }

    render() {
        return (
            <div className="form-group" style={{ width: '200px' }}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="English"
                    value={this.state.txtEn}
                    onChange={evt => this.setState({txtEn : evt.target.value})}
                />
                <br />
                <input
                    placeholder="VietNamese"
                    className="form-control"
                    value={this.state.txtVn}
                    onChange={evt => this.setState({txtVn: evt.target.value})}
                />
                <br />
                <pre>en :{this.state.txtEn}</pre>
                <pre>vn: {this.state.txtVn}</pre>
            </div>
            )
        }
}