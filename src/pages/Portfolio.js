import React, { Component } from "react";

import simon_img from "../assets/simon-SS.jpg";
import calculator_img from "../assets/calculator-SS.jpg";
import tictactoe_img from "../assets/tictactoe-SS.jpg";
import pomodoro_img from "../assets/pomodoro-SS.jpg";
import gameoflife_img from "../assets/gameoflife-SS.jpg";
import weather_img from "../assets/weatherwidget-SS.jpg";

class Portfolio extends Component {
  render() {
    return (
      <div className="container">
        <div className="item">
          <a href="https://codepen.io/mierz/full/RgbaVZ/" target="_blank">
            <img src={simon_img} />
          </a>
        </div>
        <div className="item">
          <a href="https://codepen.io/mierz/full/zwEPXp/" target="_blank">
            <img src={calculator_img} />
          </a>
        </div>
        <div className="item">
          <a href="https://codepen.io/mierz/full/BZBymp/" target="_blank">
            <img src={tictactoe_img} />
          </a>
        </div>
        <div className="item">
          <a href="https://codepen.io/mierz/full/qmVwRK/" target="_blank">
            <img src={pomodoro_img} />
          </a>
        </div>
        <div className="item">
          <a href="https://codepen.io/mierz/full/bRqEPg/" target="_blank">
            <img src={gameoflife_img} />
          </a>
        </div>
        <div className="item">
          <a href="https://codepen.io/mierz/full/YZRjBN/" target="_blank">
            <img src={weather_img} />
          </a>
        </div>
      </div>
    );
  }
}

export default Portfolio;
