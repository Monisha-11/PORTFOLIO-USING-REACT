# PORTFOLIO-USING-REACT

## PORTFOLIO.JS
```java
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
```
## STYLE.CSS
```java

body{
    margin: 0%;
}
header {
    height: 712px;
    width: 100vw;
    background: rgb(156, 115, 61);
    overflow: hidden;
}

#banner {
   object-fit: cover;
   opacity: 0.5;
}

.menubar{
    position: absolute;
    color: #ffffff;
    font-family: Garamond, serif;
    font-size:x-large;
    top: 0%;   
    font-weight: 300;
    cursor: pointer;
}

.m1{
    left:25%;
}

.m2{
    left: 37%;
}

.m3{
    left: 55%;
}

.m4{
    left: 68%;
}
#name{
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-family: Garamond, serif;
    font-size: 610%;
}

#info{
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-family: 'Trebuchet MS', sans-serif;
    font-size: 200%;
}

.myinfo{
    height: 712px;
    width: 100vw;
    background: rgb(232, 223, 197);
}

.container{
    display: block;
    width: 70%;
    background-color: rgb(255, 255, 255);
    height: 70%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 30px;
}

#study{
    border-radius: 80px;
}

#title{
    position: absolute;
    top: 130%;
    left: 43%;
    font-size: 23px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    color: #605e5e;
}

#description
{
    position: absolute;
    top: 137%;
    left: 43%;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: rgb(134, 119, 79);
}

#title2{
    position: absolute;
    top: 150%;
    left: 43%;
    font-size: 23px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    color: #605e5e;
}

#description2
{
    position: absolute;
    top: 157%;
    left: 43%;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: rgb(134, 119, 79);
}

.layer{
    display: block;
    width: 100%;
    background-color: #6f7ca3;
    top: 500%;
    height: 70%;
}

.box1{
    height: 50%;
    width: 20%;
    background-color: #ffffff;
}

.c1{
    top: 500%;
    margin-left: 10%;
}

.c2{
    margin-left: 30%;
}

.c3{
    margin-left: 50%;
    margin-top: -500px;
}

.c4{
    margin-left: 70%;
    margin-top: 2px;
}

.box2{
    height: 50%;
    width: 20%;
    background-color: #857f7f;
}

.c5{
    margin-left: 10%;
    margin-top: -250px;
}

.c6{
    margin-left: 30%;
    margin-top: -498px;
}

.c7{
    margin-left: 50%;
    margin-top: -2px;
}

.c8{
    margin-left: 70%;
    margin-top: -498px;
}

.c5:hover, .c6:hover, .c7:hover, .c8:hover {
    transition-duration: 0.1s;
    background-color: #6f7ca3;
}

.skill{
    color: #6f7ca3;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight:200;
    margin-left: 4%;
    font-size: x-large;
}

.des{
    color: #ffffff;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight:200;
    margin-left: 8%;
    margin-right: 8%;
    font-size: x-large;
}

.containersoft{
    display: block;
    width: 50%;
    background-color: #6f7ca3;
    height: 50%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 30px;
}

#softskills{
    border-radius: 80px;
    margin-top: 2px;
}

#skillset{
    position: absolute;
    top: 317%;
    left: 50%;
    font-size: 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    color: #d1cece;
}

#tasks{
    position: absolute;
    top: 325%;
    left: 50%;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 100;
    color: #d1cece;
}

.footer{
    display: block;
    width: 100%;
    background-color: #a29d9d;
    height: 100px;
    margin-top: 7%;
}

.frame{
    width: 1000px;
    /* border: 2px solid #ffffff; */
    margin-left: auto;
    margin-right: auto;
}

#contact{
    color: #ffffff;
    font-weight: bolder;
    font-size: 200%;
    padding-top: 0%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.button1{
    top: 10%;
    padding: 15px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 20px;
    background-color:rgb(232, 223, 197);
    border-radius:50px;
    color: #777474;
    border:none;
    font-family: sans-serif;
    font-weight: bold;
    cursor: pointer;
    left: 100%;
} 

.button1:hover {
    transition-duration: 0.1s;
    background-color: rgb(255, 255, 255);
    border: 3px solid rgb(232, 223, 197);
}
```
APP.JS
```java
import React from 'react';
import Portfolio from './portfolio';

function App() {
  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
```
