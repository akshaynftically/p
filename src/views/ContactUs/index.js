// Sections
import {Main, Second} from './sections'
import {Helmet} from "react-helmet";

const Contact = () => {
  return (
    <div className='bg-[#161718] text-white lg:pb-[80px]'>
      <Helmet>
        <link rel="canonical" href="https://www.comearth.world/contact-us" />
      </Helmet>
      <Main />
      <Second />
    </div>
  )
}

export default Contact

