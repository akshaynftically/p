import {useEffect, useRef, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper'

// Plugins Styles
import 'swiper/css'
import 'swiper/css/pagination'

// Components
import {SimpleButton} from 'components/buttons'

// Sources
import _bgSlider from 'assets/img/bg/4.jpg'
import _bgSliderPrev from 'assets/img/bg/5.jpg'
import _bgSliderNext from 'assets/img/bg/6.jpg'

import _imgContinentCardinal from 'assets/img/continents/cardinal.svg'
import _imgContinentOctum from 'assets/img/continents/octum.svg'
import _imgContinentMarth from 'assets/img/continents/marth.svg'
import _imgContinentEta from 'assets/img/continents/eta.svg'
import _imgContinentAakaus from 'assets/img/continents/aakaus.svg'
import _imgContinentRohin from 'assets/img/continents/rohin.svg'
import _imgContinentTosh from 'assets/img/continents/tosh.svg'
import _imgContinentHorus from 'assets/img/continents/horus.svg'
import ReserveLandModal from '../../../modals/ReserveLandModal'

// Mocks
const _continents = [
  {
    id: '1001',
    title: 'Cardinal',
    text: 'It’s a first continent of the COMEARTH planet which will host roughly~11% of the land parcels. Can host multiple industries & various types of e-commerce activities.',
    image: _imgContinentCardinal,
    bg: _bgSlider
  },
  {
    id: '1002',
    title: 'Octum',
    text: 'It’s the second continent of the COMEARTH planet which will host roughly 14-15% of the land parcels. This continent can host businesses, brands & various types of e-commerce activities.',
    image: _imgContinentOctum,
    bg: _bgSliderNext
  },
  {
    id: '1003',
    title: 'Marth',
    text: 'It’s the third continent of the COMEARTH planet which will host roughly 11-12% of the land parcels. This continent can host businesses, brands & various types of engagement & business activities.',
    image: _imgContinentMarth,
    bg: _bgSliderPrev
  },
  {
    id: '1004',
    title: 'Eta',
    text: 'It’s the fourth continent of the COMEARTH planet which will host roughly 12-13% of the land parcels. This continent can host businesses, brands & various types of engagement & business activities.',
    image: _imgContinentEta,
    bg: _bgSliderNext
  },
  {
    id: '1005',
    title: 'Aakaus',
    text: 'It’s the fifth continent of the COMEARTH planet which will host roughly 14-15% of the land parcels. This continent can host anythig related to commerce & engagement.',
    image: _imgContinentAakaus,
    bg: _bgSliderPrev
  },
  {
    id: '1006',
    title: 'Rohin',
    text: 'It’s the sixth continent of the COMEARTH planet which will host roughly 12% of the land parcels. This continent can host events, groups, communities.',
    image: _imgContinentRohin,
    bg: _bgSliderNext
  },
  {
    id: '1007',
    title: 'Tosh',
    text: 'It’s the seventh continent of the COMEARTH planet which will host roughly 8% of the land parcels. This continent can has evertything you need to make your business successful.',
    image: _imgContinentTosh,
    bg: _bgSliderPrev
  },
  {
    id: '1008',
    title: 'Horus',
    text: 'It’s the eigth & the largest continent of the COMEARTH planet which will host roughly 16% of the land parcels. This continent can host multiple business, engagement modules, experience centers etc.',
    image: _imgContinentHorus,
    bg: _bgSliderNext
  },
]

const Sixth = () => {
  const sliderSettings = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      clickable: true,
      renderBullet: function (i, className) {
        return `<span class="swiper-pagination-bullet--alt ${className}"><span></span></span>`
      },
    },
    modules: [Pagination],
  }

  const sliderSettingsLg = {
    slidesPerView: 'auto',
    centeredSlides: true,
    speed: 1500,
    loop: true,
    pagination: {
      clickable: true,
      renderBullet: function (i, className) {
        return `<span class="swiper-pagination-bullet--alt ${className}"><span></span></span>`
      },
    },
    modules: [Pagination],
  }

  const swiperRef = useRef()
  const swiperRefLg = useRef()

  const [prevSlide, setPrevSlide] = useState(_continents[_continents.length - 1])
  const [nextSlide, setNextSlide] = useState(_continents[1])
  const [openModal, setOpenModal] = useState(false)

  // Handlers
  const handleOnPrevSlide = () => {
    swiperRef.current.slidePrev()
  }

  const handleOnNextSlide = () => {
    swiperRef.current.slideNext()
  }


 const handleOnPrevSlideLg = () => {
   swiperRefLg.current.slidePrev()
  }

  const handleOnNextSlideLg = () => {
    swiperRefLg.current.slideNext()
  }

  // Lifecycle
  useEffect(() => {
    swiperRef.current.on('slideChange', () => {
      setPrevSlide(
        _continents[swiperRef.current.realIndex !== 0 ? swiperRef.current.realIndex - 1 : 6]
      )
      setNextSlide(
        _continents[
          swiperRef.current.realIndex < _continents.length - 1 ? swiperRef.current.realIndex + 1 : 0
        ]
      )
    })
  }, [swiperRef])

  return (
    <div className='lg:pt-[160px] lg:pb-[40px] mt-[70px] md:mt-0 relative'>
      <div className='lg:hidden bg-[#161718] h-[30px] absolute bottom-0 z-[1] left-0 w-full'></div>
      <h2 className='leading-tight font-black text-[32px] lg:text-[48px] mb-[16px] lg:mb-[32px] px-4 lg:px-12'>
        <span className='text-gradient'>8 Continents and</span> and <span className='text-gradient'>6 </span> land sizes
      </h2>

      <div className='hidden xl:block'>
        <div className='relative mb-[20px]'>
          <div className='flex items-center justify-center bg-gradient-to-l min-w-[100px] from-[#161819] to-[#161718]/0 h-full absolute right-0 top-1/2 -translate-y-1/2 z-[100]'>
            <button className='' onClick={handleOnNextSlideLg}>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.4236 16.1635L10.4557 4.47272C10.4166 4.44193 10.3696 4.42279 10.3201 4.41751C10.2706 4.41223 10.2206 4.42101 10.1758 4.44286C10.1311 4.4647 10.0935 4.49872 10.0672 4.541C10.0409 4.58329 10.0271 4.63212 10.0273 4.6819V7.2485C10.0273 7.4112 10.1037 7.56725 10.2299 7.66686L22.183 17.0003L10.2299 26.3337C10.1004 26.4333 10.0273 26.5893 10.0273 26.752V29.3186C10.0273 29.5411 10.283 29.6639 10.4557 29.5278L25.4236 17.837C25.5509 17.7377 25.6538 17.6108 25.7246 17.4658C25.7953 17.3208 25.8321 17.1616 25.8321 17.0003C25.8321 16.8389 25.7953 16.6797 25.7246 16.5347C25.6538 16.3897 25.5509 16.2628 25.4236 16.1635Z" fill="white"/>
              </svg>
            </button>
          </div>
          <div className='flex items-center justify-center h-full absolute left-0 top-1/2 -translate-y-1/2 z-[100]'>
            <button className='' onClick={handleOnPrevSlideLg}>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.57637 16.1635L23.5443 4.47272C23.5834 4.44193 23.6304 4.42279 23.6799 4.41751C23.7294 4.41223 23.7794 4.42101 23.8242 4.44286C23.8689 4.4647 23.9065 4.49872 23.9328 4.541C23.9591 4.58329 23.9729 4.63212 23.9727 4.6819V7.2485C23.9727 7.4112 23.8963 7.56725 23.7701 7.66686L11.817 17.0003L23.7701 26.3337C23.8996 26.4333 23.9727 26.5893 23.9727 26.752V29.3186C23.9727 29.5411 23.717 29.6639 23.5443 29.5278L8.57637 17.837C8.44915 17.7377 8.34623 17.6108 8.27545 17.4658C8.20466 17.3208 8.16787 17.1616 8.16787 17.0003C8.16787 16.8389 8.20466 16.6797 8.27545 16.5347C8.34623 16.3897 8.44915 16.2628 8.57637 16.1635Z" fill="white"/>
              </svg>
            </button>
          </div>

          <div className='hidden lg:block'>
            <div
              className='relative bg-center bg-no-repeat bg-cover bg-shaded-black-60 animated-slider'
            >
              <Swiper
                {...sliderSettingsLg}
                onSwiper={(swiper) => {
                  swiperRefLg.current = swiper
                }}
              >
                {_continents.map((el, i) => (
                  <SwiperSlide key={el.id}>
                    <div className='flex relative items-center overflow-hidden flex-wrap lg:flex-nowrap min-h-[460px] p-[20px] md:p-[40px]'>
                      <img className='absolute top-0 left-0 w-full transition-all duration-[1s] scale-[1.8] swiper-slide-active:scale-[1]' src={el.bg} alt=''/>
                      <div className='absolute top-0 left-0 w-full h-full bg-[#000000]/40'></div>

                      <div className='mr-[24px]'>
                        <div className='transition-all duration-[1s] opacity-0 transform swiper-slide-active:translate-x-0 swiper-slide-active:opacity-100 translate-x-[200px] w-[160px] md:w-[275px]'>
                          <img className='inline-block max-w-full' src={el.image} alt={el.title} />
                        </div>
                      </div>

                      <div className='lg:hidden'>
                        <div className='uppercase text-[16px] lg:text-[20px] text-white/[.80] mb-[12px]'>
                          {el.title}
                        </div>
                        <div className='font-black uppercase text-[24px] lg:text-[52px] mb-[12px]'>{el.title}</div>
                      </div>

                      <div className='block w-full lg:flex-grow-1'>
                        <div className='uppercase text-[72px] swiper-slide-prev:font-[JamGrotesque] swiper-slide-next:font-[JamGrotesque] swiper-slide-active:translate-y-0 swiper-slide-active:translate-x-0 translate-y-[150px] swiper-slide-prev:translate-x-[280px] swiper-slide-next:translate-x-[-320px] swiper-slide-active:text-[20px] transition-all duration-[1s] swiper-slide-active:text-white/[.80] text-white/[.40] mb-[12px]'>
                          {el.title}
                        </div>

                        <div className='transition-all duration-[1s] opacity-0 transform swiper-slide-active:translate-x-0 swiper-slide-active:opacity-100 translate-x-[200px]'>
                          <div className='hidden lg:block'>
                            <div className='font-black font-[JamGrotesque] uppercase text-[52px] mb-[12px]'>{el.title}</div>
                          </div>
                          <div className='text-[16px] text-white/[.80] mb-[32px]'>{el.text}</div>
                          <SimpleButton type='button'
                                        className='block w-full md:w-auto py-[15px] md:py-3'
                                        size='sm'
                                        onClick={() => setOpenModal(true)}
                          >
                            Reserve Land Now
                          </SimpleButton>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className='xl:hidden'>
        <div className='relative lg:px-[345px] mb-[20px]'>
          <div className='flex items-center justify-center bg-gradient-to-l min-w-[100px] from-[#161819] to-[#161718]/0 h-full absolute right-0 top-1/2 -translate-y-1/2 z-[100]'>
            <button className='' onClick={handleOnNextSlide}>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.4236 16.1635L10.4557 4.47272C10.4166 4.44193 10.3696 4.42279 10.3201 4.41751C10.2706 4.41223 10.2206 4.42101 10.1758 4.44286C10.1311 4.4647 10.0935 4.49872 10.0672 4.541C10.0409 4.58329 10.0271 4.63212 10.0273 4.6819V7.2485C10.0273 7.4112 10.1037 7.56725 10.2299 7.66686L22.183 17.0003L10.2299 26.3337C10.1004 26.4333 10.0273 26.5893 10.0273 26.752V29.3186C10.0273 29.5411 10.283 29.6639 10.4557 29.5278L25.4236 17.837C25.5509 17.7377 25.6538 17.6108 25.7246 17.4658C25.7953 17.3208 25.8321 17.1616 25.8321 17.0003C25.8321 16.8389 25.7953 16.6797 25.7246 16.5347C25.6538 16.3897 25.5509 16.2628 25.4236 16.1635Z" fill="white"/>
              </svg>
            </button>
          </div>
          <div className='flex items-center justify-center h-full absolute left-0 top-1/2 -translate-y-1/2 z-[100]'>
            <button className='' onClick={handleOnPrevSlide}>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.57637 16.1635L23.5443 4.47272C23.5834 4.44193 23.6304 4.42279 23.6799 4.41751C23.7294 4.41223 23.7794 4.42101 23.8242 4.44286C23.8689 4.4647 23.9065 4.49872 23.9328 4.541C23.9591 4.58329 23.9729 4.63212 23.9727 4.6819V7.2485C23.9727 7.4112 23.8963 7.56725 23.7701 7.66686L11.817 17.0003L23.7701 26.3337C23.8996 26.4333 23.9727 26.5893 23.9727 26.752V29.3186C23.9727 29.5411 23.717 29.6639 23.5443 29.5278L8.57637 17.837C8.44915 17.7377 8.34623 17.6108 8.27545 17.4658C8.20466 17.3208 8.16787 17.1616 8.16787 17.0003C8.16787 16.8389 8.20466 16.6797 8.27545 16.5347C8.34623 16.3897 8.44915 16.2628 8.57637 16.1635Z" fill="white"/>
              </svg>
            </button>
          </div>

          <div
            className='hidden group absolute top-0 bottom-0 left-0 lg:flex items-center justify-center w-[345px] bg-center bg-no-repeat bg-cover bg-shaded-black-60 p-[20px]'
            role='button'
            onClick={handleOnPrevSlide}
            style={{
              backgroundImage: `url(${_bgSliderPrev})`,
            }}
          >
            <div className='relative uppercase truncate font-black text-[72px] text-white/[.40] group-hover:text-white transition transition-all duration-[200ms] ease-in-out'>
              {prevSlide.title}
            </div>
          </div>
          <div
            className='hidden group absolute top-0 bottom-0 right-0 lg:flex items-center justify-center w-[345px] bg-center bg-no-repeat bg-cover bg-shaded-black-60 p-[20px]'
            role='button'
            onClick={handleOnNextSlide}
            style={{
              backgroundImage: `url(${_bgSliderNext})`,
            }}
          >
            <div className='relative uppercase truncate font-black text-[72px] text-white/[.40] group-hover:text-white transition transition-all duration-[200ms] ease-in-out'>
              {nextSlide.title}
            </div>
          </div>
          <div
            className='relative bg-center bg-no-repeat bg-cover bg-shaded-black-60'
            style={{
              backgroundImage: `url(${_bgSlider})`,
            }}
          >
            <Swiper
              {...sliderSettings}
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
            >
              {_continents.map((el, i) => (
                <SwiperSlide key={el.id}>
                  <div className='flex items-center flex-wrap lg:flex-nowrap min-h-[460px] p-[20px] md:p-[40px]'>
                    <div className='mr-[24px]'>
                      <div className='w-[160px] md:w-[275px]'>
                        <img className='inline-block max-w-full' src={el.image} alt={el.title} />
                      </div>
                    </div>

                    <div className='lg:hidden'>
                      <div className='uppercase text-[16px] lg:text-[20px] text-white/[.80] mb-[12px]'>
                        {el.title}
                      </div>
                      <div className='font-black uppercase text-[24px] lg:text-[52px] mb-[12px]'>{el.title}</div>
                    </div>

                    <div className='block w-full lg:flex-grow-1'>
                      <div className='hidden lg:block'>
                        <div className='uppercase text-[20px] text-white/[.80] mb-[12px]'>
                          {el.title}
                        </div>
                        <div className='font-black uppercase text-[52px] mb-[12px]'>{el.title}</div>
                      </div>
                      <div className='text-[16px] text-white/[.80] mb-[32px]'>{el.text}</div>
                      <SimpleButton type='button'
                                    className='block w-full md:w-auto py-[15px] md:py-3'
                                    size='sm'
                                    onClick={() => setOpenModal(true)}
                      >
                        Reserve Land Now
                      </SimpleButton>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {openModal && (
        <ReserveLandModal onClose={() => setOpenModal(false)} />
      )}
    </div>
  )
}

export default Sixth
