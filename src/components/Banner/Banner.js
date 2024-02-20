import React from 'react'
import bannerlogo from '../../images/banner.jpg';
import {Row, Col, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div class="banner-wrp">
        <Container>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} xll={6} className="banner-tb">
                    <div className="banner-img">
                        <img src={bannerlogo} alt="banner" className='img-fluid'/>
                    </div>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6} xll={6}>
                    <div className="banner-main">
                        <div className="main-title">
                            <h1>We Design and Develop</h1>
                        </div>
                        <div className="sub-title">
                            <p>We are a new design studio based in USA. We have over 20 years of combined experience, and know a thing or two about designing websites and mobile apps.</p>
                        </div>
                        <Link to="/Contact" className="skycolor btn">contact us</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner