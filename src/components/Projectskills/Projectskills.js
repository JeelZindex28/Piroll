import React from 'react'
import bannerlogo from '../../images/banner.jpg';
import { Link } from 'react-router-dom';

const Projectskills = () => {
const svgContent = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="grid-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-grid-2 fa-lg"><path fill="currentColor" d="M224 80c0-26.5-21.5-48-48-48H80C53.5 32 32 53.5 32 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80zm0 256c0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336zM288 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48zM480 336c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336z" class=""></path></svg>`;
  return (
    <div class="skills project-skills project-skills-slide">
        <div class="skills-slide">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div class="about-us-wrp">
                            <div class="main-heading">
                                <h3>Light Breakfast</h3>
                            </div>
                            <div class="sub-heading">
                                <p>Light his can't a creeping. Be, bring blessed night. Replenish blessed creature good. Saw earth every creepeth lights day, divided abundantly form. In. Said given lights. Sixth the male. Upon their multiply. Kind beast. Him tree upon.</p>
                                <p>Cattle. Dominion day herb she'd creeping divide darkness. Which. Subdue had.</p>
                            </div>
                            <div class="project-wrp">
                                <ul>
                                    <li><b>Client:</b> <span>Emma Morris</span></li>
                                    <li><b>Date:</b> <span>25.06.2017</span></li>
                                    <li><b>Share:</b> <span>Facebook, Twitter, Pinterest</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                        <div class="skill-img">
                            <img src={bannerlogo} alt="about-us" class="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pre-next text-center">
                <Link to="/" class="prev" onclick="plusSlides(-1)">❮ PREVIOUS PROJECT</Link>
                <Link className="box" dangerouslySetInnerHTML={{ __html: svgContent }}/>
                <Link to="/" class="next" onclick="plusSlides(1)">NEXT PROJECT ❯</Link>
            </div>
        </div>
    </div>
  )
}

export default Projectskills