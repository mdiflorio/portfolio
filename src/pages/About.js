import React, { Component } from "react";
import profileImage from "../assets/profile-image.png";
import content_en from "../content/about/en";
import content_fr from "../content/about/fr";
import resume from "../assets/resume.pdf";

class About extends Component {
  render() {
    const { language } = this.props;
    const content = language === "EN" ? content_en : content_fr;
    return (
      <div className="container">
        <div className="content-container">
          <img className="profile" src={profileImage} alt="Profile" />
          <h2>About</h2>
          <p>{content.about}</p>
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
          <p>{content.interests}</p>
          <h2>Seeking</h2>
          <p>{content.seeking}</p>
          <h2>Résumé</h2>
          <p>
            You can find an up to date copy of Madhava Di Florio's résumé&nbsp;
            <a href={resume} target="_blank">
              here.
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
