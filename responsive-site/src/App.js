import logo from './logo.svg';
import { useState } from 'react'
import Calculator from './Components/Calculator'
import './App.css';
// import NotePad from './Components/NotePad';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="app">
      <header className="App-header">
          <h1 className="logo-text">I am the logo</h1>
        <nav className="nav-bar">
          <div className="links">
            <p className="nav-item">SERVICES</p>
            <p className="nav-item">PORTFOLIO</p>
            <p className="nav-item">ABOUT</p>
            <p className="nav-item">TEAM</p>
            <p className="nav-item">CONTACT</p>
            {/* <a class="btn btn-ghost" href="#">button test</a> */}
            {/* <a class="btn btn-full" href="#">button test2</a> */}
          </div>
        </nav>
        <img
          onClick={toggleMenu}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          className="hamburger"
        />
      
        <nav className={`mobile-nav ${isMenuOpen ? null : 'mobile-nav-hide'}`}>
          <p className="mobile-nav-item">SERVICES</p>
          <p className="mobile-nav-item">PORTFOLIO</p>
          <p className="mobile-nav-item">ABOUT</p>
          <p className="mobile-nav-item">TEAM</p>
          <p className="mobile-nav-item">CONTACT</p>
        </nav>

      </header>
      <Calculator/>
      {/* <NotePad/> */}
      {/* <section className="calc-note"> */}
            {/* <div className="all-notes"> */}
                {/* <span className="calc-display">this is the display</span> */}
                {/* <kbd className="keypad"> */}
                    {/* <a className="btn btn-ghost" href="#" value="1" onClick={(e) => this.handleClick(e.target.value)}>1</a> */}
                    {/* <a className="btn btn-ghost" href="#" value="2" onClick={(e) => this.handleClick(e.target.value)}>2</a> */}
                    {/* <a className="btn btn-ghost"href="#" value="3" onClick={(e) => this.handleClick(e.target.value)}>3</a> */}
                    {/* <a className="btn btn-ghost"href="#" value="4" onClick={(e) => this.handleClick(e.target.value)}>4</a> */}
                    {/* <a className="btn btn-ghost"href="#" value="5" onClick={(e) => this.handleClick(e.target.value)}>5</a> */}
                    {/* <a className="btn btn-ghost"href="#" value="6" onClick={(e) => this.handleClick(e.target.value)}>6</a> */}
                    {/* <a className="btn btn-ghost" href="#">7</a> */}
                    {/* <a className="btn btn-ghost"href="#">8</a> */}
                    
                    {/* <a className="btn btn-ghost"href="#">9</a> */}
                    {/* <a className="btn btn-ghost"href="#">0</a> */}
                    {/* <a className="btn btn-ghost"href="#">+/-</a> */}
                    {/* <a className="btn btn-ghost"href="#">C</a> */}
                    {/* <a className="btn btn-ghost"href="#">=</a> */}
                    {/* <a className="btn btn-ghost"href="#">*</a> */}
                    {/* <a className="btn btn-ghost"href="#">-</a> */}
                    {/* <a className="btn btn-ghost"href="#" value="+" onClick={() => this.addItems()} >+</a> */}
                    {/* <a className="btn btn-ghost"href="#">/</a> */}
                    {/* <a className="btn btn-ghost"href="#">.</a> */}
                    {/* 17 items above */}

                {/* </kbd> */}
            {/* </div> */}
      {/* </section> */}
    </div>
  );
}

export default App;
