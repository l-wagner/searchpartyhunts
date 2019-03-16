import React, { Component } from "react";

import CloseIcon from "@material-ui/icons/Cancel";
// import Socials from "./socials";
// import Form from "./form";
// dissappear on scroll
// shared state between all contact forms with prepopulation if they entered anything
// once it was focused, no disappear on scroll

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.transitionEnd = this.transitionEnd.bind(this);
    this.mountStyle = this.mountStyle.bind(this);
    this.unMountStyle = this.unMountStyle.bind(this);
    this.state = {
      //base css
      show: true,
      style: {
        // opacity: 1,
        // transition: 'all 1s ease',
      }
    };
  }

  componentWillReceiveProps(newProps) {
    //check for the mounted props
    if (!newProps.mounted) return this.unMountStyle(); //call outro animation when mounted prop is false
    this.setState({
      //remount the node when the mounted prop is true
      show: true
    });
    // setTimeout(this.mountStyle, 10) //call the into animiation
  }

  unMountStyle() {
    //css for unmount animation
    this.setState({
      style: {
        opacity: 0,
        transition: "all 600ms ease"
      }
    });
  }

  mountStyle() {
    // css for mount animation
    this.setState({
      style: {
        // opacity: 1,
        // transition: 'all 2s ease',
      }
    });
  }

  transitionEnd() {
    if (!this.props.mounted) {
      //remove the node on transition end when the mounted prop is false
      this.setState({
        show: false
      });
    }
  }

  render() {
    return (
      this.state.show && (
        <div
          className="popup-contact"
          style={this.state.style}
          onTransitionEnd={this.transitionEnd}
          data-aos="zoom-out"
          data-aos-duration="700"
        >
          <div className="label">
            Contact Us!
            <CloseIcon className="icon" onClick={this.props.onClick} />
          </div>
          <div className="popup-grid">
            <div className="socials" />
            <div className="or">or</div>
          </div>
        </div>
      )
    );
  }
}
