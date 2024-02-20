import React from 'react'
import { Row, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import client1 from '../../images/client-1.png';
import client2 from '../../images/client-2.png';
import client3 from '../../images/client-3.png';
import client4 from '../../images/client-4.png';
import client5 from '../../images/client-5.png';

const Logos = () => {
var logosettings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        }
    ]
    };
  return (
    <div className="logos">
        <Container>
            <Row>
                {/* <div className="customer-logos"> */}
                <Slider {...logosettings} className="customer-logos">
                    <div className="slide-logo"><img src={client1} alt='client-logo'/></div>
                    <div className="slide-logo"><img src={client2} alt='client-logo'/></div>
                    <div className="slide-logo"><img src={client3} alt='client-logo'/></div>
                    <div className="slide-logo"><img src={client4} alt='client-logo'/></div>
                    <div className="slide-logo"><img src={client5} alt='client-logo'/></div>
                    <div className="slide-logo"><img src={client1} alt='client-logo'/></div>
                    <div className="slide-logo"><img src={client2} alt='client-logo'/></div>
                    <div className="slide-logo"><img src={client3} alt='client-logo'/></div>
                    <div className="slide-logo"><img src={client4} alt='client-logo'/></div>
                    <div className="slide-logo"><img src={client5} alt='client-logo'/></div>
                </Slider>
                {/* </div> */}
            </Row>
        </Container>
    </div>
  )
}

export default Logos