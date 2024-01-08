import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
  return (

    <section className='max-w-screen-[1440px]'>

          <div className='flex flex-col-reverse md:flex-row justify-between items-center flex-wrap mx-auto'>

            <div className='md:pl-[100px] w-[240px] md:w-[485px] flex flex-col items-center justify-center md:items-start mt-[75.28px] md:mt-[0px] '>
              <p className='font-bold text-[38px] md:text-[62px] text-app-mainBlue leading-[46px] md:leading-[69px] mb-[26px] text-center md:text-left'>Discover the <span className='text-app-mainRed'>Best</span> Food and Drinks</p>
              <p className='font-normal text-[11px] md:text-[16.44px] text-app-subtitle leading-[18px] md:leading-[27.408px] mb-[41px] text-center md:text-left' >Naturally made Healthcare Products for the better care & support of your body.</p>
              <Button className='__redButton rounded-[21px] md:text-[18px] md:px-[34px] md:py-[14px]'>Explore More</Button>
            </div>

            <div className='w-full md:w-1/2'>
              <Image
                src='/assets/pizza.png'
                alt='pizza logo'
                width={735}
                height={804}
                className='md:pl-2 w-full '
              />
            </div>

          </div>
      </section>
  )
}

export default Hero;
