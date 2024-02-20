import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import portfolio from '../../images/portfolio.svg';
import clock from '../../images/clock.svg';
import starwhite from '../../images/star-white.svg';
import like from '../../images/like.svg';


const Number = () => {
  return (
    <div className="numbers">
        <Container>
            <Row>
                <Col sm={6} md={6} lg={3} xl={3} xll={3}>
                    <div className="number-wrp">
                        <div className="left-number">
                            <img src={portfolio} alt="portfolio" className="img-fluid"/>
                        </div>
                        <div className="right-number">
                            <div className="count-number">
                                <h6>548</h6>
                            </div>
                            <div className="contant-number">
                                <span>projects completed</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3} xll={3}> 
                    <div className="number-wrp">
                        <div className="left-number">
                        <img src={clock} alt="portfolio" className="img-fluid"/>
                        </div>
                        <div className="right-number">
                            <div className="count-number">
                                <h6>1465</h6>
                            </div>
                            <div className="contant-number">
                                <span>working hourse</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3} xll={3}> 
                    <div className="number-wrp">
                        <div className="left-number">
                        <img src={starwhite} alt="portfolio" className="img-fluid"/>
                        </div>
                        <div className="right-number">
                            <div className="count-number">
                                <h6>612</h6>
                            </div>
                            <div className="contant-number">
                                <span>positive feedbacks</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={6} md={6} lg={3} xl={3} xll={3}> 
                    <div className="number-wrp">
                        <div className="left-number">
                            <img src={like} alt="portfolio" className="img-fluid"/>
                        </div>
                        <div className="right-number">
                            <div className="count-number">
                                <h6>735</h6>
                            </div>
                            <div className="contant-number">
                                <span>happy clints</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Number