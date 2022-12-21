import Image from 'next/image'
import React from 'react'
import { HomeIcon, ChevronDownIcon, SearchIcon, MenuIcon } from '@heroicons/react/solid'
import { BellIcon, ChatIcon, GlobeIcon, PlusIcon, SparklesIcon, SpeakerphoneIcon, VideoCameraIcon } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

function Header() {
  const { data: session } = useSession();

  return (
    <div className='flex items-center bg-white px-4 py-2 shadow-sm sticky top-0 z-50'>
      <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
      <Link href="/">
        <Image alt='image' src="/reddit-header.png" style={{objectFit: 'contain'}} fill/>
      </Link>
      </div>

      <div className='flex items-center mx-7 xl:min-w-[300px]'>
        <HomeIcon className='h-5 w-5'/>
        <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
        <ChevronDownIcon className='h-5 w-5'/>
      </div>

      <form className='flex flex-1 items-center space-x-2 border border-gray-200 rounded-md bg-gray-100 px-3 py-1'>
        <SearchIcon className='h-6 w-6 text-gray-400' />
        <input type="text" placeholder="Search" className='flex-1 bg-transparent outline-none'/>
        <button type="submit" hidden />
      </form>

      <div className='flex text-gray-500 space-x-2 items-center mx-5 hidden lg:inline-flex'>
        <BellIcon className='icon'/>
        <GlobeIcon className='icon'/>
        <VideoCameraIcon className='icon'/>
        <hr className='h-10 border border-gray-100'/>
        <ChatIcon className='icon'/>
        <BellIcon className='icon'/>
        <PlusIcon className='icon'/>
        <SpeakerphoneIcon className='icon'/>
      </div>
      <div className='ml-5 flex items-center lg:hidden'>
        <MenuIcon className='icon' />
      </div>

      {session ? (
        <div onClick={() => signOut()} className='hidden lg:flex items-center space-x-2 border-gray-100 p-2 cursor-pointer'>
          <div className='relative h-5 w-5 flex-shrink-0'>
            <Image src="/favicon.ico" alt="app-icon" fill style={{objectFit: 'contain'}}/>
          </div>
          <div className='flex-1 text-xs'>
            <p className='truncate'>{session?.user?.name}</p>
            <p className='text-gray-400'>1 Karma</p>
          </div>
          <ChevronDownIcon className='h-5 flex-shrink-0 text-gray-400'/>
        </div>
      ): (
        <div onClick={() => signIn()} className='hidden lg:flex items-center space-x-2 border-gray-100 p-2 cursor-pointer'>
          <div className='relative h-5 w-5 flex-shrink-0'>
            <Image src="/favicon.ico" alt="app-icon" fill style={{objectFit: 'contain'}}/>
          </div>
          <p className='text-gray-400'>Sign In</p>
        </div>
      )
    }




    </div>
  )
}

export default Header