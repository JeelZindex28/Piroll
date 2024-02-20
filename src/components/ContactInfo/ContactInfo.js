import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const ContactInfo = () => {
  return (
    <div className="skills contact-page">
        <Container>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} xll={6}>
                    <div className="about-us-wrp">
                        <div className="main-heading">
                            <h3>Contact Info:</h3>
                        </div>
                        <div className="sub-heading">
                            <p>To give give beginning divide, cattle. Give moving won't, there the abundantly she'd she'd brought air upon. Light hath subdue. Life days creature upon first heaven gathering dry.</p>
                        </div>
                        <div className="contact-page-wrp">
                            <ul>
                                <li><b>Address:</b> <span><a href="https://goo.gl/maps/wZPteCEuj1hwmtTT6">10111 Santa Monica Boulevard, LA</a></span></li>
                                <li><b>Phone:</b> <span><a href="tel:+44987065908">+44 987 065 908</a></span></li>
                                <li><b>Email:</b> <span><a href="mailto:info@Example.com">info@Example.com</a></span></li>
                                <li><b>Fax:</b> <span><a href="tel:+44987065908">+44 987 065 908</a></span></li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6} xll={6}>
                    <div className="form  d-flex justify-content-center">
                        <Form>
                            <Row>
                                <Col sm={6} md={6} lg={6} xl={6} xll={6}>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Control type="text" id="your-name" name="your-name" placeholder="Youe Name" required />
                                    </Form.Group>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6} xll={6}>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Control type="text" id="your-name" name="your-name" placeholder="Youe Name" required />
                                    </Form.Group>
                                    {/* <input type="email" className="form-control" id="your-email" name="your-email" placeholder="Youe Email" required> */}
                                </Col>
                                <Col sm={12} md={12} lg={12} xl={12} xll={12}>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Control type="text" id="your-name" name="your-name" placeholder="Youe Name" required />
                                    </Form.Group>
                                    {/* <input type="text" className="form-control" id="your-title" name="your-title" placeholder="Youe Title" required> */}
                                </Col>
                                <Col sm={12} md={12} lg={12} xl={12} xll={12}>
                                    <textarea className="form-control" name="your-comment" id="your-comment" cols="30"  rows="5" placeholder="Your Comment" required></textarea>
                                </Col>
                                <Col sm={12} md={12} lg={12} xl={12} xll={12}>
                                    <button type="submit"><Link to='/' className="skycolor btn">send message</Link></button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ContactInfo