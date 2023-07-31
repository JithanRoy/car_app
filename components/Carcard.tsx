'use client';
import { CarProps } from '@/types';
import React from 'react';

interface CarCardProps {
    car: CarProps;
}

const Carcard = ({car} : CarCardProps ) => {
    const { city_mpg, make, model, transmission, drive, year } = car;

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
     </div>
  )
}

export default Carcard