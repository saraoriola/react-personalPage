import React from 'react';
import "./home.css";

const name = "Sara Oriola";

const Home = () => {
  return (
    <section>
      <h2>Welcome to my personal page</h2>
      <p>Hello, I am {name}.</p>
      <p>Here you will find information about me, the technologies I handle, and my projects.</p>
      <h3>About Me</h3>
      <p>My evolution in the world of design has just begun. I started to enter the world studying a career in fashion design. During my studies, I realized that graphic design was the basis that needed improvement from me as it was a weakness to know more and more, and that's when I decided to specialize in web and mobile, obtaining the title of UX/UI design. I am currently studying to achieve my goal, to be a Web Developer, to demonstrate all my knowledge and continue to grow personally and professionally in the digital world.</p>
      <h3>Technologies</h3>
      <table>
        <thead>
          <tr>
            <th>Frontend</th>
            <th>Backend</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React</td>
            <td>Node.js</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>Express.js</td>
          </tr>
          <tr>
            <td>HTML</td>
            <td>Git & GitHub</td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>SQL</td>
          </tr>
          <tr>
            <td></td>
            <td>Mongo</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Home;
