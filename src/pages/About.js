import React, { Component } from "react";
import profileImage from "../assets/profile-image.png";
import content_en from "../content/about/en";
import content_fr from "../content/about/fr";

class About extends Component {
  render() {
    const { language } = this.props;
    const content = language === "EN" ? content_en : content_fr;
    return (
      <div className="container">
        <div className="content-container">
          <img className="profile" src={profileImage} alt="Profile" />
          <h2>{language === "EN" ? "About me" : "Synthèse"}</h2>
          <p>{content.about}</p>
          <h2>{language === "EN" ? "Skills" : "Compétences"}</h2>
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
              <strong>
                {language === "EN" ? "Programming" : "Programmation"}
              </strong>
              &nbsp;&nbsp;&nbsp;&nbsp;JavaScript, C, C++, Objective-C, Swift.
            </li>
            <li>
              <strong>{language === "EN" ? "Languages" : "Langues"}</strong>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {language === "EN" ? "French fluently." : "Bilingue Anglais."}
            </li>
          </ul>

          <h2>{language === "EN" ? "Interests" : "Intérêts"}</h2>
          <p>{content.interests}</p>
          <h2>{language === "EN" ? "Seeking" : "À la recherche de"}</h2>
          <p>{content.seeking}</p>
        </div>
      </div>
    );
  }
}

export default About;
