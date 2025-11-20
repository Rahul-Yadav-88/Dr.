import React from 'react'
import OrthopaedicSection from '../../components/home/hero'
import Section2 from '../../components/home/section2'
import Section3 from '../../components/home/section3'
import Section4 from '../../components/home/section4'
import Section5 from '../../components/home/section5'
import Section6 from '../../components/home/section6'
import Section7 from '../../components/home/section7'
import Section8 from '../../components/home/section8'
import Map from '../../components/home/Map'
import HeroCards from '../../components/home/heroCards'

const Home = () => {
  return (
    <div className='z-40'>
      <OrthopaedicSection/>
      <HeroCards/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Map/>
    </div>
  )
}

export default Home
