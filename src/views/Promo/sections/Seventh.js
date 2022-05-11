import {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper'

// Styles
import 'swiper/css'

// Sources
import _bgMain from 'assets/img/bg/3.png'

import _imgLand1x1 from 'assets/img/lands/1x1.svg'
import _imgLand2x2 from 'assets/img/lands/2x2.svg'
import _imgLand4x4 from 'assets/img/lands/4x4.svg'
import _imgLand16x16 from 'assets/img/lands/16x16.svg'
import _imgLand32x32 from 'assets/img/lands/32x32.svg'
import _imgLand64x64 from 'assets/img/lands/64x64.svg'

// Mocks
const _lands = [
  {
    id: '1001',
    title: '1x1',
    image: _imgLand1x1,
  },
  {
    id: '1002',
    title: '2x2',
    image: _imgLand2x2,
  },
  {
    id: '1003',
    title: '4x4',
    image: _imgLand4x4,
  },
  {
    id: '1004',
    title: '16x16',
    image: _imgLand16x16,
  },
  {
    id: '1005',
    title: '32x32',
    image: _imgLand32x32,
  },
  {
    id: '1006',
    title: '64x64',
    image: _imgLand64x64,
  },
]

const Seventh = () => {
  const sliderSettings = {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    spaceBetween: 2,
    loop: true,
    modules: [Autoplay],
  }

  return (
    <div
      className='md:min-h-[510px] bg-no-repeat bg-contain lg:py-[50px]'
      style={{
        backgroundImage: `url(${_bgMain})`,
      }}
    >
      <div className='flex justify-end'>
        <div className='max-w-[880px]'>
          <div className='md:pr-[80px] mb-[24px]'>
            <h3 className='font-black text-[22px] lg:text-[36px] mb-[16px]'>
              Land sizes to meet every Enterprise need
            </h3>
            <div className='text-[16px] text-white/[.80]'>
              Launch Digital 3D immersive commercial establishments like Malls, E-Commerce shops,
              marketplaces, experience centers, stadiums in Metaverse with few clicks.
            </div>
          </div>
          <Swiper {...sliderSettings} className='mb-[12px]'>
            {_lands.map((el, i) => (
              <SwiperSlide key={el.id} className='!w-[265px]'>
                <div className='relative flex items-center justify-center w-[265px] h-[240px] overflow-hidden border-bottom-sq-gradient--active'>
                  <div className='absolute -top-[22px] -bottom-[22px] -left-[22px] -right-[22px]'>
                    {[...Array(11)].map((el, i) => (
                      <Fragment key={i}>
                        <div
                          className='absolute top-0 bottom-0 border-l-[1px] border-[#363738]'
                          style={{
                            left: 31 * i,
                          }}
                        />
                        <div
                          className='absolute left-0 right-0 border-t-[1px] border-[#363738]'
                          style={{
                            top: 31 * i,
                          }}
                        />
                      </Fragment>
                    ))}
                  </div>
                  <div className='relative text-center'>
                    <div className='mb-[35px]'>
                      <img className='inline-block max-h-[100px]' src={el.image} alt={el.title} />
                    </div>
                    <span className='font-black text-[36px]'>{el.title}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Link
            className='text-[16px] text-white/[.80] underline hover:no-underline underline-offset-8 decoration-[#3F99FF]'
            to='/reserve-land'
          >
            Reserve Your Land Now
            <svg
              className='fill-[#3F99FF] ml-[8px]'
              width='13'
              height='14'
              viewBox='0 0 13 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M8.05047 7.35909L2.39447 13.0171L0.980469 11.6021L6.63747 5.94609L1.68747 0.996094H13.0005V12.3091L8.05047 7.35909Z' />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Seventh