import {useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper'

// Sources
import _image1 from 'assets/img/posts/1.png'
import _image2 from 'assets/img/posts/2.png'
import _image3 from 'assets/img/posts/3.png'
import _image4 from 'assets/img/posts/4.png'
import _image5 from 'assets/img/posts/5.png'

import _imagePostBg from 'assets/img/posts/bg.png'

const _postst = [
  {
    id: 1,
    image: _image1,
    text: 'NFT marketpalce NFTICALLY launched, raises funding from Polygon Matic CEO'
  },
  {
    id: 2,
    image: _image2,
    text: 'NFTically, a global marketplace and B2B SaaS for NFTs launched, raises ...'
  },
  {
    id: 3,
    image: _image3,
    text: 'NFTically raises seed fund from Polygon Matic; global marketplace for NFTs ...'
  },
  {
    id: 4,
    image: _image4,
    text: 'NFT marketplace NFTically launched, gets seed funding from Matic CEO, others'
  },
  {
    id: 5,
    image: _image5,
    text: 'NFTically raises seed funds, launches global marketplace for NFTs'
  }
]

const Third = () => {
  const swiperRef = useRef()

  const sliderSettings = {
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      500: {
        slidesPerView: 2
      },
      920: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 5
      }
    },
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination-blog',
      clickable: true,
      renderBullet: function (i, className) {
        return `<span class="swiper-pagination-bullet--alt blue ${className}"><span></span></span>`
      },
    },
    modules: [Pagination],
  }

  return (
    <div className='lg:pt-[150px] mx-[20px] lg:mx-[80px] mt-[60px] lg:mt-0'>
      <h2 className='leading-tight font-black text-[32px] lg:text-[48px] mb-[32px]'>
        <span className='text-gradient'>COMEARTH</span> In the News
      </h2>


      <div className='relative'>
        <Swiper
          {...sliderSettings}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {_postst.map((el, i) => (
            <SwiperSlide key={el.id}>
              <a href='#' target='_blank'>
                <div className='relative'>
                  <img className='w-full' src={_imagePostBg} alt='Post backgrpund'/>
                  <img className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' src={el.image} alt='Post preview' />
                </div>

                <div className='bg-[#262728] py-[24px] mb-3 px-[8px] text-[16px] text-white/80 rounded-b-[8px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>{el.text}</div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <button onClick={() => swiperRef.current.slideNext()} className='lg:hidden absolute -right-3 border-2 border-[#363738]/40 bg-[#262728] w-[36px] h-[36px] rounded-[8px] top-1/2 -translate-1/2 z-[10]'>
          <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.88281 13.875L7.88281 7.875L1.88281 1.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <button onClick={() => swiperRef.current.slidePrev()} className='lg:hidden absolute -left-3 border-2 border-[#363738]/40 bg-[#262728] w-[36px] h-[36px] rounded-[8px] top-1/2 -translate-1/2 z-[10]'>
          <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.11719 13.875L1.11719 7.875L7.11719 1.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      
      <div className='swiper-pagination-blog mt-[20px] lg:hidden w-full flex justify-center lg'></div>
    </div>
  )
}

export default Third
