import { Translate } from "react-localize-redux";
import React, { Component } from "react";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    key: "quote-1",
    quote:
      "I absolutely loved how personal it was to me and the thought you put into it. I keep telling people about it!",
    person: "Allie, bride-to-be",
    caption: "_"
  },
  {
    key: "quote-2",
    quote:
      "I think it’s great for groups like ours where you don’t all know each other. It’s the perfect icebreaker because it gives people something to talk about.",
    person: "Beth, bachelorette party",
    caption: "_"
  },
  {
    key: "quote-3",
    quote:
      "We did an Edgar Allan Poe themed pub crawl and it was the most creative and fun 'grown up' birthday party I’ve ever been to! The puzzles and riddles were super challenging and we really had to work as a team to decode each one. I definitely recommend Search Party.",
    person: "Courtney, birthday party",
    caption: "_"
  },

  {
    key: "quote-5",
    quote:
      "My bachelorette party was unlike anything I had done before and was a fun and special way for me to spend a weekend with all my friends.",
    person: "Molly, bride-to-be",
    caption: "_"
  }
];

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

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
          key={item.key}
        >
          <div className="container">
            <span>{item.quote}</span>{" "}
            <div className="signature">{item.person}</div>
          </div>

          <CarouselCaption captionText="" captionHeader="" />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        className="testimonials"
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
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

export default Testimonials;
