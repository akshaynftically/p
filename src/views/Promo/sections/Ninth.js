import {Autoplay} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

// Plugins Styles
import 'swiper/css'
import 'swiper/css/pagination'

// Sources
import _imgPartner1 from 'assets/img/partners/1.svg'
import _imgPartner2 from 'assets/img/partners/2.svg'
import {SimpleButton} from "../../../components/buttons";

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

  return (
    <div className='max-w-[1340px] pb-[25px] lg:pt-[120px] px-4 lg:px-8 mx-auto mt-[60px] lg:mt-0'>
      <h2 className='leading-tight font-black text-[32px] lg:text-[48px] mb-[32px]'>
        Our <span className='text-gradient'>Key</span> Partners
      </h2>

      <Swiper{...swiperSettings}>
        {_partners.map((el) => (
            <SwiperSlide key={el.id}>
              <div className='md:text-center'>
                <img className='inline-block max-w-full' src={el.image} alt='Partner' />
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Ninth
