import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Appointment from '../AppointmentPage/Appointment';
import Home from '../Home';
import History from '../History';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/appointment' element={<Appointment />}></Route>
      <Route path='/history' element={<History />}></Route>
    </Routes>
  )
}

export default AllRoutes
