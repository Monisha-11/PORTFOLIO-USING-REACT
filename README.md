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

*{
  margin: 0;
  padding: 0;
}
html{
  scroll-behavior: smooth;
}
.navbar{
  display : flex;
  justify-content: center;
  height: 50px;
  align-items: center;
  position: sticky;
  top: 0;
}
.navbar::before{
  content: "";
  position: absolute;
  background-color: rgba(0,0,0,0.5);
  height: 100%;
  width: 100%;
  z-index: -1;
}
.navbar ul{
  display : flex;
  list-style: none;
}
.navbar ul li{
  font-size: 1.1rem;
}
.navbar ul li a{
  padding: 5px 20px;
  text-decoration: none;
  color: rgb(255, 255, 255);
}
.navbar ul li a:hover{
  border-bottom: 2px solid yellow;
}
#home{
  display: flex;
  flex-direction: column;
  height: 1000px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
  color: white;
  font-size: 25px;
}
#home::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: url('bg1.jpg') no-repeat center center/cover;
  height: 1100px;
  width: 100%;
  z-index: -1;
  opacity: .7;
}
.heading{
  color: rgb(240, 243, 246);
  font-size: 3rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-align: center;
  transform: scale(1,1.3);
}
#portfolio{
  display: flex;
  flex-direction: column;
  background-color: #A29490;
}
#portfolio h1{
  margin: 60px;


  
}
.gallery{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.gallery img{
  width: 560px;
  height: 840px;
  padding: 10px;
  margin: 10px;
}
.gallery img:hover{
  background-color: white;
  cursor: pointer;
}

#education{
  display: flex;
  flex-direction: column;
  background-color: #A29490;
}
#education h1{
  margin: 60px;

}
.columns{
  display: grid;
  grid-template-columns: auto auto;
  padding-left: 50px;
}
.box{
  height: 250px;
  width: 600px;
  background-color: rgba(0,0,0,0.5);
  border-radius: 20px;
  margin: 80px;
  padding: 20px;
}
.box:hover {
  transition-duration: 0.1s;
  background-color: #7e645e;
}
.box h2{
  color: rgb(253, 253, 253);
  font-size: 2rem;
  margin-bottom: 40px;
}
.box p{
  color: white;
  font-size: 1.4rem;
}
#about{
  display: flex;
  flex-direction: column;
  height: 1000px;
  background-color:#A29490;
}
#about h1{
  color:white;
  margin: 55px;
}
#about h2{
  color: white;
  font-size: 2.5rem;

  
  padding-right: 200px;
}
#about p{
  color: white;
  font-size: 1.8rem;
}
.about{
  display: flex;
}
.about img{
  width: 600px;
  height: 600px;
  padding: 0px 60px;
}
.name{
  padding: 10px;
}
#contact{
  display: flex;
  flex-direction: column;
  background-color: #A29490;
  height: 800px;
  padding-top: 200px;
  
}
#contact h1{
  margin: 10px;
}
.form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.input{
  padding: 15px 20px;
  margin: 15px;
  width: 40%;
  border: none;
  outline: none;
  border-radius: 25px;
  background-color: rgba(0,0,0,0.5);
  color: #A29490;
  font-size: 1.2rem;
}
#message{
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  background-color: rgba(0,0,0,0.5);
  color: #A29490;
  height: 250px;
  width: 750px;
  font-size: 1.2rem;

}
#submit{
  padding: 15px 20px;
  margin: 30px;
  width: 15%;
  border-radius: 20px;
  background-color: rgba(0,0,0,0.5);
  color: #A29490;
  border: none;
  outline: none;
  font-size: 1.2rem;
}
#submit:hover{
  background-color: rgb(27, 181, 3);
  color: #ffffff;
  cursor: pointer;
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


## OUTPUT
<img width="1261" alt="image" src="https://github.com/Monisha-11/PORTFOLIO-USING-REACT/assets/93427240/cd4d06f5-672c-4a1e-8a01-2f6989e493b2">
<img width="1263" alt="image" src="https://github.com/Monisha-11/PORTFOLIO-USING-REACT/assets/93427240/35d1cef5-c285-4794-8a91-5079d190098d">
<img width="1262" alt="image" src="https://github.com/Monisha-11/PORTFOLIO-USING-REACT/assets/93427240/e046a74f-48d0-4552-8577-10169ccb14e9">
<img width="1261" alt="image" src="https://github.com/Monisha-11/PORTFOLIO-USING-REACT/assets/93427240/0c65e2aa-212c-43e3-ba2c-f8fcbc974328">
<img width="1259" alt="image" src="https://github.com/Monisha-11/PORTFOLIO-USING-REACT/assets/93427240/69728a28-94ef-4b32-a13e-3098f9aec52f">





