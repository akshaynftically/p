import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'

// Plugins styles
// import 'swiper/css'
// import 'swiper/css/navigation'

// Components
import LandUnit from 'components/cards/LandUnit'

const LandUnits = (props) => {
  const {basket, setBasket,disableCounter} = props

  const settings = {
    spaceBetween: 12,
    modules: [Navigation],
    navigation: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      648: {
        slidesPerView: 3.4,
      },
      1031: {
        slidesPerView: 2
      },
      1300: {
        slidesPerView: 3.4
      }
    }
  }

  function onChange (qty, index) {
    basket[index].qty = qty
    setBasket([...basket])
  }

  return (
    <div  className='mb-[34px] gap-[10px]'>
      {props.basket.map((el, index) => (
        <div key={el.id}>
          <LandUnit {...el} index={index} onChange={qty => onChange(qty, index)} disableCounter={disableCounter} />
        </div>
      ))}
    </div>
  )
}

export default LandUnits
