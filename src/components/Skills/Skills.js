import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import bannerlogo from '../../images/banner.jpg';
import signature from '../../images/signature.png';

const Skills = () => {
  return (
    <div className="skills about-page-skills">
        <Container>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} xll={6}>
                    <div className="skill-img">
                        <img src={bannerlogo} alt="about-us" className="img-fluid"/>
                    </div>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6} xll={6}>
                    <div className="about-us-wrp">
                        <div className="main-heading">
                            <h3>About Me</h3>
                        </div>
                        <div className="sub-heading">
                            <p>Given let waters air sea had you'll, may seed abundantly fish. Were, you'll earth forth winged above brought. Own darkness they're him can't fourth sea place have.</p>
                            <p>So the above May stars cattle fruitful face shall. Tree it, winged. Every signs male firmament us. Morning him.</p>
                        </div>
                        <div className="signature"><img src={signature} alt="signature" className="img-fluid"/></div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Skills