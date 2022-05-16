import {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import clsx from 'clsx'

// Views
import TermsAndConditions from './TermsAndConditions'
import PrivacyPolicy from './PrivacyPolicy'
import CommunityGuidelines from './CommunityGuidelines'
import RiskPolicy from './RiskPolicy'

// Mocks
const _menu = [
  {
    id: '1001',
    title: 'Terms & Conditions',
    url: '#terms',
  },
  {
    id: '1002',
    title: 'Privacy Policy',
    url: '#privacy-policy',
  },
  {
    id: '1003',
    title: 'Community Guidelines',
    url: '#community-guidelines',
  },
  {
    id: '1004',
    title: 'Risk Policy',
    url: '#risk-policy',
  },
]

const Terms = () => {
  const {hash} = useLocation()
  const [current, setCurrent] = useState(window.location.hash)

  // Lifecycle
  useEffect(() => {
    if (!hash) {
      window.location.hash = 'terms'
    }

    setCurrent(window.location.hash)
  }, [hash, window.location.hash])

  return (
    <div className='text-white pt-[150px]'>
      <div className='max-w-[1340px] px-4 lg:px-[80px] mx-auto'>
        <div className='flex overflow-auto pb-[20px] md:pb-0 items-center mb-[34px] -mx-[8px]'>
          {_menu.map((el) => (
            <Link
              key={el.id}
              className={clsx('swiper-pagination-bullet swiper-pagination-bullet--alt-2', {
                'swiper-pagination-bullet-active': el.url === current,
              })}
              to={el.url}
            >
              {el.title}
            </Link>
          ))}
        </div>

        {hash === '#terms' && <TermsAndConditions />}
        {hash === '#privacy-policy' && <PrivacyPolicy />}
        {hash === '#community-guidelines' && <CommunityGuidelines />}
        {hash === '#risk-policy' && <RiskPolicy />}
      </div>
    </div>
  )
}

export default Terms
