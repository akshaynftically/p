import {Fragment} from 'react'
import {Routes as RRDRoutes, Route} from 'react-router-dom'

// Views
import Home from 'views/Home'

const Routes = () => {
  return (
    <Fragment>
      <RRDRoutes>
        <Route path='/' element={<Home />} exact />
      </RRDRoutes>
    </Fragment>
  )
}

export default Routes
