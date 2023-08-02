'use client'
import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'
import { CustomButton } from './CustomButton';

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    const router = useRouter();
    const updateSearchParams = (type: string, value: string) => {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set(type, value);
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
        return newPathname;
    };
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathname = updateSearchParams("limit", `${newLimit}`);
        router.push(newPathname);
    }
  return (
    <div className='w-full flex-center gap-5 mt-10'>
        {
            !isNext && (
                <CustomButton 
                    btnType='button'
                    title='Show More'
                    containerStyles='bg-primary-blue rounded-full text-white'
                    handleClick={handleNavigation}
                />
            )
        }
    </div>
  )
}

export default ShowMore