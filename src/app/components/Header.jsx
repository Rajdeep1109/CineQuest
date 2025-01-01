import React from 'react'
import Navicons from './Navicons'
import { UilEstate } from '@iconscout/react-unicons'
import { UilArrowGrowth } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilSearch } from '@iconscout/react-unicons'

export default function Header() {
  return (
    <>
    <div className='bg-[#181818] w-screen flex justify-around items-center'>
    <div className='flex justify-start gap-7 p-4'>
        <Navicons icon={<UilEstate size="38" color="white"/>} address="/" name={"Home"}/>
        <Navicons icon={<UilArrowGrowth size="38" color="white"/>} address="/Trending" name={"Trending"}/>
        <Navicons icon={<UilUser size="38" color="white"/>} address="/profile" name={"Account"}/>
    </div>
    <div className='flex gap-4'>
    <input type='text' placeholder='Search Here' className='h-[38px] p-2 border-white border-3 rounded-md'/>
    <UilSearch size="38" color="white"/>
    </div>
    </div>
    </>
  )
}
