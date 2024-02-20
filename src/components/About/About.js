import React from 'react'
import {Row, Container} from 'react-bootstrap';
import Signature from '../../images/signature.png';

const About = () => {
  return (
    <div className="about-us">
        <Container>
            <Row>
                <div className="about-us-wrp">
                    <div className="main-heading">
                        <h3>About Us</h3>
                    </div>
                    <div className="sub-heading">
                        <p>Divide have don't man wherein air fourth. Own itself make have night won't make. A you under Seed appear which good give. Own give air without fowl moveth dry first heaven fruit, dominion she'd won't very all.</p>
                    </div>
                    <div className="signature">
                        <img src={Signature} alt="signature" className="img-fluid"/>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default About