import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const About = () => {
  return (
    <section className='bg-app-footBg mt-[64px]'>
      <div className='flex flex-row  justify-center md:justify-evenly items-center w-full max-w-screen-xl mx-auto'>

        <Image 
          src = "/assets/about.png"
          width={384}
          height={468}
          alt='about image'
          className='hidden md:block'
        />

        <div className='w-full py-[140px] md:w-[447px] md:py-0 md:h-auto flex flex-col items-center md:items-start justify-center gap-5 md:gap-[27.41px] mx-[50px]'>
          <p className='text-app-mainBlue font-semibold text-[26px] leading-[35px] md:leading-[27px] md:text-[45px] text-center md:text-left'>About Us</p>
          <p className='_opensans text-[11px] leading-[21px] md:leading-[27px] md:text-[15px] text-app-aboutText text-center md:text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries. </p>
          <Button className='__redButton rounded-[34px] py-[14px] px-[34px] text-center md:text-left'>Read More</Button>
        </div>

      </div>
    </section>
  )
}

export default About