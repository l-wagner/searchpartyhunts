import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

import business from "./images/carousel/business.jpg";
import main from "./images/carousel/mainlight.jpg";
// import main from "./images/carousel/main.jpg";
import celebrations from "./images/carousel/celebrations.jpg";
import edgar from "./images/carousel/edgar.jpg";
import wildcard from "./images/carousel/wildcard.jpg";
// import logo from "./images/carousellogo.png";
import logo from "./images/sphunts4321-tranparant-02.png";

const items = [
  // {
  //   // src: './images/celebrations.jpg',
  //   src: logo,

  //   caption: ""
  // },
  {
    // src: './images/celebrations.jpg',
    src: main,

    caption: ""
  },
  {
    src: edgar,
    caption: "CUSTOMIZED SCAVENGER HUNTS"
  },
  {
    // src: corporate,
    src: celebrations,
    caption: "CELEBRATIONS"
  },
  

  {
    // src: wildcard,
    src: wildcard,
    caption: "WILD CARD"
  },
  {
    // src: './images/carousel/corporate.jpg',
    src: business,
    caption: "CORPORATE CHALLENGE"
  }
];

class HeroCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount = () => {
    let elements = document.getElementsByClassName(
      "carousel-caption d-none d-md-block"
    );
    var domimg = document.createElement("img");
    domimg.src = logo;
    domimg.className = "carousel-logo";
    let child = <img className="carousel-logo" src={logo} />;
    for (var i = elements.length - 1; i >= 0; i--) {
      if (elements[i] instanceof HTMLElement) {
        // eElement.insertBefore(newFirstElement, eElement.firstChild);

        elements[i].insertBefore(domimg, elements[i].firstChild);
      }
    }
    console.log(elements);
    for (let element in elements) {
      console.log(element);
      // element.appendChild(<img className="carousel-logo" src={logo} />);
    }
  };
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={`${item.src}`} alt={item.caption} />

          <div className="carousel-img" alt={item.caption} />

          <CarouselCaption captionText="" captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        interval="6500"
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default HeroCarousel;
