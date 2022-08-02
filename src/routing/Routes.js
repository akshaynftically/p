import {Fragment} from 'react'
import {Routes as RRDRoutes, Route, Navigate} from 'react-router-dom'

// Views
import Promo from 'views/Promo'
import Home from 'views/Home'
import Land from 'views/Land'
import ReserveLand from 'views/ReserveLand'
import Faild from 'views/Failed'
import Success from 'views/Success'
import Terms from 'views/Terms'
import About from 'views/About'
import Contact from 'views/ContactUs'
import NotFound from 'views/Errors/NotFound'
import ServerError from 'views/Errors/ServerError'
import PrivacyPolicy from 'views/Terms/PrivacyPolicy'
import RiskPolicy from 'views/Terms/RiskPolicy'

const Routes = () => {
  return (
    <Fragment>
      <RRDRoutes>
        <Route path='/' element={<Promo />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/500' element={<ServerError />} />
        <Route path='/404' element={<NotFound />} />
        <Route path='/metaverse' element={<Navigate to="/" />}>
          <Route hash='land' path='land/:landId' element={<Navigate to="/" />} />
        </Route>
        <Route path='/reserve-land' element={<Navigate to="/" />} exact />
        {/* <Route path='/reserve-land' element={<ReserveLand />} exact /> */}
        <Route path='/failed' element={<Faild />} exact />
        <Route path='/success' element={<Success />} exact />
        <Route path='/terms' element={<Terms />} />
        <Route path='/policy' element={<PrivacyPolicy />} />
        <Route path='/risk' element={<RiskPolicy />} />


        <Route path='*' element={<Navigate to="404"/>} />

      </RRDRoutes>
    </Fragment>
  )
}

export default Routes
