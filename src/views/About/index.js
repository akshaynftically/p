// Sections
import {Main, Second, Third, Eighth, Ninth} from './sections'
import {Helmet} from "react-helmet";

const About = () => {
  return (
    <>
    <div className='bg-[#161718] text-white lg:pb-[80px]'>
    <Helmet>
    <link rel="canonical" href="https://www.comearth.world/about-us" />
    </Helmet>
      <Main />
      <Second />
      <Third />
      <Eighth />
      <Ninth />
    </div>
    </>
  )
}

export default About
