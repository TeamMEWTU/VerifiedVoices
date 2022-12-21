import { useSession } from 'next-auth/react';
import React from 'react'
import Image from 'next/image'

type Props = {
    seed?: string
    large?:boolean
}

function Avatar({ seed, large }: Props) {
    const { data: session } = useSession();
  return (
    <div className={`relative h-10 w-10 overflow-hidden rounded-full borer-gray-300 bg-white ${
        large && 'h-20 w-20'
    }`}
    >
        <Image 
        fill
        alt='profile-img'
        src={`https://avatars.dicebear.com/api/adventurer/${
            seed || session?.user?.name || 'placeholder'
        }.svg`}
        />
     </div>
  )
}

export default Avatar