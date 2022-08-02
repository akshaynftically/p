import {useEffect, useState} from 'react'

// Components
import {SimpleButton} from 'components/buttons'

// Sources
import _logoComearth from 'assets/img/logo-comearth.svg'
import _logoNftcally from 'assets/img/logo-nftically.svg'
import { Link } from 'react-router-dom'

// Mocks
const _menu = {
  COMEARTH: [
    // {
    //   id: '1002',
    //   title: 'Reserve Virtual Land ',
    //   url: 'reserve-land',
    //   target:false
    // },
    {
      id: '1003',
      title: 'About Us',
      url: 'about-us',
      target:false
    },
    {
      id: '1004',
      title: 'Contact Us',
      url: 'contact-us',
      target:false
    },
    {
      id: '1005',
      title: 'Visit NFTICALLY',
      url: 'https://www.nftically.com',
      target:true
    },
  ],
  resources: [
    {
      id: '1004',
      title: 'Whitepaper',
      url: 'https://docs.comearth.world/whitepaper',
      target:true
    },
    {
      id: '1005',
      title: 'Blog',
      url: 'https://www.comearth.world/blog',
      target:true
    },
  ],
}
const _menuCategories = Object.keys(_menu)
const _secondMenu = [
  {
    id: '1002',
    title: 'Risk Disclaimer',
    url: '/terms#risk-disclaimer',
    className: ' md:text-left'
  },
  {
    id: '1003',
    title: 'Terms',
    url: 'terms#terms',
    className: ''
  },
  {
    id: '1004',
    title: 'Privacy Policy',
    url: '/terms#privacy-policy',
    className: ' md:text-left'
  },
]
const _socialMenu = [
  {
    id: '1001',
    title: 'Facebook',
    url: 'https://www.facebook.com/ComearthHQ',
    icon: (
      <path d='M15.9998 2.66602C8.63584 2.66602 2.6665 8.63535 2.6665 15.9993C2.6665 22.654 7.5425 28.17 13.9172 29.1713V19.8527H10.5305V15.9993H13.9172V13.062C13.9172 9.72068 15.9065 7.87535 18.9532 7.87535C20.4118 7.87535 21.9372 8.13535 21.9372 8.13535V11.4153H20.2572C18.5998 11.4153 18.0838 12.4433 18.0838 13.498V15.9993H21.7812L21.1905 19.8527H18.0838V29.1713C24.4572 28.1713 29.3332 22.6527 29.3332 15.9993C29.3332 8.63535 23.3638 2.66602 15.9998 2.66602Z' />
    ),
  },
  {
    id: '1002',
    title: 'Twitter',
    url: 'https://twitter.com/comearthHQ',
    icon: (
      <path d='M29.5494 7.54142C28.5315 7.99168 27.452 8.28739 26.3467 8.41876C27.5117 7.722 28.3837 6.62544 28.8001 5.33342C27.7067 5.98409 26.5081 6.44009 25.2587 6.68676C23.5332 4.84052 20.7818 4.38554 18.5538 5.57803C16.3257 6.77051 15.1782 9.31228 15.7574 11.7721C11.2734 11.5473 7.09573 9.42942 4.26407 5.94542C3.76846 6.79669 3.50801 7.76439 3.5094 8.74942C3.5094 10.6828 4.4934 12.3908 5.9894 13.3908C5.10408 13.3629 4.23825 13.1238 3.46407 12.6934V12.7628C3.46462 15.4175 5.33542 17.7043 7.9374 18.2308C7.11556 18.4535 6.25381 18.4863 5.4174 18.3268C6.14691 20.599 8.24067 22.1558 10.6267 22.2001C8.29066 24.0348 5.32106 24.8656 2.37207 24.5094C4.921 26.1487 7.8882 27.0189 10.9187 27.0161C21.1761 27.0161 26.7854 18.5188 26.7854 11.1494C26.7854 10.9094 26.7787 10.6668 26.7681 10.4294C27.8599 9.64031 28.8022 8.66278 29.5507 7.54276L29.5494 7.54142Z' />
    ),
  },
  {
    id: '1003',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/company/comearth-metaverse/',
    icon: (
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.772 4H26.2213C27.2 4 28 4.77333 28 5.72933V26.2707C28 27.2267 27.2 28 26.2213 28H5.77067C4.792 28 4 27.2267 4 26.2707V5.72933C4 4.77333 4.79067 4 5.772 4ZM7.87672 10.8294C8.26383 11.2168 8.78916 11.4342 9.33677 11.4337L9.33611 11.4337H9.33744L9.33677 11.4337C10.4764 11.434 11.4007 10.5107 11.4014 9.371C11.4022 8.23108 10.4787 7.3064 9.33877 7.30566C8.19886 7.30493 7.27418 8.22842 7.27344 9.36833C7.27238 9.91618 7.48945 10.4419 7.87672 10.8294ZM20.8933 24.4523H24.4466H24.4479V18.1656C24.4479 15.0816 23.7813 12.7109 20.1813 12.7109C18.4479 12.7109 17.2879 13.6616 16.8106 14.5603H16.7639V13.0003H13.3506V24.4523H16.9053V18.7856C16.9053 17.2909 17.1879 15.8456 19.0399 15.8456C20.8666 15.8456 20.8933 17.5549 20.8933 18.8829V24.4523ZM7.55469 24.452V13H11.12V24.452H11.1187H7.55469Z'
      />
    ),
  },
  {
    id: '1004',
    title: 'YouTube',
    url: 'https://www.youtube.com/channel/UCOUBjopfx67GpOWO3fn0FWA',
    icon: (
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M29.3332 15.9987C29.3332 15.9987 29.3332 11.0387 28.7238 8.6627C28.3892 7.35336 27.3998 6.32136 26.1398 5.9667C23.8612 5.33203 15.9998 5.33203 15.9998 5.33203C15.9998 5.33203 8.1425 5.33203 5.85984 5.9667C4.60517 6.31603 3.6145 7.34936 3.27584 8.6627C2.6665 11.0387 2.6665 15.9987 2.6665 15.9987C2.6665 15.9987 2.6665 20.9587 3.27584 23.3347C3.6105 24.644 4.59984 25.676 5.85984 26.0307C8.1425 26.6654 15.9998 26.6654 15.9998 26.6654C15.9998 26.6654 23.8612 26.6654 26.1398 26.0307C27.3945 25.6814 28.3852 24.648 28.7238 23.3347C29.3332 20.9587 29.3332 15.9987 29.3332 15.9987ZM21.3333 15.9987L13.3333 20.6654V11.332L21.3333 15.9987Z'
      />
    ),
  },
  {
    id: '1005',
    title: 'Instagram',
    url: 'https://www.instagram.com/comearth.hq',
    icon: (
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.4958 2.74797C20.0745 2.6813 19.6225 2.66797 15.9998 2.66797C12.3772 2.66797 11.9252 2.6853 10.5038 2.74797C9.0825 2.81464 8.11717 3.0373 7.2665 3.36797C6.37641 3.70227 5.57007 4.22694 4.90384 4.9053C4.22491 5.57106 3.70015 6.37754 3.3665 7.26797C3.03584 8.11864 2.81317 9.08397 2.7465 10.5053C2.67984 11.9266 2.6665 12.3786 2.6665 16.0013C2.6665 19.624 2.68384 20.076 2.7465 21.4973C2.81317 22.9173 3.03584 23.8853 3.3665 24.7346C3.70108 25.6246 4.22571 26.4309 4.90384 27.0973C5.56987 27.7759 6.37627 28.3006 7.2665 28.6346C8.11717 28.964 9.08384 29.188 10.5038 29.2546C11.9252 29.3213 12.3772 29.3346 15.9998 29.3346C19.6225 29.3346 20.0745 29.3173 21.4958 29.2546C22.9158 29.188 23.8838 28.964 24.7332 28.6346C25.6229 28.2996 26.4291 27.7751 27.0958 27.0973C27.7747 26.4315 28.2994 25.625 28.6332 24.7346C28.9625 23.884 29.1865 22.9173 29.2532 21.4973C29.3198 20.076 29.3332 19.624 29.3332 16.0013C29.3332 12.3786 29.3158 11.9266 29.2532 10.5053C29.1865 9.0853 28.9625 8.1173 28.6332 7.26797C28.2984 6.37809 27.7738 5.57183 27.0958 4.9053C26.3545 4.1653 25.6132 3.70664 24.7332 3.36797C23.8825 3.0373 22.9158 2.81464 21.4958 2.74797ZM9.33325 16.0007C9.33325 12.3188 12.318 9.33398 15.9999 9.33398C19.6818 9.33398 22.6666 12.3188 22.6666 16.0007C22.6666 19.6825 19.6818 22.6673 15.9999 22.6673C12.318 22.6673 9.33325 19.6825 9.33325 16.0007ZM24.6666 9.00065C24.6666 8.08018 23.9204 7.33398 22.9999 7.33398C22.0794 7.33398 21.3333 8.08018 21.3333 9.00065C21.3333 9.92113 22.0794 10.6673 22.9999 10.6673C23.9204 10.6673 24.6666 9.92113 24.6666 9.00065ZM20 16.001C20 13.7918 18.2091 12.001 16 12.001C13.7909 12.001 12 13.7918 12 16.001C12 18.2101 13.7909 20.001 16 20.001C18.2091 20.001 20 18.2101 20 16.001Z'
      />
    ),
  },
  {
    id: '1006',
    title: 'Telegram',
    url: 'https://t.me/COMEARTHHQ',
    icon: (
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.6665 16.0013C2.6665 23.3653 8.63584 29.3346 15.9998 29.3346C23.3638 29.3346 29.3332 23.3653 29.3332 16.0013C29.3332 8.6373 23.3638 2.66797 15.9998 2.66797C8.63584 2.66797 2.6665 8.6373 2.6665 16.0013ZM11.8706 17.5513L11.8532 17.5607V17.562L8.52389 16.522C7.80389 16.302 7.79855 15.806 8.68389 15.4513L21.6612 10.438C22.4146 10.1287 22.8412 10.518 22.5972 11.4887L20.3879 21.918C20.2332 22.6593 19.7866 22.8367 19.1652 22.494L15.7652 19.9767L14.1812 21.5073C14.1753 21.513 14.1694 21.5187 14.1635 21.5243C14.0075 21.6743 13.8761 21.8006 13.6346 21.8327C13.3852 21.8673 13.1799 21.7927 13.0306 21.378L11.8706 17.5513Z'
      />
    ),
  },
  {
    id: '1007',
    title: 'Discord',
    url: 'https://discord.gg/comearth',
    icon: (
      <path d='M13.4347 14.668C14.2347 14.668 14.8827 15.268 14.868 16.0013C14.868 16.7346 14.236 17.3346 13.4347 17.3346C12.648 17.3346 12 16.7346 12 16.0013C12 15.268 12.6333 14.668 13.4347 14.668ZM18.5653 14.668C19.3667 14.668 20 15.268 20 16.0013C20 16.7346 19.3667 17.3346 18.5653 17.3346C17.7787 17.3346 17.132 16.7346 17.132 16.0013C17.132 15.268 17.764 14.668 18.5653 14.668ZM25.188 2.66797C26.7387 2.66797 28 3.95597 28 5.55197V30.668L25.052 28.008L23.392 26.44L21.636 24.7733L22.364 27.364H6.812C5.26133 27.364 4 26.076 4 24.48V5.55197C4 3.95597 5.26133 2.66797 6.812 2.66797H25.1867H25.188ZM19.8947 20.952C22.9253 20.8546 24.092 18.824 24.092 18.824C24.092 14.316 22.116 10.6613 22.116 10.6613C20.1427 9.15063 18.2627 9.19197 18.2627 9.19197L18.0707 9.41597C20.4027 10.144 21.4853 11.1946 21.4853 11.1946C20.2121 10.4773 18.8089 10.0204 17.3573 9.85064C16.4366 9.74664 15.5066 9.7556 14.588 9.8773C14.5053 9.8773 14.436 9.89197 14.3547 9.9053C13.8747 9.94797 12.708 10.1293 11.2413 10.788C10.7347 11.0253 10.432 11.1946 10.432 11.1946C10.432 11.1946 11.5707 10.088 14.0387 9.35997L13.9013 9.19197C13.9013 9.19197 12.0227 9.15063 10.048 10.6626C10.048 10.6626 8.07333 14.316 8.07333 18.824C8.07333 18.824 9.22533 20.8533 12.256 20.952C12.256 20.952 12.7627 20.3226 13.176 19.7906C11.4333 19.2573 10.776 18.1373 10.776 18.1373C10.776 18.1373 10.912 18.236 11.1587 18.376C11.172 18.3893 11.1853 18.404 11.2133 18.4173C11.2547 18.4466 11.296 18.46 11.3373 18.488C11.68 18.684 12.0227 18.8373 12.3373 18.964C12.9 19.188 13.572 19.412 14.3547 19.5666C15.5271 19.7964 16.7325 19.801 17.9067 19.58C18.5906 19.4579 19.2578 19.2561 19.8947 18.9786C20.3747 18.796 20.9093 18.5293 21.472 18.152C21.472 18.152 20.7867 19.3 18.9893 19.8186C19.4013 20.3506 19.896 20.952 19.896 20.952H19.8947Z' />
    ),
  },
]

const FooterAlt = () => {
  const [showButton, setShowButton] = useState(window.outerWidth < 600)

  const handleWindowScroll = () => {
    setShowButton(window.scrollY > 4000)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);
    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    }
  }, [])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='bg-[#161718]'>
      <div className='mx-[20px] lg:mx-[80px] text-white pt-[100px] relative'>
        <div className='grid grid-cols-12 border-t-[1px] md:border-none border-[#363738] pt-[24px] md:pt-0'>
          <div className='col-span-12 text-center md:text-left md:col-span-4 mb-[24px] md:mb-0'>
            <div className='mb-[20px] md:mb-[24px]'>
              <img className='inline-block max-w-full' src={_logoComearth} alt='COMEARTH' />
            </div>

            <div className='flex justify-center md:justify-start'>
              <a href='https://www.nftically.com/?utm_source=comearth.world&utm_medium=logo&utm_campaign=footer' target='_blank' className='max-w-[215px] text-center bg-[#35363C] border border-white/[.20] rounded-lg py-[8px] px-[20px]'>
                <div className='text-[12px] text-white/[.80] mb-[4px]'>Powered By</div>
                <img className='inline-block max-w-full' src={_logoNftcally} alt='NFTically' />
              </a>
            </div>
          </div>

          {_menuCategories.map((el) => (
            <div key={el} className='col-span-6 md:col-span-2 mb-[32px] md:mb-0'>
              <h4 className='capitalize font-semibold text-[16px] mb-[16px]'>{el}</h4>
              <ul>
                {_menu[el].map((elI) => (
                  <li key={elI.id} className='mb-[14px]'>
                    <a
                      className='text-[14px] text-white/[.80] hover:text-white transition duration-[200ms] ease-in-out'
                      href={elI.url}
                      target={elI.target ? '_blank' : '_self' }
                    >
                      {elI.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className='col-span-12 md:col-span-4'>
            <div className='md:max-w-[214px] md:ml-auto'>
              <SimpleButton className='w-full mb-[32px] md:mb-[20px]' href='contact-us' size='sm'>
                Contact Us
              </SimpleButton>
              <h4 className='capitalize text-center md:text-left font-semibold text-[14px] mb-[12px] md:mb-[8px]'>Follow us on</h4>
              <ul className='flex flex-wrap justify-between md:justify-start items-center -mb-[16px] -mx-[6px]'>
                {_socialMenu.map((el) => (
                  <li key={el.id} className='mb-[16px] mx-[6px]'>
                    <a href={el.url} target='_blank'>
                      <svg
                        className='fill-white/[.65] hover:fill-white transition duration-[200ms] ease-in-out'
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        {el.icon}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {showButton && (
          <div className='fixed hidden md:block bottom-10 right-10 z-[100]'>
            <button onClick={scrollTop} className='flex items-center justify-center rounded-[9px] h-[48px] w-[48px] pseudo-border-gradient relative'>
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FFFFFF]/10 to-[#FFFFFF]/0'></div>
              <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6543 12.1989C16.8732 12.98 15.6068 12.98 14.8257 12.1988L9.32534 6.69728L3.82495 12.1988C3.04393 12.98 1.77749 12.98 0.996384 12.1989L0.854255 12.0568C0.073167 11.2757 0.0732122 10.0093 0.854355 9.22827L9.32534 0.758482L17.7963 9.22827C18.5775 10.0093 18.5775 11.2757 17.7964 12.0568L17.6543 12.1989Z" fill="white" fill-opacity="0.8"/>
              </svg>
            </button>
          </div>
        )}

        <div className='mt-[20px] md:mt-[65px] border-t-[1px] border-[#363738] py-[20px]'>
          <div className='flex flex-wrap md:flex-nowrap items-center justify-between'>
            <div className='hidden md:block text-[12px] text-white/[.65]'>
              © NFTICALLY {new Date().getFullYear()} | All Rights Reserved. Built with Love on
              planet Earth.
            </div>
            <ul className='grid grid-cols-3 text-center md:flex items-center md:-mx-[16px] mb-[24px] md:mb-0 w-full md:w-auto'>
              {_secondMenu.map((el) => (
                <li key={el.id} className={`md:mx-[16px] ${el.className}`}>
                  <Link
                    className='text-[12px] text-white/[.65] hover:text-white transition duration-[200ms] ease-in-out'
                    to={el.url}

                  >
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className='md:hidden text-[12px] text-white/[.65] text-center block w-full'>
              © NFTICALLY {new Date().getFullYear()} | All Rights Reserved. Built with Love on
              planet Earth.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterAlt
