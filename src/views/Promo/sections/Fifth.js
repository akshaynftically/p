import {useEffect, useMemo, useState} from 'react'

// Mocks
import _imgAbstraction1 from 'assets/img/abstractions/1.png'
import _imgIllustration1 from 'assets/img/illustration/1.png'

import _imgInvestor1 from 'assets/img/brand-presence-comearth/1.png'
import _imgInvestor2 from 'assets/img/brand-presence-comearth/2.png'
import _imgInvestor3 from 'assets/img/brand-presence-comearth/3.png'
import _imgInvestor4 from 'assets/img/brand-presence-comearth/4.png'
import _imgInvestor5 from 'assets/img/brand-presence-comearth/5.png'
import _imgInvestor6 from 'assets/img/brand-presence-comearth/6.png'
import _imgInvestor7 from 'assets/img/brand-presence-comearth/7.png'
import _imgInvestor8 from 'assets/img/brand-presence-comearth/8.png'
import _imgInvestor9 from 'assets/img/brand-presence-comearth/9.png'
import _imgInvestor10 from 'assets/img/brand-presence-comearth/10.png'
import _imgInvestor11 from 'assets/img/brand-presence-comearth/11.png'
import _imgInvestor12 from 'assets/img/brand-presence-comearth/12.png'
import _imgInvestor13 from 'assets/img/brand-presence-comearth/13.png'
import _imgInvestor14 from 'assets/img/brand-presence-comearth/14.png'
import _imgInvestor15 from 'assets/img/brand-presence-comearth/15.png'
import _imgInvestor16 from 'assets/img/brand-presence-comearth/16.png'
import _imgInvestor17 from 'assets/img/brand-presence-comearth/17.png'

const _investors = [
  {
    id: '1001',
    image: _imgInvestor1,
  },
  {
    id: '1002',
    image: _imgInvestor2,
  },
  {
    id: '1003',
    image: _imgInvestor3,
  },
  {
    id: '1004',
    image: _imgInvestor4,
  },
  {
    id: '1005',
    image: _imgInvestor5,
  },
  {
    id: '1006',
    image: _imgInvestor6,
  },
  {
    id: '1007',
    image: _imgInvestor7,
  },
  {
    id: '1008',
    image: _imgInvestor8,
  },
  {
    id: '1009',
    image: _imgInvestor9,
  },
  {
    id: '10010',
    image: _imgInvestor10,
  },
  {
    id: '1011',
    image: _imgInvestor11,
  },
  {
    id: '1012',
    image: _imgInvestor12,
  },
  {
    id: '1013',
    image: _imgInvestor13,
  },
  {
    id: '1014',
    image: _imgInvestor14,
  },
  {
    id: '1015',
    image: _imgInvestor15,
  },
  {
    id: '1016',
    image: _imgInvestor16,
  },
  {
    id: '1017',
    image: _imgInvestor17,
  },
]

const Fifth = () => {
  const [isMobile, setIsMobile] = useState(window.outerWidth < 442)
  const [showMore, setShowMore] = useState(false)

  const handleWindowSizeChange = () => {
    setIsMobile(window.outerWidth < 442)
  }

  const getInvestors = useMemo(() => {
    if (isMobile && !showMore) {
      return _investors.slice(0, 6)
    }

    if (!showMore) {
      return _investors.slice(0, 16)
    }

    return _investors
  }, [isMobile, showMore])

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [])


  return (
    <div className='relative mt-[240px] md:mt-0'>
      <div className='hidden md:block absolute md:-top-[96px] left-0'>
        <img className='max-w-full' src={_imgAbstraction1} alt='Abstraction' />
      </div>
      <div className='relative mx-[20px] lg:mx-[80px]'>
        <div className='grid grid-cols-12 items-center'>
          <div className='relative col-span-12 order-2 md:order-1 md:col-span-6'>
            <div className='md:hidden absolute top-0 left-0 z-[0]'>
              <img className='max-w-full' src={_imgAbstraction1} alt='Abstraction' />
            </div>
            <img className='inline-block max-w-full relative z-[2]' src={_imgIllustration1} alt='Illustration' />
          </div>
          <div className='col-span-12 order-1 md:order-2 md:col-span-6 mb-[20px] md:md-0'>
            <h2 className='leading-tight font-black text-[32px] lg:text-[48px] mb-[14px]'>
              <span className='text-gradient'>Brand Presence</span> on
              <br />
              COMEARTH
            </h2>
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-8 gap-[6px]'>
          {getInvestors.map((el) => (
            <div
              key={el.id}
              className='flex items-center justify-center min-h-[100px] bg-[#262728] rounded p-[10px]'
            >
              <img className='inline-block max-w-full' src={el.image} alt='Investor Logo' />
            </div>
          ))}
        </div>

        {(_investors.length > 16 && !showMore) && (
            <div className='flex justify-center mt-[24px]'>
              <button onClick={() => setShowMore(true)} className='border-2 border-white rounded-[4px] h-[40px] flex items-center justify-center px-[24px]'>Show More</button>
            </div>
        )}
      </div>
    </div>
  )
}

export default Fifth
