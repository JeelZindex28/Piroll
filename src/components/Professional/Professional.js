import React from 'react'
import {Row, Col, Container, ProgressBar} from 'react-bootstrap';
import bannerbg from '../../images/banner.jpg';


const Professional = () => {
  return (
    <div class="skills">
        <Container>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} xll={6}>
                    <div class="skills-wrp">
                        <div class="main-heading">
                            <h3>Professional Skills</h3>
                        </div>
                        <div class="skills-contant">
                            <p>UI/UX DESIGN <span>75%</span></p>
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <ProgressBar now={75} />
                            </div>
                        </div>
                        <div class="skills-contant">
                            <p>WEB DEVELOPMENT <span>90%</span></p>
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <ProgressBar now={90} />
                            </div>
                        </div>
                        <div class="skills-contant">
                            <p>MARKETING <span>65%</span></p>
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <ProgressBar now={65} />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6} xll={6}>
                    <div class="skill-img">
                        <img src={bannerbg} alt="about-us" class="img-fluid"/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Professional