import React from 'react'
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Professional from '../../components/Professional/Professional';
import Number from '../../components/Number/Number';
import Work from '../../components/Work/Work';
import Process from '../../components/Process/Process';
import SectionProcess from '../../components/SectionProcess/SectionProcess';
import Testimonial from '../../components/Testimonial/Testimonial';
import Logos from '../../components/Logos/Logos';

const Home = () => {
  return (
        <>
            <Banner />
            <About/>
            <Professional/>
            <Number/>
            <Work/>
            <Process/>
            <SectionProcess/>
            <Testimonial/>
            <Logos/>
        </>
  )
}

export default Home