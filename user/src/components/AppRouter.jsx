import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Home'
import Forms from './Forms'
import Report from './Report'
export default function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='forms' element={<Forms/>}/>
        <Route path='report' element={<Report/>}/>
    </Routes>
  )
}
