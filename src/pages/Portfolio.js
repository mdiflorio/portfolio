import React, { Component } from "react";
import Modal from "react-responsive-modal";

import content_en from "../content/portfolio/en";
import content_fr from "../content/portfolio/fr";

class Portfolio extends Component {
  state = {
    openModal: false,
    selectedItem: {},
    selectedImgInModal: ""
  };

  onOpenModal = item => {
    this.setState({ openModal: true, selectedItem: item });
  };

  onCloseModal = () => {
    this.setState({ openModal: false, selectedItem: {} });
  };

  render() {
    const { language } = this.props;
    const content = language == "EN" ? content_en : content_fr;
    return (
      <div className="container">
        <Modal open={this.state.openModal} onClose={this.onCloseModal} center>
          <SelectedItemContent
            item={this.state.selectedItem}
            language={language}
          />
        </Modal>
        {content.map(item => (
          <div className="item" key={item.title}>
            <button onClick={this.onOpenModal.bind(null, item)}>
              <img src={item.mainImg} alt={item.title} />
            </button>
          </div>
        ))}
      </div>
    );
  }
}

class SelectedItemContent extends Component {
  state = {
    selectedImg: this.props.item.imgs[0]
  };

  selectImg = selectedImg => {
    this.setState({ selectedImg });
  };

  render() {
    const { item, language } = this.props;
    return (
      <div className="modalContainer">
        <div className="imgsContainer">
          <img className="mainImg" src={this.state.selectedImg} />
          <div className="imgBar">
            {Object.keys(item).length > 0 &&
              item.imgs.map(image => (
                <button onClick={this.selectImg.bind(this, image)}>
                  <img className="thumb" key={image} src={image} />
                </button>
              ))}
          </div>
        </div>
        <div>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <h2>{language == "EN" ? "Tools" : "Outils"}</h2>
          <div className="toolIconsContainer">
            {Object.keys(item).length > 0 &&
              item.toolIcons.map(icon => (
                <div className="tooltip">
                  <span className="tooltiptext">{icon.name}</span>
                  <i className={icon.icon} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
