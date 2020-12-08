import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            display: "",
            theTotal: "",
            theValBox: 0,
            theValBox2: 6
        }
    }

    handleClick = (props) => {
        // this.setState({theValBox:+props})
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

    execute = () => {
        this.setState({theTotal:+this.state.display})
        console.log(this.state.theTotal)
    }

    render() {
        return(
            <div>
            <section className="calc-note">
                <div className="all-notes">
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
                        <a className="btn btn-ghost"href="#" onClick={() => this.addItem()}>+/-</a>
                        <a className="btn btn-ghost"href="#" onClick={() => this.clearDisplay()}>C</a>
                        {/* <a className="btn btn-ghost"href="#">=</a> */}
                        {/* <a className="btn btn-ghost"href="#">*</a> */}
                        {/* <a className="btn btn-ghost"href="#">-</a> */}
                        {/* <a className="btn btn-ghost"href="#" value="+" onClick={() => this.addItems()} >+</a> */}
                        {/* <a className="btn btn-ghost"href="#">/</a> */}
                        {/* <a className="btn btn-ghost"href="#">.</a> */}
                        {/* 17 items above */}

                    </kbd>
                    <kbd className="keypad"></kbd>
                </div>
      </section>
            </div>
        )
    }

    
}