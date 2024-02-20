import { useState } from 'react'
import './App.css'
import myImage from './assets/picture-of-a-very-hireable-person.png';

function App() {
  return (
    <header className='header'>
      <h1>
        <ul>
          <li>Braidey Hooper</li>
          <nav className='navigation'>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Resume</li>
          </nav>
        </ul>
      </h1>
      <div className="image-container">
      <img src={myImage} alt="A very hirable person." className="circular-image"/>
      </div>
      </header>
  )
}

export default App
