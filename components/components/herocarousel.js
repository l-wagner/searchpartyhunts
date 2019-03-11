import { Component } from 'react'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'

// const items_old = [
//   {
//     // src: '/static/celebrations.jpg',
//     src: '/static/wildcard.jpg',
    
//     caption: 'CELEBRATIONS',
//   },
//   {
//     src: '/static/themes.jpg',

//     caption: 'THEMES',
    
//   },
//   {
//     // src: '/static/wildcard.jpg',
//     src: '/static/edgar.jpg',
//     caption: 'WILD CARD',
    
//   },
//   {
//     // src: '/static/corporate.jpg',
//     src: '/static/business.jpg',
//     caption: 'CORPORATE',
    
//   },
// ]

const items = [
  {
    // src: '/static/celebrations.jpg',
    src: '/static/carousel/main.jpg',
    
    caption: 'CUSTOMIZED SCAVENGER HUNTS',
  },
  {
    // src: '/static/carousel/corporate.jpg',
    src: '/static/carousel/celebrations.jpg',
    caption: 'CELEBRATIONS',
    
  },
  {
    src: '/static/carousel/edgar.jpg',
    caption: 'THEMES',
    
  },
  
  {
    // src: '/static/carousel/wildcard.jpg',
    src: '/static/carousel/wildcard.jpg',
    caption: 'WILD CARD',
    
  },
  {
    // src: '/static/carousel/corporate.jpg',
    src: '/static/carousel/business.jpg',
    src: 'https://drive.google.com/uc?export=view&id=1dbSQT3epoz_V0lvssg7WFml3SmWDUDzb',
    caption: 'CORPORATE CHALLENGE',
    
  },
  
]

class HeroCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const slides = items.map(item => {
      
      return (
        <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
          <img src={`${item.src}`} alt={item.caption} />
          <div className="carousel-img" alt={item.caption} />
          <CarouselCaption captionText='' captionHeader={item.caption} />
        </CarouselItem>
      )
    })

    return (
      <Carousel  interval='6500' activeIndex={activeIndex} next={this.next} previous={this.previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    )
  }
}

export default HeroCarousel
