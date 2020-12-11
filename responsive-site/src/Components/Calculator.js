import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            display: "",
            theTotal: "",
            theValBox: 0,
            theValBox2: 6,
            togglePad: true
        }
    }

    toggleOpPad = () => {
        this.setState({togglePad: !this.state.togglePad})
        console.log(this.state.togglePad)
    }

    handleClick = (props) => {
        this.setState({display:this.state.display+props})
        console.log(this.state.theValBox)
    }
    addItem = () => {
        this.setState({ display : this.state.theValBox+this.state.theVakBox2})
        console.log(this.state.display)
    }

    clearDisplay = () => {
        this.setState({display:""})
    }

    render() {
        return(
            <div>
        <span className="calc-display">{this.state.display}</span>
                    <kbd className="keypad">
                        <a className="btn btn-ghost" href="#" onClick={() => this.handleClick("1")}>1</a>
                        <a className="btn btn-ghost" href="#" value="2" onClick={() => this.handleClick("2")}>2</a>
                        <a className="btn btn-ghost"href="#" value="3" onClick={() => this.handleClick("3")}>3</a>
                        <a className="btn btn-ghost"href="#" value="4" onClick={() => this.handleClick("4")}>4</a>
                        <a className="btn btn-ghost"href="#" value="5" onClick={(e) => this.handleClick(e.target.value)}>5</a>
                        <a className="btn btn-ghost"href="#" value="6" onClick={(e) => this.handleClick(e.target.value)}>6</a>
                        <a className="btn btn-ghost" href="#">7</a>
                        <a className="btn btn-ghost"href="#">8</a>                       
                        <a className="btn btn-ghost"href="#">9</a>
                        <a className="btn btn-ghost"href="#">0</a>
                        <a className="btn-hide btn btn-ghost"href="#" onClick={() => this.toggleOpPad()}>+/-</a>
                        <a className="btn btn-ghost"href="#" onClick={() => this.clearDisplay()}>C</a>
                    </kbd>
                    <kbd className={`operator-pad ${this.state.togglePad ? false : 'operator-pad-hide'}`}>
                        <a className={`btn btn-ghost ${this.state.togglePad ? false : 'operator-pad-hide'}`}href="#" value="+" onClick={() => this.handleClick("+")} >+</a>
                        <a className={`btn btn-ghost ${this.state.togglePad ? false : 'operator-pad-hide'}`}href="#" value="-" onClick={() => this.handleClick("+")} >-</a>
                        <a className={`btn btn-ghost ${this.state.togglePad ? false : 'operator-pad-hide'}`}href="#" value="x" onClick={() => this.handleClick("+")} >x</a>
                        <a className={`btn btn-ghost ${this.state.togglePad ? false : 'operator-pad-hide'}`}href="#" value="/" onClick={() => this.handleClick("+")} >/</a>
                        <a className={`btn btn-ghost ${this.state.togglePad ? false : 'operator-pad-hide'}`}href="#" onClick={() => this.execute()}>=</a>
                    </kbd>
            </div>
        )
    }

    
}