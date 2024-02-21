import { useState } from 'react'
import './App.css'
import myImage from './assets/picture-of-a-very-hireable-person.png';
import trafficJam from './assets/traffic-jam.png';
import careerCanvas from './assets/career-canvas.png';
import logoMaker from './assets/SVG-logo-maker.png';
import passwordGenerator from './assets/password-generator.png';
import codingQuiz from './assets/coding-quiz.png';
import portfolio from './assets/portfolio.png';
import resume from './assets/2024-resume.pdf';
import githubLogo from './assets/github-mark.png';
import linkedInLogo from './assets/LI-In-bug.png';
import downloadPNG from './assets/document-download-icon.png'

function App() {
  return (
    <div>
    <header className='header'>
      <h1>
        <ul>
          <li>Braidey Hooper</li>
          <nav className='navigation'>
            <li><a href="#about-section">About Me</a></li>
            <li><a href="#projects-section">Projects</a></li>
            <li><a href="#contact-section">Contact</a></li>
            <li><a href="#resume-section">Resume</a></li>
          </nav>
        </ul>
      </h1>
      <div className="image-container">
      <img src={myImage} alt="A very hirable person." className="circular-image"/>
      </div>
      </header>
      <div className="about-me">
        <h2 id="about-section">A little bit About Me</h2>
        <h3 className="about-me-text">Hello! I'm Braidey, and I'm on an exciting journey transitioning from a background in emergency healthcare to the dynamic world of web development. While I may not have professional coding experience yet, my passion for technology and problem-solving has been a driving force behind my decision to pursue this new career path. I am currently immersing myself in learning various programming languages, frameworks, and technologies to build modern and user-friendly web applications. Through self-directed learning, online courses, and coding projects, I am developing my skills in front-end and back-end development. My background in emergency healthcare has equipped me with valuable skills in critical thinking, adaptability, and attention to detail – qualities that I am eager to bring to my new role as a web developer. I'm excited to embark on this new chapter and look forward to the opportunities and experiences that lie ahead. Feel free to explore my portfolio to see some of my coding projects and reach out if you'd like to connect or collaborate! </h3>
      </div>
      <div className='projects-text'>
        <h2 id="projects-section">Check out some of my Projects</h2>
        <div className="project-cards">
        <div className="card" >
          <a href="https://eagersidekick.github.io/Traffic_Jam/"><img src={trafficJam} alt="Traffic-Jam app screenshot" /></a>
          <a href="https://github.com/eagersidekick/Traffic_Jam?tab=readme-ov-file"><h2>Traffic Jam</h2></a>
          <p>Traffic Jam shows users live events around roadtrip destinations using Google Maps API and Ticketmaster API tools</p>
        </div>
        <div className="card">
          <a href="https://fierce-depths-59937-afaae183c587.herokuapp.com/login"><img src={careerCanvas} alt="Career Canvas" /></a>
          <a href="https://github.com/evan-hatley/Career-Canvas?tab=readme-ov-file"><h2>Career Canvas</h2></a>
          <p>Career Canvas provides tools for users to track job applications and include notes and statuses that flow into charts dynamically.</p>
        </div>
        <div className="card">
          <a href="https://github.com/BraideyH/SVG-logo-maker"><img src={logoMaker} alt="Logo Maker" /></a>
          <a href="https://github.com/BraideyH/SVG-logo-maker"><h2>SVG Logo Maker</h2></a>
          <p>This simple backend app generates a logo image based on input provided by the user such as text, color, and shape.</p>
        </div>
        <div className="card">
          <a href="https://braideyh.github.io/Random-Password-Generator/"><img src={passwordGenerator} alt="Password Generator" /></a>
          <a href="https://github.com/BraideyH/Random-Password-Generator?tab=readme-ov-file"><h2>Password Generator</h2></a>
          <p>This password generator will provide users with random passwords within defined parameters such as character inclusions and string length.</p>
        </div>
        <div className="card">
          <a href="https://braideyh.github.io/coding-quiz-app/"><img src={codingQuiz} alt="Coding Quiz" /></a>
          <a href="https://github.com/BraideyH/coding-quiz-app?tab=readme-ov-file"><h2>Coding Quiz</h2></a>
          <p>This simple app functions as a quiz for new developers to test their knowledge.</p>
        </div>
        <div className="card">
          <img src={portfolio} alt="Portfolio" />
          <a href="https://github.com/BraideyH/react-portfolio"><h2>React Portfolio</h2></a>
          <p>Take a look under the hood of this application!</p>
        </div>
        </div>
        </div>
        <div className="about-me">
        <h2 id="contact-section">Contact Me</h2>
        <form id="contact-form">
    <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required></input>
    </div>
    <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required></input>
    </div>
    <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
    </div>
    <button type="submit">Submit</button>
</form>
<div>
  <a href="https://github.com/BraideyH?tab=overview&from=2023-12-01&to=2023-12-31"><img className="logo-icons" src={githubLogo} alt="Github logo"/></a>
  <a href="https://www.linkedin.com/in/braidey-hooper-584224290/"><img className="logo-icons" src={linkedInLogo} alt="LinkedIn logo"/></a>
</div>
<div id="error-message"></div>
      </div>
      <div className="about-me">
            <h2>Resume</h2>
            <p>Download my resume:</p>
            <a href={resume} id="resume-section" download><img className="download-icon" src={downloadPNG}/></a>
            <h3>Proficiencies</h3>
            <ul className='bottom-padding'>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        </div>
        </div>
  )
}

export default App
