import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                    <div className="ftr-heading">
                        <h5><Link to="/">Piroll Design, Inc.</Link></h5>
                    </div>
                    <div className="ftr-contain">
                        <p>	&#169; 2017 <Link to="/">Piroll</Link>. All rights reserved.</p>
                        <p>Designed by <Link to="/">robirurk.</Link></p>
                    </div>
                </div>
                <div className="col-sm-5 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <ul>
                        <li><a href="mailto:hello@pirolltheme.com">hello@pirolltheme.com</a></li>
                        <li><a href="tel:+44987065908">+44 987 065 908</a></li>
                    </ul>
                </div>
                <div className="col-sm-2 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                    <ul>
                        <li><a href="index.html">home</a></li>
                        <li><a href="project.html">projects</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">contact</a></li>
                        <li><a href="work.html">work</a></li>
                    </ul>
                </div>
                <div className="col-sm-7 col-md-2 col-lg-2 col-xl-2 col-xxl-2 footer-tb">
                    <ul>
                        <li><Link to="/">News</Link></li>
                        <li><Link to="/">Events</Link></li>
                        <li><Link to="/">contact</Link></li>
                        <li><Link to="/">Legals</Link></li>
                    </ul>
                </div>
                <div className="col-sm-5 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                    <ul>
                        <li><Link to="/">Facebook</Link></li>
                        <li><Link to="/">Twitter</Link></li>
                        <li><Link to="/">Instagram</Link></li>
                        <li><Link to="/">Dribbble</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer