import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

const Layout = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <Services></Services>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}

export default Layout