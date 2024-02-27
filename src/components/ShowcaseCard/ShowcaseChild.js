import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
export default function ShowcaseChild({ num, title, btnText, backgroundColor, bgColor, imgSrc, icon }) {
    return (
        <div className='ShowcaseChild text-white w-full gap-x-1 ' style={{ backgroundColor, opacity: '0.9' }}>
            <div className='img '>
                <div className='flex justify-between items-center mx-3'>
                    <div className='py-4'>
                        <h2 className='num font-bold text-3xl  mb-3 '>{num}</h2>
                        <h2 className='title text-[14px] mb-3 opacity-75 font-semibold'>{title}</h2>
                    </div>
                    <div className=' '>
                        {icon}
                    </div>
                </div>
                <button className='button  opacity-100 text-center py-2 w-full ' style={{ backgroundColor: bgColor }}>{btnText} <span><AddCircleIcon style={{fontSize:"20px"}}/></span></button>
            </div>
        </div>
    )
}
