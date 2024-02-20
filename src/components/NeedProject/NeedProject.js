import React from 'react'
import {Row, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NeedProject = () => {
  return (
    <div className="contact-us about-page-contact-us">
        <Container>
            <Row className='d-flex justify-content-center'>
                <div className="col-lg-9 col-xl-9 col-xxl-9 contact-wrp text-center">
                    <div className="main-heading">
                        <h3>Need a Project?</h3>
                    </div>
                    <div className="sub-heading">
                        <p>Let us know what you're looking for in an agency. We'll take a look and see if this could be the start of something beautiful.</p>
                    </div>
                </div>
            </Row>
            <div className="form  d-flex justify-content-center">
                <div className="row col-lg-9 col-xl-9 col-xxl-9">
                    <div className="col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center">
                        <Link to="/" className="skycolor btn">send message</Link>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default NeedProject