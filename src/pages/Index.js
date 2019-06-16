import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { withLocalize } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";

import AOS from "aos";
import "aos/src/sass/aos.scss";
import "bootstrap/scss/bootstrap.scss";

import en from "../content/en.json";
import Header from "../components/Header";
import Popup from "../components/Popup";
import Socials from "../components/Socials";
import HeroCarousel from "../components/HeroCarousel";
import Values from "../components/Values";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import RotatingList from "../components/RotatingList";

import MediaQuery from "react-responsive";
import { Translate } from "react-localize-redux";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SearchIcon from "@material-ui/icons/Search";

import {
  OneIcon,
  TwoIcon,
  ThreeIcon,
  FourIcon
} from "../components/icons/numbers.js";

import BusinessIcon from "@material-ui/icons/BusinessCenter";
import HeartIcon from "@material-ui/icons/Favorite";

import ListIcon from "@material-ui/icons/List";
import CakeIcon from "@material-ui/icons/Cake";

import "./Index.scss";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: true
    };
    this.props.initialize({
      languages: [{ name: "English", code: "en" }],
      translation: en,
      options: {
        renderToStaticMarkup,
        renderInnerHtml: true
      }
    });
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.buttonClick = this.buttonClick.bind(this);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      // alert('You clicked outside of me!')
      this.buttonClick();
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
  }

  buttonClick() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  componentDidMount() {
    if (window) {
      AOS.init({
        once: true
        // offset: 200,
        // duration: 600,
        // easing: 'ease-in-sine',
        // delay: 100,
      });
    }
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="wrapper">
        <Header popupIsClosing={!this.state.showPopup} />
        <div ref={this.setWrapperRef}>
          <Popup
            onTransitionEnd={this.transitionEnd}
            mounted={this.state.showPopup}
            onClick={this.buttonClick.bind(this)}
          />
        </div>
        <div role="div">
          <HeroCarousel />

          <section id="values-section">
            <Values/>
          </section>
          <section id="howitworks-section">
            <div className="how-it-works">
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  icon={<OneIcon />}
                >
                  <h4 className="vertical-timeline-element-subtitle">
                    <Translate id="howitworks.step-1" />
                  </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  icon={<TwoIcon />}
                >
                  <h4 className="vertical-timeline-element-subtitle">
                    <Translate id="howitworks.step-2" />
                    <RotatingList/>

                  </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  icon={<ThreeIcon />}
                >
                  <h4 className="vertical-timeline-element-subtitle">
                    <Translate id="howitworks.step-3" />
                  </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  icon={<FourIcon />}
                >
                  <h4 className="vertical-timeline-element-subtitle">
                    <Translate id="howitworks.step-4" />
                  </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--last"
                  icon={<SearchIcon />}
                />
              </VerticalTimeline>
            </div>
          </section>
          <section id = "testimonials-gallery-section" className="testimonials-gallery-section">
            <div className="testimonials-gallery-section">
              <Gallery />
              <Testimonials />
            </div>
          </section>
         <footer>
            <p className="test" ></p>
            <div>
            <Socials/>
            </div>
            <p className="test" />
            </footer>

        </div>
      </div>
    );
  }
}
Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withLocalize(withStyles(styles)(Index));
