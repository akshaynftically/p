import {useLocation} from 'react-router-dom'
import clsx from 'clsx'

// Components
import {HeaderMenu} from 'components/layout/HeaderMenu'
import Footer from 'components/layout/Footer'
import FooterAlt from 'components/layout/FooterAlt'
import {Aside} from 'components/aisde/index'

// Routing
import Routes from 'routing/Routes'

const App = () => {
  const {pathname} = useLocation()

  return (
    <main
      className={clsx(
        {'home-page': location.pathname === '/'},
        {'inner-page': location.pathname !== '/' && location.pathname !== '/metaverse'}
      )}
    >
      <HeaderMenu />
      <Aside />
      <Routes />
      {pathname !== '/' && <Footer />}
      {pathname === '/' && <FooterAlt />}
    </main>
  )
}

export default App
