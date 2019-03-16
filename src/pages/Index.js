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
      </div>
    );
  }
}
// function Index(props) {
//   const { classes } = props;

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={24}>
//         <Grid item xs={12}>
//           <Paper className={classes.paper}>xs=12</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withLocalize(withStyles(styles)(Index));
