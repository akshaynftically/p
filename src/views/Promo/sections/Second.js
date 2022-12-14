import {Fragment, useRef} from 'react'
import clsx from 'clsx'
import {Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

// Plugins styles
import 'swiper/css'
import 'swiper/css/pagination'

// Components
import {BlurButton} from 'components/buttons'

// Sources
import _bgImg from 'assets/img/bg/1.jpg'
import _imgSlide1 from 'assets/img/480x240/1.jpg'
import _imgSlide2 from 'assets/img/480x240/2.jpg'
import _imgSlide3 from 'assets/img/480x240/3.jpg'
import _imgSlide4 from 'assets/img/480x240/4.jpg'
import _imgSlide5 from 'assets/img/480x240/5.jpg'
import _imgSlide6 from 'assets/img/480x240/6.jpg'
import _imgSlide7 from 'assets/img/480x240/7.jpg'
import _imgSlide8 from 'assets/img/480x240/8.jpg'
import _bgVideo from 'assets/videos/neon-city.mp4'

// Mocks
const _slides = [
  {
    id: '1001',
    title: 'VR & AR (Metaverse)',
    text: 'A TRULY meaningful way of interacting with the web may finally be here, In addition to the classic “Web of documents” W3C is helping to build a technology stack to support a “Web of data,” the sort of data you find in databases. The ultimate goal of the Web of data is to enable computers to do more useful work and to develop systems that can support trusted interactions over the network',
    image: _imgSlide1,
  },
  {
    id: '1002',
    title: 'Interoperability',
    text: 'A TRULY meaningful way of interacting with the web may finally be here, In addition to the classic “Web of documents” W3C is helping to build a technology stack to support a “Web of data,” the sort of data you find in databases. The ultimate goal of the Web of data is to enable computers to do more useful work and to develop systems that can support trusted interactions over the network',
    image: _imgSlide2,
  },
  {
    id: '1004',
    title: 'AI',
    text: 'In a world where everyone is an avatar, a brilliant AI would be virtually indistinguishable from a human. This advent in technology shall enable brands and creators to create personalized experiences at scale for their fans and customers. Complete automation of Sales, Support, and other verticals isn\'t far away!',
    image: _imgSlide4,
  },
  {
    id: '1003',
    title: 'Stakeholder Rewards',
    text: 'An ecosystem is built by its stakeholders, and Web3 shall enable COMEARTH to reward its stakeholders for adding value to it. It ensures that all the people and brands that help COMEARTH benefit from its success, creating virtuous cycles that propel COMEARTH in the long run.',
    image: _imgSlide3,
  },
  {
    id: '1005',
    title: 'Digital Assets',
    text: 'Non-Fungible Tokens (NFTs) shall allow digital assets to be owned and traded in a digital-first universe. This shall unlock a new layer in global commerce, creating a market worth hundreds of billions while employing millions.',
    image: _imgSlide5,
  },
  {
    id: '1006',
    title: 'Democratic',
    text: 'Gone are the days when monopolistic corporations could utilize their position to manipulate their stakeholders. Built on the Polygon Blockchain, COMEARTH shall create a platform and tokenomics that hand the reigns to the global community.',
    image: _imgSlide6,
  },
  {
    id: '1007',
    title: 'Sustainable',
    text: 'The transparency of Blockchain shall ensure that the sustainability of products and services traded on COMEARTH can be measured. Appropriate rewards and penalties shall be used to guide commerce in a direction conducive to the long-term sustainability of society at large.',
    image: _imgSlide7,
  },
  {
    id: '1008',
    title: 'Secure',
    text: 'With all transactions on the trustless & permissionless Polygon Blockchain, COMEARTH can power billions of annual e-commerce transactions while remaining completely secure. It shall also enable reliable insights for brands while ensuring that the privacy and data of its users remain protected.',
    image: _imgSlide8,
  },
]

const Second = () => {
  const sliderSettings = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      clickable: true,
      renderBullet: function (i, className) {
        return `
          <span
            class="${className} swiper-pagination-bullet--alt-2"
          >
            ${_slides[i].title}
          </span>
        `
      },
    },
    modules: [Pagination],
  }
  const swiperRef = useRef()

  // Handlers
  const handleOnPrevSlide = () => {
    swiperRef.current.slidePrev()
  }

  const handleOnNextSlide = () => {
    swiperRef.current.slideNext()
  }

  return (
    <Fragment>
      <div className='bg-[#161718] pt-[50px] md:pt-[80px] mb-[40px] relative'>
        <div className='mx-[20px] lg:mx-[80px]'>
          <h2 className='leading-tight font-extrabold text-center text-[32px] lg:text-[52px] mb-[40px]'>
            Web3 E-Commerce will be <span className='text-gradient'>bigger than</span>
            <br />
            Web2 E-Commerce
          </h2>
        </div>
      </div>

      <div className='overflow-x-hidden relative promo-second'>
        <div className='hidden md:block bg-gradient-to-b from-[#161718] to-[#161718]/0 h-[110px] absolute top-0 z-[1] left-0 w-full'></div>
        <div className='hidden md:block bg-gradient-to-t from-[#161718] to-[#161718]/0 h-[20px] absolute bottom-0 z-[1] left-0 w-full'></div>

        <div
          className='relative lg:min-h-[660px] bg-center bg-no-repeat bg-cover -mx-[8px] overflow-hidden'
          style={{
            backgroundImage: `url(${_bgImg})`,
          }}
        >
          <video className='hidden lg:block absolute top-0 left-0 w-full h-full transform scale-150' autoplay="autoplay" loop muted>
            <source src={_bgVideo} type="video/mp4"/>
          </video>
          <div className='absolute w-full h-full bg-[#000000]/50'></div>

          <div className='absolute top-[136px] left-1/2 z-10 -translate-x-1/2 hidden lg:flex items-center'>
            <BlurButton
              className='w-[32px] min-h-[32px] justify-center !p-[5px]'
              type='button'
              onClick={handleOnPrevSlide}
            >
              <svg
                className='fill-white'
                width='6'
                height='10'
                viewBox='0 0 6 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M2.248 4.99959L5.42578 1.82182L4.51803 0.914062L0.432497 4.99959L4.51803 9.08512L5.42578 8.17737L2.248 4.99959Z' />
              </svg>
            </BlurButton>
            <BlurButton
              className='w-[32px] min-h-[32px] justify-center !p-[5px] ml-[40px]'
              type='button'
              onClick={handleOnNextSlide}
            >
              <svg
                className='fill-white'
                width='6'
                height='10'
                viewBox='0 0 6 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M3.752 4.99959L0.574219 1.82182L1.48197 0.914062L5.5675 4.99959L1.48197 9.08513L0.574219 8.17737L3.752 4.99959Z' />
              </svg>
            </BlurButton>
          </div>
          <Swiper
            className='swiper-pagination--alt-2 border-transparent !pt-[60px] md:!pt-[136px]'
            {...sliderSettings}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
          >
            {_slides.map((el, i) => (
              <SwiperSlide key={el.id}>
                <div className='mx-[20px] lg:mx-[80px]'>
                  <div className='max-w-[855px]'>
                    <div className='max-w-[480px] mb-[35px]'>
                      <img className='max-w-full' src={el.image} alt='Slide' />
                    </div>
                    <div className='lg:grid grid-cols-12'>
                      <div className='col-span-5 text-[16px] mb-[17px] md:mb-0 md:text-[20px] text-white/[.80]'>{el.title}</div>
                      <div className='col-span-7 text-[12px] md:text-[14px]'>{el.text}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

         <div className="flex lg:hidden justify-end px-6 my-[50px]">
           <div className='flex items-center'>
             <BlurButton
                 className='w-[32px] min-h-[32px] justify-center !p-[5px]'
                 type='button'
                 onClick={handleOnPrevSlide}
             >
               <svg
                   className='fill-white'
                   width='6'
                   height='10'
                   viewBox='0 0 6 10'
                   fill='none'
                   xmlns='http://www.w3.org/2000/svg'
               >
                 <path d='M2.248 4.99959L5.42578 1.82182L4.51803 0.914062L0.432497 4.99959L4.51803 9.08512L5.42578 8.17737L2.248 4.99959Z' />
               </svg>
             </BlurButton>
             <BlurButton
                 className='w-[32px] min-h-[32px] justify-center !p-[5px] ml-[40px]'
                 type='button'
                 onClick={handleOnNextSlide}
             >
               <svg
                   className='fill-white'
                   width='6'
                   height='10'
                   viewBox='0 0 6 10'
                   fill='none'
                   xmlns='http://www.w3.org/2000/svg'
               >
                 <path d='M3.752 4.99959L0.574219 1.82182L1.48197 0.914062L5.5675 4.99959L1.48197 9.08513L0.574219 8.17737L3.752 4.99959Z' />
               </svg>
             </BlurButton>
           </div>
         </div>
        </div>
      </div>

    </Fragment>
  )
}

export default Second
