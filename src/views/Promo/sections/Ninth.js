import {Autoplay} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import {useRef} from 'react'

// Plugins Styles
import 'swiper/css'
import 'swiper/css/pagination'

// Sources
import _imgPartner1 from 'assets/img/partners/1.svg'
import _imgPartner2 from 'assets/img/partners/2.svg'

// Mocks
const _partners = [
  {
    id: '1001',
    image: _imgPartner1,
  },
  {
    id: '1002',
    image: _imgPartner2,
  },
  {
    id: '1003',
    image: _imgPartner1,
  },
  {
    id: '1004',
    image: _imgPartner2,
  },
  {
    id: '1005',
    image: _imgPartner1,
  },
  {
    id: '1006',
    image: _imgPartner2,
  },
]

const Ninth = () => {
  const swiperRef = useRef()

  const swiperSettings = {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
      },
     500: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 6
      }
    },
    loop: true,
    modules: [Autoplay]
  }

  // Handlers
  const handleOnPrevSlide = () => {
    swiperRef.current.slidePrev()
  }

  const handleOnNextSlide = () => {
    swiperRef.current.slideNext()
  }


  return (
    <div className='max-w-[1340px] pb-[25px] lg:pt-[120px] px-4 lg:px-8 mx-auto mt-[60px] lg:mt-0'>
      <h2 className='leading-tight font-black text-[32px] lg:text-[48px] mb-[32px]'>
        Our <span className='text-gradient'>Key</span> Partners
      </h2>

      <div className='relative'>
        <div className='flex items-center justify-end bg-gradient-to-l min-w-[100px] from-[#161819] to-[#161718]/0 h-full absolute right-[-50px] top-1/2 -translate-y-1/2 z-[100]'>
          <button className='' onClick={handleOnNextSlide}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.4236 16.1635L10.4557 4.47272C10.4166 4.44193 10.3696 4.42279 10.3201 4.41751C10.2706 4.41223 10.2206 4.42101 10.1758 4.44286C10.1311 4.4647 10.0935 4.49872 10.0672 4.541C10.0409 4.58329 10.0271 4.63212 10.0273 4.6819V7.2485C10.0273 7.4112 10.1037 7.56725 10.2299 7.66686L22.183 17.0003L10.2299 26.3337C10.1004 26.4333 10.0273 26.5893 10.0273 26.752V29.3186C10.0273 29.5411 10.283 29.6639 10.4557 29.5278L25.4236 17.837C25.5509 17.7377 25.6538 17.6108 25.7246 17.4658C25.7953 17.3208 25.8321 17.1616 25.8321 17.0003C25.8321 16.8389 25.7953 16.6797 25.7246 16.5347C25.6538 16.3897 25.5509 16.2628 25.4236 16.1635Z" fill="white"/>
            </svg>
          </button>
        </div>
        <div className='flex items-center justify-start h-full absolute left-[-50px] top-1/2 -translate-y-1/2 z-[100]'>
          <button className='' onClick={handleOnPrevSlide}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.57637 16.1635L23.5443 4.47272C23.5834 4.44193 23.6304 4.42279 23.6799 4.41751C23.7294 4.41223 23.7794 4.42101 23.8242 4.44286C23.8689 4.4647 23.9065 4.49872 23.9328 4.541C23.9591 4.58329 23.9729 4.63212 23.9727 4.6819V7.2485C23.9727 7.4112 23.8963 7.56725 23.7701 7.66686L11.817 17.0003L23.7701 26.3337C23.8996 26.4333 23.9727 26.5893 23.9727 26.752V29.3186C23.9727 29.5411 23.717 29.6639 23.5443 29.5278L8.57637 17.837C8.44915 17.7377 8.34623 17.6108 8.27545 17.4658C8.20466 17.3208 8.16787 17.1616 8.16787 17.0003C8.16787 16.8389 8.20466 16.6797 8.27545 16.5347C8.34623 16.3897 8.44915 16.2628 8.57637 16.1635Z" fill="white"/>
            </svg>
          </button>
        </div>

        <Swiper{...swiperSettings}
               onSwiper={(swiper) => {
                 swiperRef.current = swiper
               }}
        >
          {_partners.map((el) => (
            <SwiperSlide key={el.id}>
              <div className='md:text-center'>
                <img className='inline-block max-w-full' src={el.image} alt='Partner' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Ninth
