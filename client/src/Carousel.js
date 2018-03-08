import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import './carousel.css'
import { withRouter } from 'react-router'
import { Modal, Image } from 'semantic-ui-react'
import axios from 'axios'

class Carousel extends Component {

  constructor() {
    super()
    this.state = {
      slideNumber: 0,
      currentSlide: 0,
      numImages: 0
    }
    this.onOpen = this.onOpen.bind(this)
  }
  componentDidMount() {
    axios.get(`/api/${this.props.folder}`)
      .then(res => {
        console.log(res.data)
        this.setState({numImages: res.data.length})
      })
  }
  onOpen() {
    document.addEventListener('touchstart', () => {
      var event = new KeyboardEvent('keydown', {'key': 'Escape'})
      document.dispatchEvent(event)
    })
  }

  render() {
    const { folder } = this.props;
    const { slideNumber, currentSlide, numImages } = this.state;
    console.log(numImages)
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
      closeOnDocumentClick: true,
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      fade: true,
      pauseOnHover: false,
      touchMove: true,
      beforeChange: (oldIndex, newIndex) => {
        this.setState({ slideNumber: newIndex })
      }
    };

    return (
      <div id="carousel">
        <Slider ref={c => {this.slider = c}} {...settings} className="carousel-item">
          {new Array(numImages).fill(0).map((result, index) => index + 1).map(picNumber => {
            return (
              <div key={picNumber} className="pic-container" >
                <Modal
                dimmer="blurring"
                onOpen={this.onOpen}
                trigger={
                <img
                onClick={() => this.setState({ currentSlide: slideNumber })}
                className="images"
                src={`/images/${folder}/${picNumber}.jpg`}
                alt="" />}
                >
                <Modal.Content className="modal-image-container" style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                  <Image
                  style={{maxWidth: '100%', maxHeight: '100%', margin: 'auto'}}
                  src={`/images/${folder}/${currentSlide + 1}.jpg`}
                  className="oneimage"
                  />
                </Modal.Content>
                </Modal>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}

export default withRouter(Carousel);

Carousel.propTypes = {
  folder: PropTypes.string.isRequired
}
