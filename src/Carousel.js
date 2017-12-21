import React, { Component } from 'react'
import Slider from 'react-slick'
import './carousel.css'
import { withRouter } from 'react-router'
import LoaderComponent from './Loader'

class Carousel extends Component {

  componentDidMount() {
    document.addEventListener('loadeddata', () => {
      console.log('hello')
    })
  }

  render() {
    const { folder } = this.props;


    document.title = `stephanie diaz-${folder}`;

    const settings = {
      customPaging: (i) => {
        return (
          <div
          className="custom-thumbnail"
          >
          <img
          className="thumbnail-image"
          src={`/images/${folder}/${i + 1}.jpg`}
          alt=""
          />
          </div>
        );
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      fade: true,
      pauseOnHover: false,
      arrows: false
    };

    return (
      <div id="carousel">
        <Slider {...settings} className="carousel-item">
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map(picNumber => {
            return (
              <div key={picNumber} className="pic-container"><img className="images" src={`/images/${folder}/${picNumber}.jpg`} alt=""/></div>
            )
          })}
        </Slider>
      </div>
    );
  }
}

export default withRouter(Carousel);
