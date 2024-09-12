'use client';

import Image from "next/image"
import Link from "next/link"

const Header2 = () => {
  return (
<div className="bg-white flex justify-between lg:p-10  px-5 py-10 ">
      <div>
      <Image src="/logo2.png" alt='#' width={250} height={50}/>
      </div>
      <div className='text-white justify-self-center mt-4 hidden lg:flex inline'>
       <ul className='inline-flex space-x-3 text-black'>
       <Link href="/"><li className='font-medium'>Главная</li></Link>
       <li className='font-medium'><a href="/#service">Сервис</a></li>
       <li className='font-medium'><a href="#rent">Аренда</a></li>
       <li className='font-medium'><a href="/#contacts">Контакты</a></li>
       </ul>
      </div>
      <div className="lg:pr-60">
        <p className="text-[#777D94]">У вас есть какие либо вопросы?</p>
        <p className="text-sm lg:text-2xl font-bold">+7 776 339 02 02</p>
      </div>
</div>
  )
}

export default Header2;
