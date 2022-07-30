import {Link, useLocation} from 'react-router-dom'
import clsx from 'clsx'

// Components
import AsideLeft from 'components/aisde/AsideLeft'

// Sources
import logo from 'assets/img/logo.svg'
import logo2 from 'assets/img/logo2.svg'
import HeaderWalletInfo from '../wallet/HeaderWalletInfo'

export function HeaderMenu() {
  const {pathname} = useLocation()

  return (
    <header className='absolute w-full top-0 left-0 py-[24px] z-[100]'>
      <nav
        className={clsx(
          'flex basis-full items-center sm:items-end  mx-auto mx-[20px] lg:mx-[80px]'
        )}
      >
        <AsideLeft />

        <div className='max-w-[225px] sm:max-w-[unset] flex items-end'>
          <Link to='/'>
            <img src={logo} alt='Logo 1'/>
          </Link>
          <div className='h-[28px] w-[1px] bg-white/50 mx-3'></div>
          <a target='_blank' href='https://www.nftically.com/?utm_source=comearth.world&utm_medium=logo&utm_campaign=header'>
            <img src={logo2} alt='Logo 2'/>
          </a>
        </div>

        {(pathname === '/reserve-land'|| pathname === '/reserve-land/') && <HeaderWalletInfo />}
      </nav>
    </header>
  )
}
