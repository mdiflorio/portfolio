import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    return (
      <div class="container">
        <div class="item">
          <a href="https://codepen.io/mierz/full/RgbaVZ/" target="_blank">
            <img src="./assets/simon-SS.jpg" />
          </a>
        </div>
        <div class="item">
          <a href="https://codepen.io/mierz/full/zwEPXp/" target="_blank">
            <img src="./assets/calculator-SS.jpg" />
          </a>
        </div>
        <div class="item">
          <a href="https://codepen.io/mierz/full/BZBymp/" target="_blank">
            <img src="./assets/tictactoe-SS.jpg" />
          </a>
        </div>
        <div class="item">
          <a href="https://codepen.io/mierz/full/qmVwRK/" target="_blank">
            <img src="./assets/pomodoro-SS.jpg" />
          </a>
        </div>
        <div class="item">
          <a href="https://codepen.io/mierz/full/bRqEPg/" target="_blank">
            <img src="./assets/gameoflife-SS.jpg" />
          </a>
        </div>
        <div class="item">
          <a href="https://codepen.io/mierz/full/YZRjBN/" target="_blank">
            <img src="./assets/weatherwidget-SS.jpg" />
          </a>
        </div>
      </div>
    );
  }
}

export default Portfolio;
