import {Fragment} from 'react'

// Sources
import _illustration1 from 'assets/img/illustration/3.svg'
import _illustration2 from 'assets/img/illustration/4.svg'
import {SimpleButton} from '../../components/buttons'

const NotFound = () => {
  return (
    <Fragment>
      <div className='relative bg-no-repeat bg-cover justify-center flex flex-col pt-[67px] lg:pt-0 lg:h-[100vh] bg-[url("assets/img/stars.png")] lg:bg-[url("assets/img/bg/10.png")]'>
        <div className='text-white pb-[25px] lg:pt-[120px] mx-[20px] lg:mx-[80px] mt-[60px] lg:mt-0'>
          <div className='w-full flex flex-col justify-center items-center lg:items-start lg:justify-start'>
            <img className='max-w-[186px] lg:max-w-full mb-[20px] lg:mb-[40px]' src={_illustration1} alt='Illustration'/>
            <h2 className='max-w-full lg:max-w-[518px] text-center md:text-left font-[JamGrotesque] text-[24px] lg:text-[48px] mb-[20px] lg:mb-[28px]'>
              Looks Like You’re
              Lost in Space
            </h2>

            <SimpleButton size='sm' href='/' className='!rounded-full px-[30px]'>
              <svg className='mr-[8px]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 5L8 10L13 15L12 17L5 10L12 3L13 5Z" fill="white"/>
              </svg>

              Back to Home
            </SimpleButton>
          </div>
        </div>

        <div className='flex justify-center lg:hidden'>
          <img src={_illustration2} alt='Illustration'/>
        </div>
        <div className='bg-gradient-to-b from-[#161718]/0 to-[#161718] h-[40px] md:h-[107px] absolute bottom-0 left-0 w-full'></div>
      </div>
    </Fragment>
  )
}

export default NotFound