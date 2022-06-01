import {useEffect, useMemo, useState} from 'react'

// Sources
import _imgMember1 from 'assets/img/members/1.png'
import _imgMember2 from 'assets/img/members/2.png'
import _imgMember3 from 'assets/img/members/3.png'
import _imgMember4 from 'assets/img/members/4.png'
import _imgMember5 from 'assets/img/members/5.png'
import _imgMember6 from 'assets/img/members/6.png'
import _imgMember7 from 'assets/img/members/7.png'

// Mocks
const _members = [
  {
    id: '1001',
    name: 'Toshendra Sharma',
    position: 'Founder & CEO',
    image: _imgMember1
  },
  {
    id: '1002',
    name: 'Rohendra Singh',
    position: 'Co-Founder & CTO',
    image: _imgMember2
  },
  {
    id: '1003',
    name: 'Outreach & Education',
    position: 'Outreach & Education',
    image: _imgMember3
  },
  {
    id: '1004',
    name: 'Kaustubh Sharma',
    position: 'Product & Strategy',
    image: _imgMember4
  },
  {
    id: '1005',
    name: 'Priyanka Balwa',
    position: 'Brand Marketing',
    image: _imgMember5
  },
  {
    id: '1006',
    name: 'Aditya Chawla',
    position: 'Community & Engagement',
    image: _imgMember6
  },
  {
    id: '1007',
    name: 'Ashok Bala',
    position: 'Sales & Partnerships',
    image: _imgMember7
  }
]

const Second = () => {
  const [isMobile, setIsMobile] = useState(window.outerWidth < 600)
  const [showMore, setShowMore] = useState(false)

  const handleWindowSizeChange = () => {
    setIsMobile(window.outerWidth < 600)
  }

  const getMembers = useMemo(() => {
    if (isMobile && !showMore) {
      return _members.slice(0, 4)
    }

    return _members
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
        Our <span className='text-gradient'>Key</span> Members
      </h2>

      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-[16px]'>
        {getMembers.map((el) => (
          <div key={el.id}>
            <div className='group relative overflow-hidden pt-[30px]'>
              <div className='absolute top-0 group-hover:top-[10px] h-full border-b-[2px] border-l-[2px] border-transparent rounded overflow-hidden transition-all duration-[400ms] ease-in-out'>
                <img className='inline-block max-w-full' src={el.image} alt={el.name} />
              </div>
              <div className='min-h-[190px] pseudo-border-gradient rounded'>
                <div className='absolute bottom-[2px] left-[2px] right-[2px] flex flex-col justify-end min-h-[115px] bg-shaded text-center rounded pt-[26px] pb-[16px] px-[8px]'>
                  <div>
                    <div className='text-[14px] mb-[2px]'>{el.name}</div>
                    <div className='text-[12px] text-white/[.60] mb-[4px]'>
                      {el.position === 'multiple' ? '-----------' : el.position}
                    </div>
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

export default Second
