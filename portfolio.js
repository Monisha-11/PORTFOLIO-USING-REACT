import React from 'react';
import './style.css'; // Import the CSS file

function Portfolio() {
  return (
    <>
      <nav className="navbar">
        
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT ME</a></li>
          <li><a href="#education">EDUCATION</a></li>
          <li><a href="#portfolio">PORTFOLIO</a></li>
          <li><a href="#contact">CONTACT ME</a></li>
        </ul>
      </nav>

      <section id="home">
        <h1 className="heading"> HI, I AM</h1>
        <h1 className="heading"> MONISHA </h1>
        <br />
      </section>

      <section id="about">
        <h1 className="heading">ABOUT ME</h1>
        <br />
        <br />
        <div className="about">
          <img src="bg.jpg" alt="my pic" />
          <div className="name">
            <br />
            <br />
            <p>AI/ML specialists work with a range of data types...</p>
          </div>
        </div>
      </section>

      <section id="education">
        <h1 className="heading">EDUCATION</h1>

        <div className="columns">
          <div className="box">
            <h2>BACHELORS IN AIML</h2>
            <p><i>Artificial Intelligence and Machine Learning which aims...</i></p>
          </div>
          <div className="box">
            <h2>MASTERS IN AIML</h2>
            <p><i>The Master of Artificial Intelligence in Business is a unique...</i></p>
          </div>
          <div className="box">
            <h2>P.H.D IN AIML</h2>
            <p><i>Earn a doctorate degree in Artificial Intelligence, help...</i></p>
          </div>
          <div className="box">
            <h2>RESEARCH IN AIML</h2>
            <p><i>A computer-generated simplification of something that exists...</i></p>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <h1 className="heading">PORTFOLIO</h1>
        <div className="gallery">
          <img src="img1.jpg" alt="" />
          <img src="img2.jpg" alt="" />
          <img src="img3.jpg" alt="" />
        </div>
      </section>

      <section id="contact">
        <h1 className="heading">CONTACT ME</h1>
        <br />
        <form action="" className="form">
          <input type="text" name="name" className="input" placeholder="Enter Your name" />
          <input type="text" name="email" className="input" placeholder="Enter Your Email" />
          <textarea name="message" id="message" cols="70" rows="20" placeholder="Enter Your Message"></textarea>
          <input type="submit" value="submit" id="submit" />
        </form>
      </section>
    </>
  );
}

export default Portfolio;
