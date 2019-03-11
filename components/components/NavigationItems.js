import { Component } from 'react'
import { Trans } from 'react-i18next'
import ScrollIntoView from 'react-scroll-into-view'

import Link from 'next/link'

export default class NavigationItems extends Component {
  render() {
    return (
      <div className={`navigation-items ${this.props.isMobile ? 'is-mobile' : ''}`}>
      <ScrollIntoView selector="#how-it-works-section">
      <div>
      <Trans i18nKey="header:navbar.how" />
      </div>
      </ScrollIntoView>
      
      <ScrollIntoView selector="#testimonials-gallery-section">
      <div>
      <Trans i18nKey="header:navbar.gallery" />
      </div>
      </ScrollIntoView>
      <ScrollIntoView selector="#testimonials-gallery-section">
      <div>
      <Trans i18nKey="header:navbar.testimonials" />
      </div>
      </ScrollIntoView>
      

      
      <ScrollIntoView selector="#about-section">
      <a
      ref="navbar-contact-btn"
      id="navbar-contact-btn"
      className={`navbar-contact-btn ${this.props.popupIsClosing ? 'popup-is-closing' : ''}`}
      >
      <Trans i18nKey="header:navbar.contact" />
      </a>
      </ScrollIntoView>
      </div>
      )
  }
}


// <Link href="/showcase">
//           <a>
//             <Trans i18nKey="header:navbar.gallery" />
//           </a>
//         </Link>