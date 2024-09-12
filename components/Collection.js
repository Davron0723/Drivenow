import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Collection() {
  return (
  <div id='rent' className='bg-[#F1F1F1] mt-48'>
    <p className='pt-14 text-center font-bold lg:text-4xl text-2xl'>Наши коллекции автомобилей</p>
      <div className='grid lg:grid-cols-3 gap-7 pt-10 px-20 '>
          <div className='bg-white rounded-2xl max-w-[400px]'>
            <Image src="/mers.png" alt="" width={400} height={200} className='rounded-t-2xl' />
            <div className='pt-7 px-7'>
              <p className='font-bold'>Mersedes Benz S Class W-2</p>
              <div className='pt-10 flex'>
                  <Image src="/car-door.png" alt="" width={24} height={24}/>
                  <p className='lg:pl-7 pl-3 pr-5'>Двери</p>
                  <p className='lg:pl-48 pl-36 font-bold'>4</p>
              </div>
              <div className='pt-3 flex'>
                  <Image src="/fuel.png" alt="" width={24} height={24}/>
                  <p className='lg:pl-7 pl-3 pr-2'>Топливо</p>
                  <p className='lg:pl-36 pl-24 font-bold'>Бензин</p>
              </div>
              <div className='pt-3 inline-flex items-center w-full'>
              <Image src="/transmission.png" alt="Transmission Icon" width={24} height={24} className="flex-shrink-0" />
               <p className='pl-3 lg:pl-7'>КПП/АП</p>
               <div className='flex-grow text-left'>
                <p className='font-bold lg:pl-36 pl-24'>Автомат</p>
               </div>
              </div>
              <div className='pt-10 flex py-4'>
              <p className='lg:pr-16 lg:pt-3 pt-4 pr-8'><span className='lg:text-2xl text-[#2CA9BC] font-bold text-lg'>90.000 ₸</span>/день</p>
              <Link href="#" className='bg-[#2CA9BC] lg:py-3 lg:px-5 py-4 px-4 rounded-full text-white hover:bg-gray-300 hover:text-black'>Детально</Link>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-3xl max-w-[400px]'>
          <Image src="/mers.png" alt="" width={400} height={200} className='rounded-t-2xl' />
          <div className='pt-7 px-7'>
              <p className='font-bold'>Mersedes Benz S Class W-2</p>
              <div className='pt-10 flex'>
                  <Image src="/car-door.png" alt="" width={24} height={24}/>
                  <p className='lg:pl-7 pl-3 pr-5'>Двери</p>
                  <p className='lg:pl-48 pl-36 font-bold'>4</p>
              </div>
              <div className='pt-3 flex'>
                  <Image src="/fuel.png" alt="" width={24} height={24}/>
                  <p className='lg:pl-7 pl-3 pr-2'>Топливо</p>
                  <p className='lg:pl-36 pl-24 font-bold'>Бензин</p>
              </div>
              <div className='pt-3 inline-flex items-center w-full'>
              <Image src="/transmission.png" alt="Transmission Icon" width={24} height={24} className="flex-shrink-0" />
               <p className='pl-3 lg:pl-7'>КПП/АП</p>
               <div className='flex-grow text-left'>
                <p className='font-bold lg:pl-36 pl-24'>Автомат</p>
               </div>
              </div>
              <div className='pt-10 flex py-4'>
              <p className='lg:pr-16 lg:pt-3 pt-4 pr-8'><span className='lg:text-2xl text-[#2CA9BC] font-bold text-lg'>90.000 ₸</span>/день</p>
              <Link href="#" className='bg-[#2CA9BC] lg:py-3 lg:px-5 py-4 px-4 rounded-full text-white hover:bg-gray-300 hover:text-black'>Детально</Link>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-3xl max-w-[400px]'>
          <Image src="/mers.png" alt="" width={400} height={200} className='rounded-t-2xl' />
          <div className='pt-7 px-7'>
              <p className='font-bold'>Mersedes Benz S Class W-2</p>
              <div className='pt-10 flex'>
                  <Image src="/car-door.png" alt="" width={24} height={24}/>
                  <p className='lg:pl-7 pl-3 pr-5'>Двери</p>
                  <p className='lg:pl-48 pl-36 font-bold'>4</p>
              </div>
              <div className='pt-3 flex'>
                  <Image src="/fuel.png" alt="" width={24} height={24}/>
                  <p className='lg:pl-7 pl-3 pr-2'>Топливо</p>
                  <p className='lg:pl-36 pl-24 font-bold'>Бензин</p>
              </div>
              <div className='pt-3 inline-flex items-center w-full'>
              <Image src="/transmission.png" alt="Transmission Icon" width={24} height={24} className="flex-shrink-0" />
               <p className='pl-3 lg:pl-7'>КПП/АП</p>
               <div className='flex-grow text-left'>
                <p className='font-bold lg:pl-36 pl-24'>Автомат</p>
               </div>
              </div>
              <div className='pt-10 flex py-4'>
              <p className='lg:pr-16 lg:pt-3 pt-4 pr-8'><span className='lg:text-2xl text-[#2CA9BC] font-bold text-lg'>90.000 ₸</span>/день</p>
              <Link href="#" className='bg-[#2CA9BC] lg:py-3 lg:px-5 py-4 px-4 rounded-full text-white hover:bg-gray-300 hover:text-black'>Детально</Link>
              </div>
            </div>
          </div>
    </div>
    <div className='pt-14 text-center py-5'>
      <Link href="#" className='text-[#3B78E7] hover:underline underline-offset-1 hover:text-black'>Посмотреть все &#8594;</Link>
    </div>
  </div>
  )
}
