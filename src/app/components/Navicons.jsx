import React from 'react'
import Link from 'next/link'

export default function Navicons({name,address, icon}) {
  return (
    <Link href={address} className='flex flex-col items-center'>
      {icon}
      <p className='sm:text-white'>{name}</p>
    </Link>
  )
}
