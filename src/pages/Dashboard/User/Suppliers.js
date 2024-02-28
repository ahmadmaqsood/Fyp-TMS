import React from 'react'
import SupplierTablecomponent from '../../../components/SupplierTableComponent'

export default function Suppliers() {
  return (
    <div className='min-h-screen w-full bg-[#BDBEC1]'>
      <div className='bg-[#4375AD] h-40  text-white px-11  mb-6 flex flex-col justify-center'>
        <h1 className='text-3xl font-semibold '>Supplier</h1>
        <p className='text-base font-medium'>Information About Supplier</p>
      </div>
      <div className='bg-white w-11/12 -mt-16 mx-auto py-6 rounded-t-md'>
        <h5 className='text-xl text-slate-600 mx-12 mb-3 font-semibold'>View Supplier Data</h5>
        <div><SupplierTablecomponent /></div>
      </div>
    </div>
  )
}
