import { Component } from 'react'

import AOS from 'aos'
import 'aos/src/sass/aos.scss'

import 'bootstrap/scss/bootstrap.scss'

import { withI18next } from '../lib/withI18next'

import {
  About,
  Footer,
  Gallery,
  Header,
  HeroCarousel,
  HowItWorks,
  Popup,
  Section,
  Testimonials,
  Values,
} from './components/index'

class Main extends Component {
  constructor(props) {
    super(props)
    this.buttonClick = this.buttonClick.bind(this)
    this.state = {
      showPopup: true,
    }

    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node
  }
  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      // alert('You clicked outside of me!')
      this.buttonClick()
      document.removeEventListener('mousedown', this.handleClickOutside)
    }
  }

  buttonClick() {
    this.setState({
      showPopup: !this.state.showPopup,
    })
  }

  componentDidMount() {
    if (window) {
      AOS.init({
        once: true
        // offset: 200,
        // duration: 600,
        // easing: 'ease-in-sine',
        // delay: 100,
      })
    }
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  render() {
    return (
      <div className="wrapper">
        <React.Fragment>
          <Header popupIsClosing={!this.state.showPopup} />

          {/*<div className="under-construction">
            This website is under construction! Reach out under{' '}
            <a href="mailto:info@searchpartyhunts.com?Subject=Hi%2there" target="_top">
              info@searchpartyhunts.com
            </a>
          </div>*/}
          <div ref={this.setWrapperRef}>
            <Popup
              onTransitionEnd={this.transitionEnd}
              mounted={this.state.showPopup}
              onClick={this.buttonClick.bind(this)}
            />
          </div>
          <main role="main">
            <HeroCarousel />
            <Section name="values">
              <Values />
            </Section>
            <Section name="how-it-works">
              <HowItWorks />
            </Section>
            
            
            <Section name="testimonials-gallery">
              <div className ="testimonials-gallery-section">
                <Gallery/>
                <Testimonials />
              </div>
            </Section>
            <Section name="about">
              <About />
            </Section>
          </main>
          <Footer />
        </React.Fragment>
      </div>
    )
  }
}

export default withI18next(['home'])(Main)
