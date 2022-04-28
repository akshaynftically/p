import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import clsx from 'clsx'

// Components
import {HeaderMenu} from 'components/layout/HeaderMenu'
import Footer from 'components/layout/Footer'

// Routing
import Routes from 'routing/Routes'

const App = () => {
  const location = useLocation()

  useEffect(() => {
    console.log(location)
  }, [location])

  return (
    <main
      className={clsx(
        {'home-page': location.pathname === '/'},
        {'inner-page': location.pathname !== '/'}
      )}
    >
      <HeaderMenu />
      <Routes />
      <Footer />
    </main>
  )
}

export default App
