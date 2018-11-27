import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

class App extends Component {
  state = {
    language: "EN"
  };

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
              About
            </Link>
            <Link className={path === "/contact" ? "active" : ""} to="/contact">
              Contact
            </Link>
          </nav>
        </header>
        <div className="portfolio">
          <Switch>
            <Route exact path="/" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
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
