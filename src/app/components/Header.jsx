import React from 'react'
import Navicons from './Navicons'
import { UilEstate } from '@iconscout/react-unicons'
import { UilFeedback } from '@iconscout/react-unicons'

export default function Header({icon, name}) {
  return (
    <>
    <div className='bg-[#181818] flex justify-start gap-3 p-4'>
        <Navicons icon={<UilEstate size="38"/>} name={"Home"}/>
        
        <Navicons icon={<UilFeedback size="38"/>} name={"Suggestions"}/>
    </div>
    </>
  )
}
