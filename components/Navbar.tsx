import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='absolute w-full top-0 z-50 py-2 text-black bg-transparent max-w-screen-[1440px]'>
      <div className='flex justify-end md:justify-between w-full '>
        <Link href='/' className="hidden md:block md:ml-[100px] md:mt-8">
            <Image 
                src="/assets/icons/logo.svg"
                alt="food truck logo"
                width={107}
                height={83}
            />
        </Link>

        <div className='m-[18px] md:mt-[35px] md:mr-[52.5px]'>
            <Button className='__redButton rounded-[21px] text-[11px] md:text-[16px]'>
                Get in Touch
            </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar