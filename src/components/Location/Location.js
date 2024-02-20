import React from 'react'
import Iframe from 'react-iframe';
import {Container} from 'react-bootstrap';

const Location = () => {
  return (
    <div class="contact-us about-page-contact-us">
        <Container>
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.287234365685!2d-118.41968358255612!3d34.062150399999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb8b3cfc7839%3A0x6f5778ce061fb0ff!2s10111%20Santa%20Monica%20Blvd%2C%20Los%20Angeles%2C%20CA%2090024%2C%20USA!5e0!3m2!1sen!2sin!4v1687166798600!5m2!1sen!2sin"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/>
        </Container>
    </div>
  )
}

export default Location