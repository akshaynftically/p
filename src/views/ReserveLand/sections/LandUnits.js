import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'

// Plugins styles
import 'swiper/css'
import 'swiper/css/navigation'

// Components
import LandUnit from 'components/cards/LandUnit'

// Mocks
import _landUnit1Img from 'assets/img/land-units/1.svg'
import _landUnit2Img from 'assets/img/land-units/2.svg'
import _landUnit3Img from 'assets/img/land-units/3.svg'

const _landUnits = [
  {
    id: '1001',
    title: '32x32',
    img: _landUnit1Img,
  },
  {
    id: '1002',
    title: '16x16',
    img: _landUnit2Img,
    count: 2,
  },
  {
    id: '1003',
    title: '8x8',
    img: _landUnit3Img,
    count: 1,
  },
  {
    id: '1004',
    title: '4x4',
    img: _landUnit1Img,
  },
  {
    id: '1005',
    title: '2x2',
    img: _landUnit2Img,
  },
  {
    id: '1006',
    title: '1x1',
    img: _landUnit3Img,
  },
]

const LandUnits = () => {
  const settings = {
    spaceBetween: 12,
    slidesPerView: 3.4,
    modules: [Navigation],
    navigation: true,
  }

  return (
    <Swiper {...settings} className='mb-[34px]'>
      {_landUnits.map((el) => (
        <SwiperSlide key={el.id}>
          <LandUnit {...el} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default LandUnits
