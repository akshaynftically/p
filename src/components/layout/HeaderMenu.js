import React from 'react'
import logo from 'assets/img/logo.svg'
import AsideLeft from "../aisde/AsideLeft";

export function HeaderMenu() {
  return (
    <header className='absolute w-full top-0 left-0 py-10 z-[100]'>
      <nav className='sm:max-w-[90rem] 2xl:max-w-[105rem] flex basis-full items-center sm:items-end w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <AsideLeft />

        <a className='max-w-[250px] sm:max-w-[unset] flex-none' href='/'>
          <img className='block' src={logo} alt='logo' />
        </a>
      </nav>
    </header>
  )
}
