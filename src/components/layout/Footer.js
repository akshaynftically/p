const Footer = () => {
  return (
    <div className='footer-container fixed left-0 right-0 bottom-0'>
      <footer className='border-t border-[rgba(225,225,225,.1)] text-gray-400 sm:max-w-[35rem] lg:max-w-[100rem] flex flex-wrap basis-full items-center w-full mx-auto py-5 px-5'>
        <div className='text-center block w-full lg:w-auto lg:flex items-center lg:mx-[unset] text-[12px] mb-[10px] lg:mb-0'>
          <span className='uppercase mr-2'>Nftcally</span> 2022 | All Rights Reserved
        </div>

        <nav className='mx-auto lg:mx-[unset] lg:ml-auto text-[10px] md:text-[12px]'>
          <ul className='flex'>
            <li className='mr-2 sm:mr-8'>
              <a href='/'>Community Guidelines</a>
            </li>
            <li className='mr-2 sm:mr-8'>
              <a href='/'>Risk Policy</a>
            </li>
            <li className='mr-2 sm:mr-8'>
              <a href='/'>Terms</a>
            </li>
            <li>
              <a href='/'>Privacy Policy</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export default Footer
