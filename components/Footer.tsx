import Image from "next/image"
import { Contact, SocialLinks, More } from "@/constant"

const Footer = () => {
  return (
    

<footer className="bg-app-footBg py-[52px] px-[42px] md:py-16 md:px-0 w-full">
    <div className="w-full max-w-screen-xl mx-auto">
    <div className="grid gap-8 grid-cols-1 md:grid-cols-4 ">
        <div className="flex items-start justify-center ">
          <div className="w-[75px] h-[58px] md:w-[161px] md:h-[125]">
            <Image
                src="/assets/icons/logo.svg"
                alt='logo'
                width={75}
                height={58}
                className="w-full" 
              />
            </div>
        </div>

        {/* contact */}
        <div className="flex flex-col md:items-center items-star justify-between md:mt-0 mt-3">
            <div>
                <h2 className="mb-3 font-semibold text-[15.77px] md:text-[18.84px] md:leading-[34.8px] text-app-mainBlue">Contact Us</h2>
                <ul className="flex font-normal flex-col gap-3">
                {Contact.map((item) => {
                  return (
                      <li key={item} className='text-app-footerLight text-[8.76px] leading-[12.27px] md:text-[14.66px] md:leading-[23.03px]'>{item}</li> 
                    )
                })}
                </ul>
            </div>
        </div>

        {/* more */}
        <div className="flex flex-col md:items-center items-start justify-between md:mt-0 mt-3">
            <div>
                <h2 className="mb-3 font-semibold text-[15.77px] leading-[34.8px] md:text-[18.84px] md:leading-[34.8px] text-app-mainBlue">More</h2>
                <ul className="flex flex-col gap-3 font-normal">
                    {More.map((item) => {
                      return (
                          <li key={item} className='text-app-footerLight text-[8.76px] leading-[12.27px] md:text-[15px] md:leading-[23.03px]'>{item}</li> 
                        )
                    })}
                </ul>
            </div>
        </div>
        
        {/* social links */}
        <div className="md:text-left flex flex-col-reverse md:justify-between md:items-start items-center md:flex-col gap-3">
          <div className="flex flex-col-reverse md:flex-col items-center justify-between md:gap-10 gap-3">
            <div>
              <h2 className="hidden md:block mb-3 font-semibold text-app-mainBlue md:text-[18.84px] md:leading-[34.8px]">Social Links</h2>
              <ul className="flex flex-row gap-6">
                {SocialLinks.map((item) => (
                  <Image
                    key={item.label}
                    src={item.icon}
                    width={20}
                    height={20}
                    alt={item.label}
                  />
                ))}
              </ul>
            </div>
          </div>
          <p className="text-app-footerLight font-normal text-[8.76px] leading-[12.27px] md:text-[15px] md:leading-[23.03px]">© 2022 Food Truck Example</p>
        </div>

        </div>
    </div>
</footer>

  )
}

export default Footer