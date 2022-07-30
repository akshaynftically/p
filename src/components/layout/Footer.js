import {Link, useLocation} from 'react-router-dom'

const Footer = () => {
  const {pathname} = useLocation()

  return (
    <div className={`footer-container z-[1] ${(pathname !== '/contact-us' && pathname !== '/reserve-land') && 'fixed'} left-0 right-0 bottom-0`}>
      <footer className=' text-gray-400 sm:items-end w-full mx-auto px-4 sm:px-6 lg:px-[80px] flex flex-wrap basis-full items-center pb-[32px]'>
        <hr className='hidden lg:block border-[#2D2E2F] w-full mb-[20px]'/>
        <div className='text-center mt-[30px] lg:mt-0 block w-full lg:w-auto lg:flex items-center lg:mx-[unset] text-[12px] mb-[10px] font-[700] lg:mb-0'>
        © NFTICALLY {new Date().getFullYear()} | All Rights Reserved. Built with Love on
              planet Earth.
        </div>

        <nav className='mx-auto lg:mx-[unset] lg:ml-auto text-[10px] md:text-[12px]'>
          <ul className='flex'>
            
            <li className='mr-[16px] md:mr-[38px]'>
              <Link target="_self" to='/terms#risk-disclaimer'>Risk Disclaimer</Link>
            </li>
            <li className='mr-[16px] md:mr-[38px]'>
              <Link to='/terms#terms'>Terms</Link>
            </li>
            <li>
              <Link to='/terms#privacy-policy'>Privacy Policy</Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export default Footer
