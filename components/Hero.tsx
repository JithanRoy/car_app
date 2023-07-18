"use client"
import Image from 'next/image';
import { CustomButton } from '.';
import { CustomButtonProps } from '@/types';

const Hero = () => {
    const handleScroll = () => {
        
    }
  return (
    <div className='Hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find, book, or rent a car --quickly and easily!
            </h1>

            <p className='hero_subtitle'>
                Streamline your car rental experience with our effortless booking process.
            </p>

            <CustomButton 
                title="Explore Cars"
                containerStyles = "bg-primary-blue text-white rounded-full mt-10"
                handleClick = {handleScroll}
            />
        </div>

        <div className='hero__image-container'>
            <div className='hero_image'>
                <Image src="/hero.png" alt='hero' fill className='object-contain' />
                <div className='hero__image-overlay' />
            </div>
        </div>
    </div>
  )
}

export default Hero