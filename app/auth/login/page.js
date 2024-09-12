import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function page() {
  return (
  <div className="bg-cover bg-center  h-full" style={{ backgroundImage: "url('/singinpicture.png')" }}>
          <div className="flex lg:justify-between lg:justify-start justify-center lg:p-10 lg:pl-16 px-5 py-10">
           <div>
             <Image src="/logo.png" alt='#' width={250} height={50}/>
           </div>
            <div className='text-white justify-self-center mt-4  lg:flex'>
              <ul className='flex space-x-4'>
              <Link href="/"><li className='font-medium lg:flex hidden'>Главная</li></Link>
              <li className='font-medium'><a href="/#service">Сервис</a></li>
              <li className='font-medium'><a href="/#rent">Аренда</a></li>
              <li className='font-medium'><a href="/#contacts">Контакты</a></li>
             </ul>
            </div>
          </div>
        <div className='flex justify-center'>
          <div className='bg-[#313131B2] lg:w-[600px] my-20 px-16 py-10 rounded-3xl'>
          <p className='text-white text-center text-2xl font-semibold'>Авторизация</p>
          <p className='text-[#C2C2C2] font-semibold pt-5'>У вас нет аккаунта?<span className='text-white font-semibold pl-4'>Зарегистрироваться</span></p>
          <p className='pt-7 font-semibold text-white'>Электронная почта*</p>
          <div className='bg-[#6868684D] mt-3 flex rounded-3xl  text-[#ADCED3]'>
          <div className='flex-shrink-0 py-4 px-2'>
            <Image src='/email.png' alt='' width={30} height={20} />
          </div>
            <input type='email' placeholder='Введите электронную почту' className='bg-[#6868684D] w-full text-[#ADCED3] rounded-3xl pl-2'></input>
          </div>
          <p className='pt-7 font-semibold text-white'>Пароль*</p>
          <div className='bg-[#6868684D] mt-3 flex rounded-3xl  text-[#ADCED3]'>
          <div className='flex-shrink-0 py-4 px-2'>
            <Image src='/Keysing.png' alt='' width={30} height={20} />
          </div>
            <input type='email' placeholder='Введите пароль' className='bg-[#6868684D] w-full text-[#ADCED3] rounded-3xl pl-2'></input>
            <div className='flex-shrink-0 py-3 px-2 pt-4'>
            <button><Image src='/Eye.png' alt='' width={30} height={20} /></button>
          </div>
          </div>
            <div className='text-center mt-10'>
              <Link href="/" className='bg-[#1797AA] py-5 px-52  rounded-3xl hover:bg-white hover:text-black'>Войти</Link>
            </div>
            <p className='text-[#ACDBE2] text-center pt-10'>Забыли пароль?</p>
       </div>
    </div>
  </div>
  )
}
