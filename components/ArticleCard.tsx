import React from 'react'
import { Article } from '@/types';
import Image from 'next/image';
import { Button } from './ui/button';

type Props = {
    article: Article;
}

const ArticleCard = ({article} : Props) => {

    const { topic, description, picture } = article;
    return (
      
    <div className="w-full h-[484px] bg-white border-gray-200 rounded-[20.937px] border-[1.37px] shadow flex flex-col items-center justify-center">

        <div className='w-[204px] h-[164px] rounded-[21px] m-[27px]'>
            <Image 
                className="rounded-[21px] w-full" 
                src={picture} 
                alt={topic} 
                width={326}
                height={257}
                priority={true}
            />
        </div>

        <div className="p-5 flex flex-col items-center justify-center">
            <h5 className="mb-2 text-[16px] leading-[35px] md:text-[21px] font-bold text-app-mainBlue text-center">{topic}</h5>
            <p className="mb-3 font-normal text-[12px] leading-[22px] md:text-[15px] text-center text-app-subtitle">{description}</p>
            <Button className='__whiteButton font-semibold text-[11px] px-[33px] py-[3px] md:text-[16.445px] rounded-[21px]'>Read More</Button>
        </div>
    </div>

    )
}

export default ArticleCard