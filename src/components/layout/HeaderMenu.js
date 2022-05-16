import {Link, useLocation} from 'react-router-dom'
import clsx from 'clsx'

// Components
import AsideLeft from 'components/aisde/AsideLeft'

// Sources
import logo from 'assets/img/logo.svg'
import HeaderWalletInfo from '../wallet/HeaderWalletInfo'

export function HeaderMenu() {
  const {pathname} = useLocation()

  return (
    <header className='absolute w-full top-0 left-0 py-[24px] z-[100]'>
      <nav
        className={clsx(
          'flex basis-full items-center sm:items-end w-full mx-auto px-4 sm:px-6 lg:px-[80px]',
          {'max-w-[1340px]': pathname === '/' || pathname === '/terms'},
          {'sm:max-w-[90rem] 2xl:max-w-[105rem]': pathname !== '/' && pathname !== '/terms'}
        )}
      >
        <AsideLeft />

        <Link className='max-w-[225px] sm:max-w-[unset] flex-none' to='/metaverse'>
          <img className='block' src={logo} alt='logo' />
        </Link>

        {pathname === '/reserve-land' && <HeaderWalletInfo />}
      </nav>
    </header>
  )
}
