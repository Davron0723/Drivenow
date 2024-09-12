import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div>
     <div className='lg:flex bg-white pt-10 lg:px-16'>
      <div>
        <div className='px-24'>
        <Image src="/logo2.png" alt='' width={250} height={50} />
        </div>
          <p className='text-[#71717A] text-sm pt-7 lg:text-left text-center'>Воспользовавшись нашими услугами по прокату автомобилей, вы сможете <br /> ощутить максимальное удобство и свободу исследовать пункт назначения <br /> в удобном для вас темпе.</p>
      </div>
      <div className='lg:px-10 px-3 flex'>
        <ul className='px-16'>
            <li className='font-bold pt-3'>Блог</li>
            <li className='font-bold pt-3'>О нас</li>
            <li className='font-bold pt-3'>Отзывы</li>
            <li className='font-bold pt-3'>Контакты</li>
        </ul>
        <ul className='px-16'>
            <li className='font-bold pt-3'>Политика конфиденциальности</li>
            <li className='font-bold pt-3'>Условия</li>
            <li className='font-bold pt-3'>Часто задаваемые вопросы</li>
        </ul>
       </div>
      </div>
      <div className='py-16'>
        <p className='text-[#71717A] text-center font-semibold'>© 2024 DriveNow® Global Inc.</p>
      </div>
    </div>
     
  )
}
