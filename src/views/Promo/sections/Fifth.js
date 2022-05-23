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
]

const Fifth = () => {
  return (
    <div className='relative'>
      <div className='absolute -top-[96px] left-0'>
        <img className='max-w-full' src={_imgAbstraction1} alt='Abstraction' />
      </div>
      <div className='relative max-w-[1340px] mx-auto px-4 lg:px-8'>
        <div className='grid grid-cols-12 items-center'>
          <div className='col-span-6'>
            <img className='inline-block max-w-full' src={_imgIllustration1} alt='Illustration' />
          </div>
          <div className='col-span-6'>
            <h2 className='leading-tight font-black text-[32px] lg:text-[48px] mb-[14px]'>
              <span className='text-gradient'>Brand Presence</span> on
              <br />
              COMEARTH
            </h2>
            {/* <div className='leading-8 text-[14px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s
            </div> */}
          </div>
        </div>
        <div className='grid grid-cols-8 gap-[6px]'>
          {_investors.map((el) => (
            <div
              key={el.id}
              className='flex items-center justify-center min-h-[100px] bg-[#262728] rounded p-[10px]'
            >
              <img className='inline-block max-w-full' src={el.image} alt='Investor Logo' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Fifth
