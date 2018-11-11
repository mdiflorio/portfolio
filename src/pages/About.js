import React, { Component } from "react";
import profileImage from "../assets/profile-image.png";

class About extends Component {
  render() {
    return (
      <div class="container">
        <div class="about">
          <img class="profile" src={profileImage} alt="Profile" />
          <h2>About</h2>
          <p>
            Current freelance React Native developer and computer science
            student at Lycée Charles Poncet in France. A year’s worth of
            experience specialising in Mobile Application development with a
            production level project. Loves UI/UX and providing a great
            experience for users. Thoroughly enjoys problem-solving and learning
            new technologies. Outgoing and keen to learn from others. Thrives in
            a team environment and is quick to adapt to any situation. Holder of
            both Australian and EU passports.
          </p>
          <h2>Skills</h2>
          <ul>
            <li>
              <strong>Back-end</strong>&nbsp;&nbsp;&nbsp;&nbsp;Node.js, Express,
              REST API.
            </li>
            <li>
              <strong>Front-end</strong>&nbsp;&nbsp;&nbsp;&nbsp;Redux, React
              Native, jQuery, HTML5, CSS.
            </li>
            <li>
              <strong>Programming</strong>&nbsp;&nbsp;&nbsp;&nbsp;JavaScript, C,
              C++, Objective-C, Swift.
            </li>
            <li>
              <strong>Languages</strong>&nbsp;&nbsp;&nbsp;&nbsp;English, French.
            </li>
          </ul>

          <h2>Interests</h2>
          <p>
            Enjoys building new products and working with teams of motivated
            people. Loves cooking and travelling around the world when possible.
          </p>
          <h2>Seeking</h2>
          <p>
            Currently seeking a one-year internship for a
            <i>Licence Professionnelle</i> in France, 2019-2020.
          </p>
          <h2>Résumé</h2>
          <p>
            You can find an up to date copy of Madhava Di Florio's résumé
            <a href="./assets/resume.pdf" target="_blank">
              here.
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
