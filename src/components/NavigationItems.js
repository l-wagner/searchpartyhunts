import React, { Component } from "react";

import ScrollIntoView from "react-scroll-into-view";
import { Translate } from "react-localize-redux";

export default class NavigationItems extends Component {
      render() {
            return (
                  <div
                        className={`navigation-items ${
                              this.props.isMobile ? "is-mobile" : ""
                        }`}
                  >
                        <ScrollIntoView selector="#howitworks-section">
                              <div>
                                    <Translate id="header.navbar.how" />
                              </div>
                        </ScrollIntoView>

                        <ScrollIntoView selector="#testimonials-gallery-section">
                              <div>
                                    <Translate id="header.navbar.gallery" />
                              </div>
                        </ScrollIntoView>
                        <ScrollIntoView selector="#testimonials-gallery-section">
                              <div>
                                    <Translate id="header.navbar.testimonials" />
                              </div>
                        </ScrollIntoView>

                        <ScrollIntoView selector="#about-section">
                              <a
                                    ref="navbar-contact-btn"
                                    id="navbar-contact-btn"
                                    className={`navbar-contact-btn ${
                                          this.props.popupIsClosing
                                                ? "popup-is-closing"
                                                : ""
                                    }`}
                              >
                                    <Translate id="header.navbar.contact" />
                              </a>
                        </ScrollIntoView>
                  </div>
            );
      }
}

// <Link href="/showcase">
//           <a>
//             <Trans i18nKey="header:navbar.gallery" />
//           </a>
//         </Link>
