import React from 'react'
import Image from 'next/image'

export default function Info() {
  return (
    <div id='service' className="mt-52">
        <p className='text-center text-[#71717A] text-base font-semibold'>КАК РАБОТАЕТ НАШ СЕРВИС</p>
        <p className='text-center lg:text-4xl text-2xl text-[#000000] font-bold'>Представляем вашего нового <br /> фаворита аренды автомобилей</p>
        <div className='lg:flex justify-between mt-12 px-5'>
            <div className='grid justify-items-center lg:border-4 border-white border-r-[#ECECEC] lg:border-2 mt-7'>
              <Image src="/carloc.png" alt="" width={60} height={60} />
              <h3 className='pt-5 text-lg font-semibold'>Выберите местоположение</h3>
              <p className='text-[#71717A] pt-5 text-center  '>Мы делаем вещи умнее, а не сложнее, с изяществом и благодарностью.</p>
            </div>
            <div className='grid justify-items-center lg:border-4 border-white border-r-[#ECECEC] lg:border-2 mt-7'>
              <Image src="/carsvg.png" alt="" width={60} height={60} />
              <h3 className='pt-5 text-lg font-semibold'>Выберите свой автомобиль</h3>
              <p className='text-[#71717A] pt-5 text-center  '>Ознакомьтесь с доступными моделями автомобилей, их характеристиками и ценами.</p>
            </div>
            <div className='grid justify-items-center lg:border-4 border-white border-r-[#ECECEC] lg:border-2 mt-7'>
              <Image src="/doc.png" alt="" width={60} height={60} />
              <h3 className='pt-5 text-lg font-semibold'>Подтверждение</h3>
              <p className='text-[#71717A] pt-5 text-center  '>Просто подтвердите свои водительские права, добавьте способ оплаты, и все готово.</p>
            </div>
            <div className='grid justify-items-center mt-7'>
              <Image src="/carkey.png" alt="" width={60} height={60} />
              <h3 className='pt-5 text-lg font-semibold'>Начать вождение</h3>
              <p className='text-[#71717A] pt-5 text-center px-2'>Страховка и помощь на дороге уже включены в стоимость.</p>
            </div>
        </div>
    </div>
  )
}
