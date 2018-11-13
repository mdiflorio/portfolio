import React, { Component } from "react";
import Modal from "react-responsive-modal";

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
              <img src={item.img_src} alt={item.title} />
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const SelectedItemContent = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
    </div>
  );
};

export default Portfolio;
