import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import diamond from '../../images/diamond.svg';
import arc from '../../images/arc.svg';
import phone from '../../images/phone.svg';
import joy from '../../images/joy.svg';
import plane from '../../images/plane.svg';
import star from '../../images/star.svg';
import magicwand from '../../images/magic-wand.svg';
import paintbucket from '../../images/paint-bucket.svg';

const SectionProcess = () => {
  return (
    <div className="services">
			<Container>
				<Row>
					<Col sm={6} md={6} lg={3} xl={3} xxl={3}>
						<div className="services-wrp">
							<div className="service-icon">
                                <img src={diamond} alt="diamond" className="img-fluid"/>
							</div>
							<div className="contant-number">
								<span>UI / UX DESIGN</span>
							</div>
							<div className="service-contain">
								<h6>Be set fourth land god darkness make it wherein own</h6>
							</div>
						</div>
					</Col>
					<Col sm={6} md={6} lg={3} xl={3} xxl={3}>
						<div className="services-wrp">
							<div className="service-icon">
                                <img src={arc} alt="arc" className="img-fluid"/>
							</div>
							<div className="contant-number">
								<span>WEB DEVELOPMENT</span>
							</div>
							<div className="service-contain">
								<h6>A she'd them bring void moving third she'd kind fill</h6>
							</div>
						</div>
					</Col>
					<Col sm={6} md={6} lg={3} xl={3} xxl={3}>
						<div className="services-wrp">
							<div className="service-icon">
                            <img src={phone} alt="phone" className="img-fluid"/>
							</div>
							<div className="contant-number">
								<span>APP / MOBILE</span>
							</div>
							<div className="service-contain">
								<h6>Dominion man second spirit he, earth they're creeping</h6>
							</div>
						</div>
					</Col>
					<Col sm={6} md={6} lg={3} xl={3} xxl={3}>
						<div className="services-wrp">
							<div className="service-icon">
                            <img src={joy} alt="joy" className="img-fluid"/>
							</div>
							<div className="contant-number">
								<span>GAME DESIGN</span>
							</div>
							<div className="service-contain">
								<h6>Morning his saying moveth it multiply appear life be</h6>
							</div>
						</div>
					</Col>
			
					<Col sm={6} md={6} lg={3} xl={3} xxl={3}>
						<div className="services-wrp">
							<div className="service-icon">
                            <img src={plane} alt="plane" className="img-fluid"/>
							</div>
							<div className="contant-number">
								<span>SEO / MARKETING</span>
							</div>
							<div className="service-contain">
								<h6>Give won't after land fill creeping meat you, may</h6>
							</div>
						</div>
					</Col>
					<Col sm={6} md={6} lg={3} xl={3} xxl={3}>
						<div className="services-wrp">
							<div className="service-icon">
                            <img src={star} alt="star" className="img-fluid"/>
							</div>
							<div className="contant-number">
								<span>PHOTOGRAPHY</span>
							</div>
							<div className="service-contain">
								<h6>Creepeth one seas cattle grass give moving saw give</h6>
							</div>
						</div>
					</Col>
					<Col sm={6} md={6} lg={3} xl={3} xxl={3}>
						<div className="services-wrp">
							<div className="service-icon">
                            <img src={magicwand} alt="magicwand" className="img-fluid"/>
							</div>
							<div className="contant-number">
								<span>GRAPHIC DESIGN</span>
							</div>
							<div className="service-contain">
								<h6>Open, great whales air rule for, fourth life whales</h6>
							</div>
						</div>
					</Col>
					<Col sm={6} md={6} lg={3} xl={3} xxl={3}>
						<div className="services-wrp">
							<div className="service-icon">
                            <img src={paintbucket} alt="paintbucket" className="img-fluid"/>
							</div>
							<div className="contant-number">
								<span>ILLUSTRATIONS</span>
							</div>
							<div className="service-contain">
								<h6>Whales likeness hath, man kind for them air two won't</h6>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
  )
}

export default SectionProcess