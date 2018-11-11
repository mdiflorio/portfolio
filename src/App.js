import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Madhava Di Florio</h1>
          <nav>
            <Link to="/">Portfolio</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <div class="portfolio">
          <Switch>
            <Route exact path="/" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
        <footer>
          <div class="footer">
            <div>
              <a href="https://github.com/mierz00" class="foot">
                <i class="fa fa-github fa-2x " aria-hidden="true" />
              </a>
              <a href="mailto:madhava.diflorio@gmail.com" class="foot">
                <i class="fa fa-envelope fa-2x " aria-hidden="true" />
              </a>
              <a href="https://www.freecodecamp.com/mierz00" class="foot">
                <i class="fa fa-free-code-camp fa-2x " aria-hidden="true" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
