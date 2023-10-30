import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import { NAV_LINKS } from '../data'
import Contact from '../pages/Contact'
import CarWash from '../pages/CarWash'
import CarRepair from '../pages/CarRepair'
import Error from '../pages/Error'
import Login from '../components/Login/Login'
import PrivateRoute from '../components/PrivateRoute/PrivateRoute'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path="/"  element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path={NAV_LINKS[0].navUrl} element={<Home />} />
              <Route path={NAV_LINKS[1].navUrl}  element={<About />} />
              <Route path={NAV_LINKS[2].navUrl}   element={<Services />} />
              <Route path={NAV_LINKS[3].navUrl}  element={<Contact />} />
              {/* dynamic routing */}
              <Route path="/services/:id"   element={<CarWash />} />
            </Route>

            {/* for nested routing */}
            {/* <Route path="/services">
              <Route path="car-wash"  element={<CarWash />} />
              <Route path="car-repair"  element={<CarRepair />} />
            </Route> */}


            <Route path='*' element={<Error />} />
        </Routes>
    </>
  )
}

export default Router