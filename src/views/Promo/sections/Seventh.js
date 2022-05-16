import {Fragment, useRef} from 'react'
import {Link} from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination} from 'swiper'

// Styles
import 'swiper/css'
import 'swiper/css/pagination'

// Sources
import _bgMain from 'assets/img/bg/3.png'
import _bgMainMobile from 'assets/img/bg/3-mobile.png'

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
  const swiperRef = useRef()
  const sliderSettings = {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    spaceBetween: 2,
    loop: true,
    modules: [Autoplay]
  }

  const mobileSliderSettings = {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 2,
    loop: true,
    pagination: {
      el: '.swiper-pagination-mobile',
      clickable: true,
      renderBullet: function (i, className) {
        return `<span class="swiper-pagination-bullet--alt ${className}"><span></span></span>`
      },
    },
    modules: [Autoplay, Pagination],
  }

  // Handlers
  const handleOnPrevSlide = () => {
    swiperRef.current.slidePrev()
  }

  const handleOnNextSlide = () => {
    swiperRef.current.slideNext()
  }


  return (
    <>
      <div
          className='hidden lg:block md:min-h-[510px] xl:min-h-[710px] bg-no-repeat bg-contain lg:py-[50px]'
          style={{
            backgroundImage: `url(${_bgMain})`,
          }}
      >
        <div className='flex justify-end'>
          <div className='md:max-w-[880px]'>
            <div className='md:pr-[80px] mb-[24px]'>
              <h3 className='font-black text-[22px] lg:text-[36px] mb-[16px]'>
                Land sizes to meet every Enterprise need
              </h3>
              <div className='text-[16px] text-white/[.80]'>
                Launch Digital 3D immersive commercial establishments like Malls, E-Commerce shops,
                marketplaces, experience centers, stadiums in Metaverse with few clicks.
              </div>
            </div>

            <div className='relative'>
              <div className='flex items-center justify-center bg-gradient-to-l min-w-[100px] from-[#161819] to-[#161718]/0 h-full absolute right-0 top-1/2 -translate-y-1/2 z-[100]'>
                <button className='' onClick={handleOnNextSlide}>
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.4236 16.1635L10.4557 4.47272C10.4166 4.44193 10.3696 4.42279 10.3201 4.41751C10.2706 4.41223 10.2206 4.42101 10.1758 4.44286C10.1311 4.4647 10.0935 4.49872 10.0672 4.541C10.0409 4.58329 10.0271 4.63212 10.0273 4.6819V7.2485C10.0273 7.4112 10.1037 7.56725 10.2299 7.66686L22.183 17.0003L10.2299 26.3337C10.1004 26.4333 10.0273 26.5893 10.0273 26.752V29.3186C10.0273 29.5411 10.283 29.6639 10.4557 29.5278L25.4236 17.837C25.5509 17.7377 25.6538 17.6108 25.7246 17.4658C25.7953 17.3208 25.8321 17.1616 25.8321 17.0003C25.8321 16.8389 25.7953 16.6797 25.7246 16.5347C25.6538 16.3897 25.5509 16.2628 25.4236 16.1635Z" fill="white"/>
                  </svg>
                </button>
              </div>

              <Swiper {...sliderSettings}
                      className='mb-[12px]'
                      onSwiper={(swiper) => {
                        swiperRef.current = swiper
                      }}
              >
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
            </div>
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

      <div className='lg:hidden mt-[60px]'>
        <div
            className='aboslute min-h-[238px] bg-cover w-full flex items-bottom justify-center bg-no-repeat'
            style={{
              backgroundImage: `url(${_bgMainMobile})`,
            }}
        >
          <div className="relative flex flex-wrap">
            <div className='mt-auto p-3'>
              <h3 className='font-black text-[24px] mb-[10px]'>
                Land sizes to meet every Enterprise need
              </h3>
              <div className='text-[12px] text-white/[.80]'>
                Launch Digital 3D immersive commercial establishments like Malls, E-Commerce shops,
                marketplaces, experience centers, stadiums in Metaverse with few clicks.
              </div>
            </div>
          </div>
        </div>
        <Swiper {...mobileSliderSettings} className='mb-[12px] pb-[100px]'>
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

       <div className="px-7 py-4">
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

         <div className="swiper-pagination-mobile flex justify-center mt-[24px]"></div>
       </div>
      </div>
    </>
  )
}

export default Seventh
