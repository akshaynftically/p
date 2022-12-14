import {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import clsx from 'clsx'
import {Helmet} from "react-helmet";

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
    id: '1004',
    title: 'Risk Disclaimer',
    url: '#risk-disclaimer',
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
      <div className='mx-[20px] lg:mx-[80px]'>
        <div className='flex overflow-auto pb-[20px] md:pb-0 items-center mb-[34px] -mx-[8px]'>
        <Helmet>
          <title>Comearth Terms & Conditions - Web3.0 E-Commerce Metaverse & Ecosystem</title>
          <link rel="canonical" href="https://www.comearth.world/terms" />
        </Helmet>
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
        {hash === '#risk-disclaimer' && <RiskPolicy />}
      </div>
    </div>
  )
}

export default Terms
