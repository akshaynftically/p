import React from 'react'
import logo from 'assets/img/logo.svg'

export function HeaderMenu() {
  return (
    <header className='absolute w-full top-0 left-0 py-10 z-20'>
      <nav className='max-w-[105rem] flex flex-wrap basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <a className='flex-none' href='/'>
          <img src={logo} alt='logo' />
        </a>

        <div className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow ml-auto sm:block sm:w-auto sm:basis-auto sm:order-2'>
          <div className='flex flex-col gap-6 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5'>
            {/*<Aisde />*/}
          </div>
        </div>
      </nav>
    </header>
  )
}
