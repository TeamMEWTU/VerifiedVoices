import Image from 'next/image'
import React from 'react'
import { HomeIcon, ChevronDownIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <div className='flex bg-white px-4 py-2 shadow-sm sticky top-0 z-50'>
      <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
        <Image alt='image' src="/reddit-header.png" objectFit='contain' fill/>
      </div>

      <div className='flex items-center mx-7 xl:min-w-[300px]'>
        <HomeIcon className='h-5 w-5'/>
        <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
        <ChevronDownIcon className='h-5 w-5'/>
      </div>
    </div>
  )
}

export default Header