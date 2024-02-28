import React from 'react'

export default function AddCustomer() {
    return (
        <div className='min-h-screen w-full bg-[#BDBEC1]'>
            <div className='bg-[#4375AD] h-40  text-white px-11  mb-6 flex flex-col justify-center'>
                <h1 className='text-3xl font-semibold '>Customer</h1>
                <p className='text-base font-medium'>Information About Customer</p>
            </div>
            <div className='bg-white w-11/12 -mt-16 mx-auto py-6 rounded-t-md'>
                <h5 className='text-xl text-slate-600 mx-12 mb-3 font-semibold'>Add Customer</h5>
                <div className="mx-12 ">
                    <input type="text" className=" py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer mb-1" placeholder=" Full Name" />
                    <input type="text" className=" py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer mb-1" placeholder=" Address" />
                    <input type="text" className=" py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer mb-1" placeholder=" Telephone" />

                    <button className='bg-green-500 text-white rounded-md px-4 py-2   hover:text-green-500 hover:bg-transparent hover:border-2 hover:border-green-500 '>Add User</button>
                    <button className='bg-red-500 text-white  rounded-md px-3 py-2 mx-2  hover:text-red-500 hover:bg-transparent hover:border-2 hover:border-red-500' >Cancel</button>
                </div>
            </div>
        </div>
    )
}
