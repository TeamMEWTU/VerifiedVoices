import Image from 'next/image'
import React from 'react'
import { HomeIcon, ChevronDownIcon, SearchIcon, MenuIcon } from '@heroicons/react/solid'
import { BellIcon, ChatIcon, GlobeIcon, PlusIcon, SparklesIcon, SpeakerphoneIcon, VideoCameraIcon } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

function Header() {
  const { data: session } = useSession();

  return (
    <div className='flex items-center bg-white px-4 py-3 shadow-sm sticky top-0 z-50 justify-between'>
      <div className='relative h-12 w-20 flex-shrink-0 cursor-pointer'>
        <Link href="/">
          <Image alt='image' src="/verifiedvoices-invert.png" style={{objectFit: 'cover'}} fill className='sm:min-w-[120px] invisible md:visible' />
          <Image alt='image' src="/verifiedvoices-logo-invert.png" style={{objectFit: 'scale-down'}} className=' md:invisible' fill />
        </Link>
      </div>

      <form className='flex flex-1 items-center space-x-2 border border-gray-200 rounded-md bg-gray-100 px-3 py-1 mx-12 xs:max-w-[60%]'>
        <SearchIcon className='h-6 w-6 text-gray-400' />
        <input type="text" placeholder="Search" className='flex-1 bg-transparent outline-none'/>
        <button type="submit" hidden />
      </form>

      <div className='flex'>
        <div className='flex text-gray-500 space-x-3 items-center mx-5 hidden lg:inline-flex'>
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
              <Image src="/verifiedvoices-logo.png" alt="app-icon" fill style={{objectFit: 'contain'}}/>
            </div>
            <div className='flex-1 text-xs'>
              <p className='truncate'>{session?.user?.name}</p>
              <p className='text-gray-400'>1 Prestige</p>
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



    </div>
  )
}

export default Header