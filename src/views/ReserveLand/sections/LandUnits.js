import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'

// Plugins styles
import 'swiper/css'
import 'swiper/css/navigation'

// Components
import LandUnit from 'components/cards/LandUnit'

const LandUnits = (props) => {
  const {basket, setBasket,} = props

  const settings = {
    spaceBetween: 12,
    slidesPerView: 3.4,
    modules: [Navigation],
    navigation: true,
  }

  function onChange (qty, index) {
    basket[index].qty = qty
    setBasket([...basket])
  }

  return (
    <Swiper {...settings} className='mb-[34px]'>
      {props.basket.map((el, index) => (
        <SwiperSlide key={el.id}>
          <LandUnit {...el} index={index} onChange={qty => onChange(qty, index)} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default LandUnits
