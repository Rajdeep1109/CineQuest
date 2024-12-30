import React from 'react'

export default function Navicons({name, icon}) {
  return (
    <>
    <div className='flex flex-col items-center justify-center font-medium text-black bg-[#F79F19] rounded-md p-2'>
    {icon}
    {name}
    </div>
    </>
  )
}
