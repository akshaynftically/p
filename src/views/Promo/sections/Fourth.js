import {useState} from 'react'

// Components
import {SimpleButton, BlurButton} from 'components/buttons'

// Mocks
import _imgBanner1 from 'assets/img/320x345/1.jpg'
import _imgBanner2 from 'assets/img/320x345/2.jpg'
import _imgBanner3 from 'assets/img/320x345/3.jpg'
import _imgBanner4 from 'assets/img/320x345/4.jpg'
import ReserveLandModal from '../../../modals/ReserveLandModal'

import _imgRewardBanner1 from 'assets/img/rewards/1.png'
import _imgRewardBanner2 from 'assets/img/rewards/2.png'
import _imgRewardBanner3 from 'assets/img/rewards/3.png'
import { useNavigate } from 'react-router-dom'

const _banners = [
  {
    id: '1001',
    title: 'Drive Key Business Metrics',
    image: _imgBanner1,
  },
  {
    id: '1002',
    title: 'Use Metaverse for branding',
    image: _imgBanner2,
  },
  {
    id: '1003',
    title: 'Create out-of-this-world consumer experiences, literally',
    image: _imgBanner3,
  },
  {
    id: '1004',
    title: 'Metaverse’s hottest commercial real estate',
    image: _imgBanner4,
  },
]
const _rewards = [
  {
    id: 1,
    title: 'Visitors',
    list: [
      'Exclusive gifts and merchandise from global brands',
      'Rewards for active engagement',
      'Prizes for contributing to the COMEARTH community',
      'Income  opportunities via assets, apps, and jobs in the Metaverse',
    ],
    image: _imgRewardBanner1
  },
  {
    id: 2,
    title: 'Community',
    list: [
      'A direct share of COMEARTH’s perpetual income',
      'Benefits for promoting and advocating for COMEARTH',
      'Commensurate rewards for referrals',
      'Voting rights to shape the future of COMEARTH',
      'A hangout place for fun and learning!',
    ],
    image: _imgRewardBanner2
  },
  {
    id: 3,
    title: 'BRAnds & Creators',
    list: [
      'Portion of total platform revenues on owning land NFTs',
      'Rewards for sustainable commerce ',
      'Monetory benefits for fostering engagement and commerce ',
      'Equal say in the governance of the Metaverse ',
    ],
    image: _imgRewardBanner3
  }
]

const Fourth = () => {
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='pt-[70px] relative'>
      <div className='absolute top-0 left-0 transform translate-y-[220px] md:translate-y-[-300px] bg-contain 4xl:bg-cover w-full bg-no-repeat h-full bg-[url("assets/img/bg/8.png")]'></div>
      <div className='hidden md:block bg-gradient-to-b transform md:translate-y-[-200px] 4xl:translate-y-[-170px] 3xl:translate-y-[-150px] from-[#161819] z-[0] to-[#161718]/0 h-[110px] absolute top-0 z-[1] left-0 w-full'></div>
      <div className='md:hidden bg-[#161819] z-[0] h-[110px] absolute top-[30px] z-[1] left-0 w-full'></div>
      <div className='md:hidden bg-gradient-to-b from-[#161819] to-[#161718]/0 z-[0] h-[110px] absolute top-[50px] z-[1] left-0 w-full'></div>

      <div className='mt-[40px] md:mt-0 relative'>
        <div className='mx-[20px] lg:mx-[80px] relative z-[2]'>
          <div className='grid grid-cols-12'>
            <div className='md:col-span-3'></div>
            <div className='col-span-12 md:col-span-6 mb-[30px] md:md-0'>
              <h2 className='leading-2 font-extrabold md:text-center text-[32px] lg:text-[48px]'>
                <span className='text-gradient'>A Metaverse</span>
                <br />
                That Rewards All Users
              </h2>
            </div>
            <div className='md:col-span-3'></div>
          </div>

          <div className='grid relative grid-cols-3 xl:mb-[120px]'>
            <div className='bg-[#161718] w-full h-[100px] absolute bottom-0 translate-y-full left-0 z-[1]'></div>

            {_rewards.map((el) => (
              <div
                className='relative col-span-3 xl:col-span-1'
                key={el.id}
              >
                <img className='w-full' src={el.image} alt='Preview'/>
                <div className='xl:absolute w-full z-[10] h-full top-0 translate-y-[-80px] xl:translate-y-[50%] px-[24px] flex flex-col items-center'>
                  <div className='text-center font-[JamGrotesque] text-[18px] lg:text-[24px] uppercase mb-[16px]'>{el.title}</div>

                  <ul className='list-disc'>
                    {el.list.map((text, index) => (
                      <li
                        key={index}
                        className='text-[14px] text-white/80 mb-2'
                      >
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className='flex items-end justify-center text-center mb-[50px] relative z-[100]'>
            <SimpleButton className='!px-[24px] md:mb-[55px]' type='button'
                          onClick={() =>   navigate('/reserve-land')}>
              Start Your Metaverse Journey Now
            </SimpleButton>
          </div>
        </div>
      </div>

      {openModal && (
        <ReserveLandModal onClose={() => setOpenModal(false)} />
      )}

      <div className='mx-[20px] relative z-[29] lg:mx-[80px]'>
        <div className='grid grid-cols-4'>
          {_banners.map((el) => (
              <div
                  key={el.id}
                  className='relative group col-span-2 md:col-span-1 min-h-[200px] md:min-h-[345px] bg-no-repeat bg-cover bg-center md:mb-[160px]'
                  style={{
                    backgroundImage: `url(${el.image})`,
                  }}
              >
                <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/[.50]' />
                <div className='absolute top-[60px] md:top-[120px] left-0 right-0 p-[20px]'>
                  <div className='leading-tight font-black text-[14px] md:text-[24px]'>{el.title}</div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Fourth
