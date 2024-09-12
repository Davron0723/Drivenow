'use client';

import React from 'react'
import DropdownMenugeo from './DropdownMenugeo';
import DropdownMenucar from './DropdownMenucar';

const Hero2 = () => {
  return (
    <div className="w-1/4">
      <div className='divide-y-2 divide-gray-300'>
        <p className='py-5 text-center font-bold text-lg lg:text-2xl'>Фильтр</p>
        <p className='text-sm text-right pt-4'>Сбросить фильтр</p>
        </div>
      <div>
        <DropdownMenugeo />
        <DropdownMenucar />
      </div>
    </div>
  )
}

export default Hero2;
