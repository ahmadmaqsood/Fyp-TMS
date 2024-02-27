import React from 'react'
import ShowcaseCard from '../../../components/ShowcaseCard/ShowcaseCard'
export default function Home() {
  return (
    <>
      <div className='min-h-screen w-full bg-[#BDBEC1]'>
        <div className='bg-[#4375AD] h-40 flex items-center'>
          <h1 className='text-3xl font-semibold text-white mx-10 mb-8'>Dashboard</h1>
        </div>
        <div className='bg-white w-11/12 -mt-16 mx-auto py-6'>
          <h5 className='text-2xl text-slate-500 mx-12 mb-3'>Welcome to the Administrator's Panel</h5>
          <div className='bg-[#F0F1F4] border-s-2 border-slate-500 mx-12 py-6 px-5'>
            <h6 className='text-lg'>Hello,Liam Moore</h6>
            <p>This information is for administrator or staf to run the data within the system</p>
          </div>
        </div>
        <div>
          <ShowcaseCard />
        </div>
      </div>
    </>
  )
}
