import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Axios from "axios";

class App extends Component {
  state = {
    language: "EN"
  };

  componentDidMount() {
    Axios.get("http://ip-api.com/json/").then(ip_info => {
      if (ip_info.data.countryCode === "FR") {
        this.setState({ language: "FR" });
      }
    });
  }

  render() {
    const { language } = this.state;
    const path = this.props.location.pathname;
    return (
      <div className="App">
        <div className="language-btns-container">
          <button
            className={language === "EN" ? "active" : undefined}
            onClick={() => this.setState({ language: "EN" })}
          >
            EN
          </button>
          /
          <button
            className={language === "FR" ? "active" : undefined}
            onClick={() => this.setState({ language: "FR" })}
          >
            FR
          </button>
        </div>
        <header>
          <h1>Madhava Di Florio</h1>
          <nav>
            <Link className={path === "/" ? "active" : ""} to="/">
              Portfolio
            </Link>
            <Link className={path === "/about" ? "active" : ""} to="/about">
              {language === "EN" ? "About" : "CV"}
            </Link>
            <Link className={path === "/contact" ? "active" : ""} to="/contact">
              Contact
            </Link>
          </nav>
        </header>
        <div className="portfolio">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Portfolio language={language} />}
            />
            <Route path="/about" render={() => <About language={language} />} />
            <Route
              path="/contact"
              render={() => <Contact language={language} />}
            />
          </Switch>
        </div>
        <footer>
          <div className="footer">
            <div>
              <a href="https://github.com/mierz00" className="foot">
                <i className="fa fa-github fa-2x " aria-hidden="true" />
              </a>
              <a href="mailto:madhava.diflorio@gmail.com" className="foot">
                <i className="fa fa-envelope fa-2x " aria-hidden="true" />
              </a>
              <a href="https://www.freecodecamp.com/mierz00" className="foot">
                <i className="fa fa-free-code-camp fa-2x " aria-hidden="true" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
