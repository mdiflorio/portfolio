import React, { Component } from "react";
import Modal from "react-responsive-modal";
import Slider from "react-slick";

import { portfolioContent } from "../content/portfolio";

class Portfolio extends Component {
  state = {
    openModal: false,
    selectedItem: {}
  };

  onOpenModal = item => {
    this.setState({ openModal: true, selectedItem: item });
  };

  onCloseModal = () => {
    this.setState({ openModal: false, selectedItem: {} });
  };

  render() {
    return (
      <div className="container">
        <Modal open={this.state.openModal} onClose={this.onCloseModal} center>
          <SelectedItemContent item={this.state.selectedItem} />
        </Modal>
        {portfolioContent.map(item => (
          <div className="item">
            <button onClick={this.onOpenModal.bind(null, item)}>
              <img src={item.imgs[0]} alt={item.title} />
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const SelectedItemContent = ({ item }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };
  return (
    <div className="modalContainer">
      <Slider {...settings} className="slider">
        {Object.keys(item).length > 0 &&
          item.imgs.map(image => (
            <div>
              <img src={image} />
            </div>
          ))}
      </Slider>
      <div>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default Portfolio;
