import React from 'react'
import {Row, Col} from 'react-bootstrap';
import work from '../../images/work.jpg';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { Link } from 'react-router-dom';


class Work extends React.Component {
    constructor(props) {
      super(props);
  
      this.onInit = this.onInit.bind(this);
    }
  
    onInit() {
      console.log('lightGallery has been initialized');
    }
  
    render() {
      return (
        <div className="work">
          <LightGallery
            onInit={this.onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}>
            <Row>
                <Col lg={3} md={4} sm={6} col={12}>
                    <Link to='/'>
                        <img alt="img1" src={work} className='img-fliud'/>
                    </Link>
                </Col>
                
                <Col lg={3} md={4} sm={6} col={12}>
                    <a href={work}>
                        <img alt="img1" src={work} className='img-fliud' />
                    </a>
                </Col>
                
                <Col lg={3} md={4} sm={6} col={12}>
                    <a href={work}>
                        <img alt="img1" src={work} className='img-fliud' />
                    </a>
                </Col>
                
                <Col lg={3} md={4} sm={6} col={12}>
                    <a href={work}>
                        <img alt="img1" src={work} className='img-fliud' />
                    </a>
                </Col>
                <Col lg={3} md={4} sm={6} col={12}>
                    <a href={work}>
                        <img alt="img1" src={work} className='img-fliud' />
                    </a>
                </Col>
                
                <Col lg={3} md={4} sm={6} col={12}>
                    <a href={work}>
                        <img alt="img1" src={work} className='img-fliud' />
                    </a>
                </Col>
                <Col lg={3} md={4} sm={6} col={12}>
                    <a href={work}>
                        <img alt="img1" src={work} className='img-fliud' />
                    </a>
                </Col>
                
                <Col lg={3} md={4} sm={6} col={12}>
                    <a href={work}>
                        <img alt="img1" src={work} className='img-fliud' />
                    </a>
                </Col>
                <Col lg={3} md={4} sm={6} col={12}>
                    <a href={work}>
                        <img alt="img1" src={work} className='img-fliud' />
                    </a>
                </Col>
                
                <Col lg={3} md={4} sm={6} col={12}>
                    <a href={work}>
                        <img alt="img1" src={work} className='img-fliud' />
                    </a>
                </Col>
                <Col lg={3} md={4} sm={6} col={12}>
                    <a href={work}>
                        <img alt="img1" src={work} className='img-fliud' />
                    </a>
                </Col>
                
                <Col lg={3} md={4} sm={6} col={12}>
                    <a href={work}>
                        <img alt="img1" src={work} className='img-fliud' />
                    </a>
                </Col>
                
            </Row>
          </LightGallery>
        </div>
      );
    }
  }
  


export default Work