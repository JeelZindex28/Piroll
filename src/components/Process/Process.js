import React ,{ useState } from 'react'
import bannerlogo from '../../images/banner.jpg';
import videomp4 from '../../images/video.mp4'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const Process = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const svgContent = `
    <svg fill="#10c9c3" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100px" height="100px" viewBox="-81.64 -81.64 571.50 571.50" xml:space="preserve" stroke="#10c9c3" stroke-width="40.8221" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(104.096355,104.096355), scale(0.49)"><rect x="-81.64" y="-81.64" width="571.50" height="571.50" rx="285.75" fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="7.3479779999999995"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M204.11,0C91.388,0,0,91.388,0,204.111c0,112.725,91.388,204.11,204.11,204.11c112.729,0,204.11-91.385,204.11-204.11 C408.221,91.388,316.839,0,204.11,0z M286.547,229.971l-126.368,72.471c-17.003,9.75-30.781,1.763-30.781-17.834V140.012 c0-19.602,13.777-27.575,30.781-17.827l126.368,72.466C303.551,204.403,303.551,220.217,286.547,229.971z"></path> </g> </g> </g></svg>
  `;
  return (
    <div className="our-work">
        <div className="container">
            <div className="our-work-wrp text-center">
                <div className="main-heading">
                    <h3>Our Work Process</h3>
                </div>
                <div className="sub-heading">
                    <p>Was years it seasons was there form he in in them together over that, third sixth gathered female creeping bearing behold years.</p>
                </div>
            </div>

            <div className="our-work-video">
                <div className="video-container" id="video-container">
                    <img src={bannerlogo} classNameName='img-fluid' alt="video-banner"/>
                    <div className="play-button-wrapper">
                        <Link to="/" title="Play video" className="play-gif" id="circle-play-b" variant="primary"  onClick={handleShow} dangerouslySetInnerHTML={{ __html: svgContent }}>
                        </Link>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} className='newmodel' size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                <video controls autoplay poster={bannerlogo} id="video" preload="metadata">
                    <source src={videomp4} type="video/mp4"/>
                </video>
                </Modal.Body>
            </Modal>
            {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-footer">
                            <button type="button" className="skycolor btn"  data-bs-dismiss="modal">Close</button>
                        </div>
                        <video controls autoplay id="video" preload="metadata" poster="./images/banner.jpg">
                            <source src="./images/video-1.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div> */}

        </div>
    </div>
  )
}

export default Process
