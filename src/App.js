import React, { Component } from "react";
import AnimateHeight from "react-animate-height";
import { Card } from "antd";
import "./App.css";
import 짜장면 from "./짜장면.jpg";
import 짬뽕 from "./짬뽕.jpg";
import "antd/dist/antd.css";

class App extends Component {
  state = {
    redRatio: 0,
    blueRatio: 0
  };

  onCardClick = () => {
    this.props.redRatio > this.props.blueRatio
      ? this.setState({
          redRatio: this.props.blueRatio,
          blueRatio: this.props.blueRatio
        })
      : this.setState({
          redRatio: this.props.redRatio,
          blueRatio: this.props.redRatio
        });
    setTimeout(() => {
      this.setState({
        redRatio: this.props.redRatio,
        blueRatio: this.props.blueRatio
      });
    }, 600);
  };

  render() {
    const { redRatio, blueRatio } = this.state;
    const cardBodyStyle = {
      width: "100%",
      padding: "0"
    };
    return (
      <div className="main">
        <Card
          bodyStyle={cardBodyStyle}
          className="choose-image-wrapper"
          onClick={this.onCardClick}
        >
          <img className="choose-image" src={짜장면} alt="짜장면" />
        </Card>
        <div className="percentage-box-wrapper">
          <AnimateHeight
            duration={400}
            height={`${redRatio}%`}
            contentClassName={`percentage-box red-gd`}
          />
          <AnimateHeight
            duration={400}
            height={`${blueRatio}%`}
            contentClassName={`percentage-box blue-gd`}
          />
        </div>
        <Card
          bodyStyle={cardBodyStyle}
          className="choose-image-wrapper"
          onClick={this.onCardClick}
        >
          <img className="choose-image" src={짬뽕} alt="짬뽕" />
        </Card>
      </div>
    );
  }
}

App.defaultProps = {
  redRatio: 71.9,
  blueRatio: 28.1
};

export default App;
