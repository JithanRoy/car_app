'use client';
import { CarProps } from '@/types';
import Image from 'next/image';
import React, { useState } from 'react';
import { CustomButton } from './CustomButton';
import CarDetails from './CarDetails';

interface CarCardProps {
    car: CarProps;
}

const Carcard = ({car} : CarCardProps ) => {
    const { city_mpg, make, model, transmission, drive, year } = car;

    const [ isOpen, setIsOpen ] = useState(false);

    const calculateCarRent = (city_mpg: number, year: number) => {
        const basePricePerDay = 50; // Base rental price per day in dollars
        const mileageFactor = 0.1; // Additional rate per mile driven
        const ageFactor = 0.05; // Additional rate per year of vehicle age
      
        // Calculate additional rate based on mileage and age
        const mileageRate = city_mpg * mileageFactor;
        const ageRate = (new Date().getFullYear() - year) * ageFactor;
      
        // Calculate total rental rate per day
        const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
        console.log(typeof(rentalRatePerDay));
      
        return rentalRatePerDay.toFixed(0);
    };

    const generateCarImageUrl = (car: CarProps, angle?:string) => {
        const url = new URL('https://cdn.imagin.studio/car-image-api');
        const { make, model, year } = car;

        url.searchParams.append('customer', 'hrjavascript-mastery');
        url.searchParams.append('make', make);
        url.searchParams.append('modelFamily', model.split(' ')[0]);
        url.searchParams.append('zoomType', 'fullscreen');
        url.searchParams.append('modelYear', `${year}`);
        url.searchParams.append('angle', `${angle}`);

        return `${url}`;
    }


  return (
     <div className='car-card group'>
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>
                {make} {model}
            </h2>
        </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>
                 $
            </span>
            {calculateCarRent(city_mpg, year)}
            <span className='self-end text-[14px] font-medium'>
                /day
            </span>
        </p>

        <div className='relative w-full h-40 my-3 object-contain'>
            <Image 
                src={generateCarImageUrl(car)} 
                fill
                priority
                className='object-contain'
                alt='car model'
            /> 
        </div>

        <div className='relative w-full flex mt-2'>
            <div className='flex group-hover:invisible w-full justify-between text-gray'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/steering-wheel.svg" width={20} height={20} alt='streering wheel' />
                    <p className='text-[14px] leading-[17px]'>
                        {transmission === "a" ? "Automatic" : "Manual"}
                    </p>
                </div>
                <div className="car-card__icon">
                    <Image src="/tire.svg" width={20} height={20} alt="seat" />
                    <p className="car-card__icon-text">{drive.toUpperCase()}</p>
                </div>
                <div className="car-card__icon">
                    <Image src="/gas.svg" width={20} height={20} alt="seat" />
                    <p className="car-card__icon-text">{city_mpg} MPG</p>
                </div>
            </div>

            <div className='car-card__btn-container'>
                <CustomButton
                    title='View More'
                    containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                    rightIcon = "/right-arrow.svg"
                    textStyles="text-white text-[14px] leading-[17px] font-bold"
                    handleClick={() => setIsOpen(true)}
                />
            </div>
        </div>
        <div>
            <CarDetails isOpen={isOpen} closeModel={() => setIsOpen(false)} car={car} generateCarImageUrl = {generateCarImageUrl} />
        </div>
     </div>
  )
}

export default Carcard