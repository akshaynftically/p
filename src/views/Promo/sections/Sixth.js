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

// Mocks
const _continents = [
  {
    id: '1001',
    title: 'Cardinal',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.',
    image: _imgContinentCardinal,
  },
  {
    id: '1002',
    title: 'Octum',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.',
    image: _imgContinentOctum,
  },
  {
    id: '1003',
    title: 'Marth',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.',
    image: _imgContinentMarth,
  },
  {
    id: '1004',
    title: 'Eta',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.',
    image: _imgContinentEta,
  },
  {
    id: '1005',
    title: 'Aakaus',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.',
    image: _imgContinentAakaus,
  },
  {
    id: '1006',
    title: 'Rohin',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.',
    image: _imgContinentRohin,
  },
  {
    id: '1007',
    title: 'Tosh',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.',
    image: _imgContinentTosh,
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
  const swiperRef = useRef()
  const [prevSlide, setPrevSlide] = useState(_continents[_continents.length - 1])
  const [nextSlide, setNextSlide] = useState(_continents[1])

  // Handlers
  const handleOnPrevSlide = () => {
    swiperRef.current.slidePrev()
  }

  const handleOnNextSlide = () => {
    swiperRef.current.slideNext()
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

      <div className='relative lg:px-[345px] mb-[20px]'>
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
                    <SimpleButton className='block w-full md:w-auto py-[15px] md:py-3' href='/reserve-land' size='sm'>
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
  )
}

export default Sixth
