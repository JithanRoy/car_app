'use client'
import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { useState, Fragment } from 'react'

const SearchManufacturer = ({manufacturer, setmanufacturer} : SearchManufacturerProps) => {
    const [query, setQuery] = useState('')
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full'>
                <Combobox.Button className="absolute top-[14px]">
                    <Image 
                        src="/car-logo.svg"
                        width={20}
                        height={20}
                        className='ml-4'
                        alt='Car Logo'
                    />
                </Combobox.Button>

                <Combobox.Input 
                    className="search-manufacturer__input"
                    placeholder='Volkswagen'
                    displayValue={(manufacturer: string) => manufacturer}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Transition 
                    as={Fragment}
                    Leave = "transition ease-in duration-100"
                    LeaveFrom = 'opacity-100'
                    LeaveTo = "opacity-0"
                    afterLeave = {() => setQuery('')}
                >
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer