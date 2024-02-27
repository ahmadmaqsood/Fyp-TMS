import React from 'react'
import InventoryIcon from '@mui/icons-material/Inventory';
import WindowIcon from '@mui/icons-material/Window';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ShowcaseChild from './ShowcaseChild';
export default function ShowcaseCard() {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 my-10 mx-auto place-items-center w-11/12'>
            <ShowcaseChild num="4" title="Incoming Goods" btnText="View Incoming Goods" backgroundColor="#028856" bgColor="#006E44" icon={<InventoryIcon  style={{color:"#007147",fontSize:"70px"}} />} />
            <ShowcaseChild num="3" title="Outgoing Goods" btnText="View Outgoing Goods" backgroundColor="#F26F52" bgColor="#C35840"  icon={<InventoryIcon  style={{color:"#C5583F",fontSize:"70px"}}/>} />
            <ShowcaseChild num="5" title="Suppliers" btnText="View Suppliers info" backgroundColor="#EDA152" bgColor="#BB7D3F"  icon={<WindowIcon  style={{color:"#C08142",fontSize:"90px"}}/>} />
            <ShowcaseChild num="8" title="Customers" btnText="View Customers info" backgroundColor="#01A2DC" bgColor="#0083B4"  icon={<Diversity3Icon  style={{color:"#0083B4",fontSize:"90px"}} />} />
        </div>
    )
}
