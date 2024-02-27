import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Goods from './Goods'
import AddGoods from './AddGoods'
import StockNotification from './StockNotification'
export default function Index() {
    return (
        <>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/goods' element={<Goods />} />
                    <Route path='/add-goods' element={<AddGoods />} />
                    <Route path='/stock-notification' element={<StockNotification />} />
                </Routes>
            </main>

        </>
    )
}
