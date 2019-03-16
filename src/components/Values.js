import React, { Component } from "react";
import { Translate } from "react-localize-redux";
import MediaQuery from "react-responsive";

import BusinessIcon from "@material-ui/icons/BusinessCenter";
import HeartIcon from "@material-ui/icons/Favorite";
import SpaIcon from "@material-ui/icons/Spa";
import ListIcon from "@material-ui/icons/List";
import CakeIcon from "@material-ui/icons/Cake";

const Values = (
  <section id="values-section">
    <MediaQuery minWidth={599}>
      {matches => {
        return matches ? (
          <div className="values" data-aos="fade-up" data-aos-duration="500">
            <div>
              <ListIcon />
              <p>
                <Translate id="values.value-2" />
              </p>
            </div>
            <div>
              <CakeIcon />
              <p>
                <Translate id="values.value-1" />
              </p>
            </div>
            <div>
              <HeartIcon />
              <p>
                <Translate id="values.value-3" />
              </p>
            </div>
            <div>
              <BusinessIcon />
              <p>
                <Translate id="values.value-4" />
              </p>
            </div>
          </div>
        ) : (
          <div className="values">
            <div data-aos="fade-up" data-aos-duration="500">
              <ListIcon />
              <p>
                <Translate id="values.value-2" />
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="500">
              <CakeIcon />
              <p>
                <Translate id="values.value-1" />
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="500">
              <HeartIcon />
              <p>
                <Translate id="values.value-3" />
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="500">
              <BusinessIcon />
              <p>
                <Translate id="values.value-4" />
              </p>
            </div>
          </div>
        );
      }}
    </MediaQuery>
  </section>
);

export default Values;
