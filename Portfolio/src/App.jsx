import { useState } from 'react'
import './App.css'
import myImage from './assets/picture-of-a-very-hireable-person.png';

function App() {
  return (
    <div>
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
      <div className="about-me">
        <h2>About Me</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas, consequuntur eum dignissimos quia dolorum ab! Vel, impedit expedita! Totam eius tempora enim nam vitae! Ipsum expedita repellendus doloribus consequuntur?</h3>
      </div>
      <div className='projects-text'>
        <h2>Projects</h2>
        <div className="project-cards">
        <div className="card">
          <img src="" alt="Project 1" />
          <h2>Project 1</h2>
          <p>Description of Project 1</p>
        </div>
        <div className="card">
          <img src="" alt="Project 2" />
          <h2>Project 2</h2>
          <p>Description of Project 2</p>
        </div>
        <div className="card">
          <img src="" alt="Project 3" />
          <h2>Project 3</h2>
          <p>Description of Project 3</p>
        </div>
        <div className="card">
          <img src="" alt="Project 4" />
          <h2>Project 4</h2>
          <p>Description of Project 4</p>
        </div>
        <div className="card">
          <img src="" alt="Project 5" />
          <h2>Project 5</h2>
          <p>Description of Project 5</p>
        </div>
        <div className="card">
          <img src="" alt="Project 6" />
          <h2>Project 6</h2>
          <p>Description of Project 6</p>
        </div>
        </div>
        </div>
      </div>
  )
}

export default App
