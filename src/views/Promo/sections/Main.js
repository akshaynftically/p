import Countdown from 'react-countdown'

// Components
import {SimpleButton} from 'components/buttons'
import {Field, FieldGroup} from 'components/form'

// Sources
import _bgMain from 'assets/img/bg/2.jpg'
import _imgEarth from 'assets/img/earth-md.png'

const Main = () => {
  return (
    <div
      className='bg-center bg-no-repeat bg-cover lg:pt-[140px] lg:pb-[80px] relative'
      style={{
        backgroundImage: `url(${_bgMain})`,
      }}
    >
      <div className='max-w-[1340px] px-4 lg:px-8 mx-auto'>
        <div className='grid grid-cols-12 items-center gap-x-[30px]'>
          <div className='col-span-5'>
            <h1 className='leading-tight font-extrabold text-[32px] lg:text-[52px] mb-[24px]'>
              The Go-To Destination for <span className='text-gradient'>Commerce in</span>{' '}
              <span className='text-gradient'>Metaverse</span>
            </h1>
            <div className='text-[16px] text-white/[.80] mb-[40px]'>
            COMEARTH is the world’s first web3.0 e-commerce metaverse which allows brands & creators to create unparalleled commerce experiences while consumers discover everything in one place

            </div>
            <FieldGroup className='relative mb-[45px]'>
              <Field className='pr-[230px] md:py-[14px]' placeholder='Enter Your Promo Code Here' />
              <SimpleButton
                className='absolute top-0 right-0 w-[210px] min-h-full md:text-[14px] text-bold rounded-l-none'
                type='button'
              >
                Reserve Your Land Now
              </SimpleButton>
            </FieldGroup>
            <div className='flex items-center mb-[12px]'>
              <svg
                className='stroke-white mr-[8px]'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 22C16.9706 22 21 17.9706 21 13C21 8.02944 16.9706 4 12 4C7.02944 4 3 8.02944 3 13C3 17.9706 7.02944 22 12 22Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M12 4V2M15.5 9.5L12 13L15.5 9.5ZM19 19L20 22L19 19ZM5 19L4 22L5 19ZM2 5L5 2L2 5ZM19 2L22 5L19 2Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span className='font-semibold'>
                Hurry, <span className='text-gradient'>Sale Ends in:</span>
              </span>
            </div>
            <Countdown
              date={Date.now() + 1036800000}
              renderer={({days, hours, minutes, seconds}) => (
                <div className='bg-[#262728] rounded-lg p-[8px]'>
                  <div className='grid grid-cols-4'>
                    <div className='leading-tight uppercase text-center'>
                      <div className='font-black text-[24px]'>{days < 10 ? `0${days}` : days}</div>
                      <div className='text-[14px] text-white/[.80]'>Days</div>
                    </div>
                    <div className='leading-tight uppercase text-center border-l-[1px] border-[#363738]'>
                      <div className='font-black text-[24px]'>
                        {hours < 10 ? `0${hours}` : hours}
                      </div>
                      <div className='text-[14px] text-white/[.80]'>Hours</div>
                    </div>
                    <div className='leading-tight uppercase text-center border-l-[1px] border-[#363738]'>
                      <div className='font-black text-[24px]'>
                        {minutes < 10 ? `0${minutes}` : minutes}
                      </div>
                      <div className='text-[14px] text-white/[.80]'>Minutes</div>
                    </div>
                    <div className='leading-tight uppercase text-center border-l-[1px] border-[#363738]'>
                      <div className='font-black text-[24px]'>
                        {seconds < 10 ? `0${seconds}` : seconds}
                      </div>
                      <div className='text-[14px] text-white/[.80]'>Seconds</div>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
          <div className='col-span-7 text-right'>
            <img className='inline-block max-w-full' src={_imgEarth} alt='Comearth' />
          </div>
        </div>
      </div>

      <div className='bg-gradient-to-b from-[#161718]/0 to-[#161718] h-[107px] absolute bottom-0 left-0 w-full'></div>
    </div>
  )
}

export default Main
