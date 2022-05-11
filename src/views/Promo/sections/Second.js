import {Fragment} from 'react'
import clsx from 'clsx'
import {Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

// Plugins styles
import 'swiper/css'
import 'swiper/css/navigation'

// Components
import {PillButton} from 'components/buttons'

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

// Mocks
const _categories = [
  {
    id: '1001',
    title: 'Semantic Web',
  },
  {
    id: '1002',
    title: 'VR & AR (Metaverse)',
    isActive: true,
  },
  {
    id: '1003',
    title: 'Interoperability',
  },
  {
    id: '1004',
    title: 'NFTs',
  },
  {
    id: '1005',
    title: 'AI',
  },
  {
    id: '1006',
    title: 'Tokenomics',
  },
  {
    id: '1007',
    title: 'Permissionless Blockchains',
  },
  {
    id: '1008',
    title: 'UI & Service Layers',
  },
]
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
    id: '1003',
    title: 'NFTs',
    text: 'A TRULY meaningful way of interacting with the web may finally be here, In addition to the classic “Web of documents” W3C is helping to build a technology stack to support a “Web of data,” the sort of data you find in databases. The ultimate goal of the Web of data is to enable computers to do more useful work and to develop systems that can support trusted interactions over the network',
    image: _imgSlide3,
  },
  {
    id: '1004',
    title: 'AI',
    text: 'A TRULY meaningful way of interacting with the web may finally be here, In addition to the classic “Web of documents” W3C is helping to build a technology stack to support a “Web of data,” the sort of data you find in databases. The ultimate goal of the Web of data is to enable computers to do more useful work and to develop systems that can support trusted interactions over the network',
    image: _imgSlide4,
  },
  {
    id: '1005',
    title: 'Tokenomics',
    text: 'A TRULY meaningful way of interacting with the web may finally be here, In addition to the classic “Web of documents” W3C is helping to build a technology stack to support a “Web of data,” the sort of data you find in databases. The ultimate goal of the Web of data is to enable computers to do more useful work and to develop systems that can support trusted interactions over the network',
    image: _imgSlide5,
  },
  {
    id: '1006',
    title: 'Permissionless Blockchains',
    text: 'A TRULY meaningful way of interacting with the web may finally be here, In addition to the classic “Web of documents” W3C is helping to build a technology stack to support a “Web of data,” the sort of data you find in databases. The ultimate goal of the Web of data is to enable computers to do more useful work and to develop systems that can support trusted interactions over the network',
    image: _imgSlide6,
  },
  {
    id: '1007',
    title: 'UI & Service Layers',
    text: 'A TRULY meaningful way of interacting with the web may finally be here, In addition to the classic “Web of documents” W3C is helping to build a technology stack to support a “Web of data,” the sort of data you find in databases. The ultimate goal of the Web of data is to enable computers to do more useful work and to develop systems that can support trusted interactions over the network',
    image: _imgSlide7,
  },
  {
    id: '1008',
    title: 'Semantic Web',
    text: 'A TRULY meaningful way of interacting with the web may finally be here, In addition to the classic “Web of documents” W3C is helping to build a technology stack to support a “Web of data,” the sort of data you find in databases. The ultimate goal of the Web of data is to enable computers to do more useful work and to develop systems that can support trusted interactions over the network',
    image: _imgSlide8,
  },
]

const Second = () => {
  const sliderSettings = {
    navigation: true,
    slidesPerView: 1,
    loop: true,
    modules: [Navigation],
  }

  return (
    <Fragment>
      <div className='bg-[#161718] pt-[80px]'>
        <div className='max-w-[1215px] mx-auto px-4 lg:px-8'>
          <h2 className='leading-tight font-extrabold text-center text-[32px] lg:text-[52px] mb-[40px]'>
            Web3 E-Commerce will be <span className='text-gradient'>bigger than</span>
            <br />
            Web2 E-Commerce
          </h2>

          <div className='overflow-x-auto pb-[20px]'>
            <div className='flex flex-nowrap'>
              {_categories.map((el, i) => (
                <PillButton
                  key={el.id}
                  className={clsx('whitespace-nowrap border-[1px] border-[#363738] !px-[20px]', {
                    'ml-[15px]': i !== 0,
                  })}
                  type='button'
                  isActive={el.isActive}
                >
                  {el.title}
                </PillButton>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='overflow-x-hidden'>
        <div
          className='lg:min-h-[800px] bg-no-repeat bg-cover py-[60px] -mx-[8px]'
          style={{
            backgroundImage: `url(${_bgImg})`,
          }}
        >
          <Swiper {...sliderSettings}>
            {_slides.map((el, i) => (
              <SwiperSlide key={el.id}>
                <div className='max-w-[1215px] mx-auto px-4 lg:px-8'>
                  <div className='max-w-[855px]'>
                    <div className='max-w-[480px] mb-[35px]'>
                      <img className='max-w-full' src={el.image} alt='Slide' />
                    </div>
                    <div className='grid grid-cols-12'>
                      <div className='col-span-5 text-[20px] text-white/[.80]'>{el.title}</div>
                      <div className='col-span-7 text-[14px]'>{el.text}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Fragment>
  )
}

export default Second
