import {Fragment} from 'react'
import {Routes as RRDRoutes, Route} from 'react-router-dom'

// Views
import Promo from 'views/Promo'
import Home from 'views/Home'
import Land from 'views/Land'
import ReserveLand from 'views/ReserveLand'
import Failed from 'views/Failed'
import Success from 'views/Success'
import Terms from 'views/Terms'

const Routes = () => {
  return (
    <Fragment>
      <RRDRoutes>
        <Route path='/' element={<Promo />} />
        <Route path='/metaverse' element={<Home />}>
          <Route hash='land' path='land/:landId' element={<Land />} />
        </Route>
        <Route path='/reserve-land' element={<ReserveLand />} exact />
        <Route path='/failed' element={<Failed />} exact />
        <Route path='/success' element={<Success />} exact />
        <Route path='/terms' element={<Terms />} />
      </RRDRoutes>
    </Fragment>
  )
}

export default Routes
