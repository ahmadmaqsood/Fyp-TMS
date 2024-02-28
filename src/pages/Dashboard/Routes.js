import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Goods from './Goods'
import AddGoods from './AddGoods'
import StockNotification from './StockNotification'
import AddUsers from './AddUsers/AddUsers'
import AdminStaff from './User/AdminStaff'
import Suppliers from './User/Suppliers'
import Customer from './User/Customer'
import AddSuppliers from './AddUsers/AddSuppliers'
import AddCustomer from './AddUsers/AddCustomer'
export default function Index() {
    return (
        <>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/goods' element={<Goods />} />
                    <Route path='/add-goods' element={<AddGoods />} />
                    <Route path='/adminstaff' element={<AdminStaff />} />
                    <Route path='/add-supplier' element={<AddSuppliers />} />
                    <Route path='/add-customer' element={<AddCustomer />} />
                    <Route path='/supplier' element={<Suppliers />} />
                    <Route path='/customer' element={<Customer />} />
                    <Route path='/add-users' element={<AddUsers />} />
                    <Route path='/stock-notification' element={<StockNotification />} />
                </Routes>
            </main>

        </>
    )
}
