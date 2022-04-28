import {Fragment} from 'react'
import {BrowserRouter} from 'react-router-dom'

// Components
import {HeaderMenu} from 'components/layout/HeaderMenu'
import {Footer} from 'components/layout/Footer'

// Routing
import Routes from 'routing/Routes'

const App = (props) => {
  const {basename} = props

  return (
    <Fragment>
      <HeaderMenu />
      <BrowserRouter basename={basename}>
        <Routes />
      </BrowserRouter>
      <Footer />
    </Fragment>
  )
}

export default App
