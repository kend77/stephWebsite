import React, { Component } from 'react'
import Slider from 'react-slick'
import './carousel.css'

class Carousel extends Component {

  render() {
    const { folder } = this.props
    const settings = {
      customPaging: (i) => {
        return <img className="custom-page" src={`/images/${folder}/${i + 1}.jpg`} />;
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div id="carousel">
        <Slider {...settings} className="carousel-item">
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map(picNumber => {
            return (
              <div ><img className="images" src={`/images/${folder}/${picNumber}.jpg`} alt="hello"/></div>
            )
          })}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
