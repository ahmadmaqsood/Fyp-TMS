import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Dashboard from './Dashboard'
import Auth from "./Auth"
export default function Index() {
    return (
        <>
                <Routes>
                    <Route path='/*' element={<Dashboard />} />
                    <Route path='/auth/*' element={<Auth />} />
                </Routes>
          
        </>
    )
}
