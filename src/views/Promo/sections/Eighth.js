import {useEffect, useMemo, useState} from 'react'

// Sources
import _imgInvestor1 from 'assets/img/investor-people/1.png'
import _imgInvestor2 from 'assets/img/investor-people/2.png'
import _imgInvestor3 from 'assets/img/investor-people/3.png'
import _imgInvestor4 from 'assets/img/investor-people/4.png'
import _imgInvestor5 from 'assets/img/investor-people/5.png'
import _imgInvestor6 from 'assets/img/investor-people/6.png'
import _imgInvestor7 from 'assets/img/investor-people/7.png'
import _imgInvestor8 from 'assets/img/investor-people/8.png'
import _imgInvestor9 from 'assets/img/investor-people/9.png'
import _imgInvestor10 from 'assets/img/investor-people/10.png'
import _imgInvestor11 from 'assets/img/investor-people/11.png'
import _imgInvestor12 from 'assets/img/investor-people/12.png'
import _imgInvestor13 from 'assets/img/investor-people/13.png'
import _imgInvestor14 from 'assets/img/investor-people/14.png'
import _imgInvestor15 from 'assets/img/investor-people/15.png'
import _imgInvestor16 from 'assets/img/investor-people/16.png'
import _imgInvestor17 from 'assets/img/investor-people/17.png'
import _imgInvestor18 from 'assets/img/investor-people/18.png'
import _imgInvestor19 from 'assets/img/investor-people/19.png'
import _imgInvestor20 from 'assets/img/investor-people/20.png'
import _imgInvestor21 from 'assets/img/investor-people/21.png'
import _imgInvestor22 from 'assets/img/investor-people/22.png'
import _imgInvestor23 from 'assets/img/investor-people/23.png'
import _imgInvestor24 from 'assets/img/investor-people/24.png'

import _imgInvestorCompany1 from 'assets/img/investor-companies/1.svg'
import _imgInvestorCompany2 from 'assets/img/investor-companies/2.svg'
import _imgInvestorCompany3 from 'assets/img/investor-companies/3.svg'
import _imgInvestorCompany4 from 'assets/img/investor-companies/4.svg'
import _imgInvestorCompany5 from 'assets/img/investor-companies/5.svg'
import _imgInvestorCompany6 from 'assets/img/investor-companies/6.svg'
import _imgInvestorCompany7 from 'assets/img/investor-companies/7.svg'
import _imgInvestorCompany8 from 'assets/img/investor-companies/8.svg'
import _imgInvestorCompany9 from 'assets/img/investor-companies/9.svg'
import _imgInvestorCompany10 from 'assets/img/investor-companies/10.svg'
import _imgInvestorCompany11 from 'assets/img/investor-companies/11.svg'
import _imgInvestorCompany12 from 'assets/img/investor-companies/12.svg'
import _imgInvestorCompany13 from 'assets/img/investor-companies/13.svg'
import _imgInvestorCompany14 from 'assets/img/investor-companies/14.svg'
import _imgInvestorCompany15 from 'assets/img/investor-companies/15.svg'
import _imgInvestorCompany16 from 'assets/img/investor-companies/16.svg'
import _imgInvestorCompany17 from 'assets/img/investor-companies/17.svg'
import _imgInvestorCompany18 from 'assets/img/investor-companies/18.svg'
import _imgInvestorCompany19 from 'assets/img/investor-companies/19.svg'
import _imgInvestorCompany20 from 'assets/img/investor-companies/20.svg'
import _imgInvestorCompany21 from 'assets/img/investor-companies/21.svg'
import _imgInvestorCompany22 from 'assets/img/investor-companies/22.svg'

// Mocks
const _investors = [
  {
    id: '1001',
    name: 'Jaynti Kanani',
    position: 'CEO',
    image: _imgInvestor1,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany1,
      },
    ],
  },
  {
    id: '1002',
    name: 'Sandeep Nailwal',
    position: 'COO',
    image: _imgInvestor2,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany1,
      },
    ],
  },
  {
    id: '1003',
    name: 'Surojit Chatterjee',
    position: 'CPO',
    image: _imgInvestor3,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany2,
      },
    ],
  },
  {
    id: '1004',
    name: 'Gaurav Munjal',
    position: 'CEO',
    image: _imgInvestor4,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany3,
      },
    ],
  },
  {
    id: '1005',
    name: 'Roman Saini',
    position: 'Co-Founder',
    image: _imgInvestor5,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany3,
      },
    ],
  },
  {
    id: '1006',
    name: 'Cindy Bi',
    position: 'General Partner',
    image: _imgInvestor6,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany4,
      },
    ],
  },
  {
    id: '1007',
    name: 'Nitish Mittersain',
    position: 'MD',
    image: _imgInvestor7,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany5,
      },
    ],
  },
  {
    id: '1008',
    name: 'Subhash Ghai',
    position: 'Bollywood Producer',
    image: _imgInvestor8,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany6,
      },
    ],
  },
  {
    id: '1009',
    name: 'Sandeep Singhal',
    position: 'MD',
    image: _imgInvestor9,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany7,
      },
    ],
  },
  {
    id: '1010',
    name: 'Rahila Zafar',
    position: 'multiple',
    image: _imgInvestor10,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany8,
      },
      {
        name: '',
        logo: _imgInvestorCompany9,
      },
    ],
  },
  {
    id: '1011',
    name: 'Ramakant Sharma',
    position: 'CEO',
    image: _imgInvestor11,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany10,
      },
    ],
  },
  {
    id: '1012',
    name: 'Abhi Kumar',
    position: 'multiple',
    image: _imgInvestor12,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany11,
      },
      {
        name: '',
        logo: _imgInvestorCompany12,
      },
    ],
  },
  {
    id: '1013',
    name: 'Aakash Kumar',
    position: 'SVP Growth',
    image: _imgInvestor13,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany13,
      },
    ],
  },
  {
    id: '1014',
    name: 'Aakrit Vaish',
    position: 'CEO',
    image: _imgInvestor14,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany14,
      },
    ],
  },
  {
    id: '1015',
    name: 'Moe Shalizi',
    position: 'Founder',
    image: _imgInvestor15,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany15,
      },
    ],
  },
  {
    id: '1016',
    name: 'Tom Windish',
    position: 'EVP',
    image: _imgInvestor16,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany16,
      },
    ],
  },
  {
    id: '1017',
    name: 'Miten Sampat',
    position: 'President',
    image: _imgInvestor17,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany17,
      },
    ],
  },
  {
    id: '1018',
    name: 'Rahul Dalmia',
    position: 'Seed Investor',
    image: _imgInvestor18,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany1,
      },
    ],
  },
  {
    id: '1019',
    name: 'Kunal Kapoor',
    position: 'Actor & Founder',
    image: _imgInvestor19,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany18,
      },
    ],
  },
  {
    id: '1020',
    name: 'Arun Tadanki',
    position: 'Co-Founder',
    image: _imgInvestor20,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany19,
      },
    ],
  },
  {
    id: '1021',
    name: 'Manish Agarwal',
    position: 'CEO',
    image: _imgInvestor21,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany5,
      },
    ],
  },
  {
    id: '1022',
    name: 'Uday Sodhi',
    position: 'Ex-CEO',
    image: _imgInvestor22,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany20,
      },
    ],
  },
  {
    id: '1023',
    name: 'Priyavrat H Mafatlal',
    position: 'Vice Chairman',
    image: _imgInvestor23,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany21,
      },
    ],
  },
  {
    id: '1024',
    name: 'Pradeep Aswal',
    position: 'Blockchain Council',
    image: _imgInvestor24,
    companies: [
      {
        name: '',
        logo: _imgInvestorCompany22,
      },
    ],
  },
]

const Eighth = () => {
  const [isMobile, setIsMobile] = useState(window.outerWidth < 600)
  const [showMore, setShowMore] = useState(false)

  const handleWindowSizeChange = () => {
    setIsMobile(window.outerWidth < 600)
  }

  const getInvestors = useMemo(() => {
    if (isMobile && !showMore) {
      return _investors.slice(0, 4)
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
    <div className='lg:pt-[150px] mx-[20px] lg:mx-[80px] mt-[60px] lg:mt-0'>
      <h2 className='leading-tight font-black text-[32px] lg:text-[48px] mb-[32px]'>
        Our <span className='text-gradient'>Key</span> Investors
      </h2>

      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-[16px]'>
        {getInvestors.map((el) => (
          <div key={el.id}>
            <div className='group relative overflow-hidden pt-[30px]'>
              <div className='absolute top-0 group-hover:top-[10px] h-full border-b-[2px] border-l-[2px] border-transparent rounded overflow-hidden transition-all duration-[400ms] ease-in-out'>
                <img className='inline-block max-w-full' src={el.image} alt={el.name} />
              </div>
              <div className='min-h-[190px] pseudo-border-gradient rounded'>
                <div className='absolute bottom-[2px] left-[2px] right-[2px] flex flex-col min-h-[115px] bg-shaded text-center rounded pt-[26px] pb-[16px] px-[8px]'>
                  <div>
                    <div className='text-[14px] mb-[2px]'>{el.name}</div>
                    <div className='text-[12px] text-white/[.60] mb-[4px]'>
                      {el.position === 'multiple' ? '-----------' : el.position}
                    </div>
                  </div>
                  <div
                    className={`grid grid-cols-${el.companies.length} items-center gap-[6px] mt-auto`}
                  >
                    {el.companies.map((elC, i) => (
                      <div key={`companyLogo${el.id}${i}`}>
                        <img
                          className='inline-block max-w-full'
                          src={elC.logo}
                          alt='Company Logo'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {(isMobile && !showMore) && (
          <div className='flex justify-center mt-[24px]'>
            <button onClick={() => setShowMore(true)} className='border-2 border-white rounded-[4px] h-[40px] flex items-center justify-center px-[24px]'>Show More</button>
          </div>
      )}
    </div>
  )
}

export default Eighth
