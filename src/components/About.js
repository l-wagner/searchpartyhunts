import React, { Component } from "react";
import { Translate } from "react-localize-redux";
import SearchIcon from '@material-ui/icons/Search'
import Form from './Form'

const About = () => (
  <React.Fragment>
    <div className="label"><Translate id={'about.header'}/></div>
    <div className="about-contact">
      <div className="about">
        <div><Translate id={'about.text'}/></div>
        <div><span><SearchIcon/></span><Translate id={'about.signature'}/></div>
        <br />
      </div>
      <Form />
    </div>
  </React.Fragment>
)

export default (About)