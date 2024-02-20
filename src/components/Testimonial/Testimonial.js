import React from 'react';
import Slider from 'react-slick';
import { Row, Container } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    };
  return (
    <div className="testimonial">
        <Container>
            <Row>
                <Slider className="myslides-wrp text-center" {...settings}>
                    <div className="myslide">
                        <p>“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.”</p>
                        <span>michael hopkins</span>
                    </div>
                    <div className="myslide">
                        <p>“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.”</p>
                        <span>michael hopkins</span>
                    </div>
                    <div className="myslide">
                        <p>“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.”</p>
                        <span>michael hopkins</span>
                    </div>
                </Slider>
            </Row>
        </Container>
    </div>
  )
}

export default Testimonial