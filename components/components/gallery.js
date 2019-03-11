import { Component } from 'react'
import { Carousel, CarouselItem, CarouselIndicators, CarouselCaption } from 'reactstrap'

const items = [

{
	src: '/static/gallery/allie2.jpg',

},
{
    src: '/static/gallery/allie3.jpg',
},
{
    src: '/static/gallery/allie4.jpg',
},
{
    src: '/static/gallery/allie5.jpg',
},
{
    src: '/static/carousel/edgar.jpg',
},
]

class Gallery extends Component {
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
				<img src={`${item.src}`}  />
				<div className="carousel-img" />
				<CarouselCaption captionText='' captionHeader='' />
				</CarouselItem>
				)
		})

		return (
			<div   data-aos="zoom-out-right" >
			<Carousel  slide={false} interval={2500} className="gallery-carousel-fade" activeIndex={activeIndex} next={this.next} previous={this.previous}>

			{slides}
		        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />

			</Carousel>
			</div>
			)
	}
}

export default Gallery
