import React from 'react'
import Image from "next/image";
import DropdownMenu from "@/components/DropdownMenu";
import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-black flex justify-between lg:p-10 lg:pl-16 px-5 py-10 ">   
    <div>
    <Image src="/logo.png" alt='#' width={250} height={50}/>
    </div>
    <div className='text-white justify-self-center mt-4 hidden lg:flex inline'>
     <ul className='inline-flex space-x-5'>
     <Link href="/"><li className='font-medium'>Главная</li></Link>
     <li className='font-medium'><a href="#service">Сервис</a></li>
     <li className='font-medium'><a href="#rent">Аренда</a></li>
     <li className='font-medium'><a href="#contacts">Контакты</a></li>
     <DropdownMenu />
     </ul>
    </div>
    <div className="py-3">
      <Link href="/auth/login" className='border-2 text-white border-gray-300 py-3 px-5 rounded-full hover:bg-[#2CA9BC] font-medium'>Sing in</Link>
   </div>
  </div>
  )
}
