import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

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
    </div>
  );
}

export default App;
