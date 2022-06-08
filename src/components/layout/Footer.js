import {Link, useLocation} from 'react-router-dom'

const Footer = () => {
  const {pathname} = useLocation()

  return (
    <div className={`footer-container z-[1] ${(pathname !== '/contact-us' && pathname !== '/reserve-land') && 'fixed'} left-0 right-0 bottom-0`}>
      <footer className=' text-gray-400 sm:items-end w-full mx-auto px-4 sm:px-6 lg:px-[80px] flex flex-wrap basis-full items-center pb-[32px]'>
        <hr className='hidden lg:block border-[#2D2E2F] w-full mb-[20px]'/>
        <div className='text-center mt-[30px] lg:mt-0 block w-full lg:w-auto lg:flex items-center lg:mx-[unset] text-[12px] mb-[10px] font-[700] lg:mb-0'>
          <svg className='mr-[5px]' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 10C4.10145 10 3.26812 9.77536 2.5 9.32609C1.73188 8.87681 1.12319 8.26812 0.673913 7.5C0.224638 6.73188 0 5.89855 0 5C0 4.10145 0.224638 3.26812 0.673913 2.5C1.12319 1.73188 1.73188 1.12319 2.5 0.673913C3.26812 0.224638 4.10145 0 5 0C5.89855 0 6.73188 0.224638 7.5 0.673913C8.26812 1.12319 8.87681 1.73188 9.32609 2.5C9.77536 3.26812 10 4.10145 10 5C10 5.89855 9.77536 6.73188 9.32609 7.5C8.87681 8.26812 8.26812 8.87681 7.5 9.32609C6.73188 9.77536 5.89855 10 5 10ZM5 9C5.72464 9 6.3913 8.81884 7 8.45652C7.62319 8.0942 8.11594 7.6087 8.47826 7C8.84058 6.37681 9.02174 5.71015 9.02174 5C9.02174 4.27536 8.84058 3.6087 8.47826 3C8.11594 2.37681 7.62319 1.8913 7 1.54348C6.3913 1.18116 5.72464 1 5 1C4.28986 1 3.62319 1.18116 3 1.54348C2.3913 1.8913 1.9058 2.37681 1.54348 3C1.18116 3.6087 1 4.27536 1 5C1 5.71015 1.18116 6.37681 1.54348 7C1.9058 7.6087 2.3913 8.0942 3 8.45652C3.62319 8.81884 4.28986 9 5 9ZM5.08696 7.58696C4.36232 7.58696 3.75362 7.33333 3.26087 6.82609C2.76812 6.31884 2.52174 5.71015 2.52174 5C2.52174 4.27536 2.76812 3.66667 3.26087 3.17391C3.75362 2.66667 4.36232 2.41304 5.08696 2.41304C5.49275 2.41304 5.84058 2.48551 6.13043 2.63044C6.42029 2.77536 6.7029 2.98551 6.97826 3.26087L6.30435 3.86957C6.14493 3.68116 5.97101 3.54348 5.78261 3.45652C5.6087 3.36957 5.37681 3.32609 5.08696 3.32609C4.65217 3.32609 4.27536 3.49275 3.95652 3.82609C3.63768 4.14493 3.47826 4.53623 3.47826 5C3.47826 5.46377 3.63768 5.86232 3.95652 6.19565C4.27536 6.51449 4.65217 6.67391 5.08696 6.67391C5.62319 6.67391 6.06522 6.44203 6.41304 5.97826L7.13043 6.54348C6.60869 7.23913 5.92754 7.58696 5.08696 7.58696Z" fill="white" fillOpacity="0.65"/>
          </svg>
          <span className='uppercase mr-2'>Nftically</span> 2022 | All Rights Reserved
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
