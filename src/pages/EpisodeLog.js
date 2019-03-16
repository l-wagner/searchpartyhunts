import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";

import './EpisodeLog.scss'

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

function EpisodeLog(props) {
  const { classes } = props;

  return (
    <div className="EpisodeLog">
      <div className="player"> LOGO </div>
      <div className="description"> PLAYER </div>
      
      
    </div>
  );
}

EpisodeLog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EpisodeLog);
