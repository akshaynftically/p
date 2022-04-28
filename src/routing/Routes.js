import {Fragment} from 'react'
import {Routes as RRDRoutes, Route} from 'react-router-dom'

// Views
import Home from 'views/Home'
import ReserveLand from 'views/ReserveLand'

const Routes = () => {
  return (
    <Fragment>
      <RRDRoutes>
        <Route path='/' element={<Home />} exact />
        <Route path='/reserve-land' element={<ReserveLand />} exact />
      </RRDRoutes>
    </Fragment>
  )
}

export default Routes
