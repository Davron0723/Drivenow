import React from 'react'
import Image from 'next/image'

export default function () {
  return (
    <div id="contacts" className='bg-black pt-20 lg:flex lg:px-8 px-3 py-10'>
       <div className='lg:pl-16'>
           <p className='pt-10 text-white font-bold lg:text-3xl lg:text-left text-center'>Мы будем рады отвечать на <br /> ваши звонки и сообщения</p>
           <div className='lg:flex'>
                <div className='flex lg:px-0 px-32 lg:pt-12 pt-5'>
                    <Image src="/phone.png" alt="" width={30} height={30} />
                    <p className='text-white font-semibold text-base pl-5 lg:pt-1'>+7 776 339 0202</p>
                </div>
                <div className='flex lg:pl-20 lg:pt-12 pt-5 lg:px-0 px-32'>
                    <Image src="/letter.png" alt='' width={30} height={30} />
                    <p className='text-white font-semibold text-base pl-5 lg:pt-1'>info@drivenow.kz</p>
                </div>
           </div>
           <div className='flex space-x-10 pt-20 lg:px-0 px-28'>
                <Image src="/insta.png" alt='' width={60} height={60} />
                <Image src="/tg.png" alt='' width={60} height={60} />
                <Image src="/tt.png" alt='' width={60} height={60} />
            </div>
       </div>
       <div>
       <div className='py-5 lg:px-52'>
             <div className='flex'>
                <div>
                    <p className='text-[#71717A]'>Имя*</p>
                    <input type='text' placeholder="Имя" className='bg-[#363636B2] py-3 text-white rounded-lg pl-5'/>
                </div>
                <div className='pl-5'>
                  <p className='text-[#71717A]'>Фамилия*</p>
                  <input type='text' placeholder="Фамилия" className='bg-[#363636B2] py-3 text-white rounded-lg pl-5 lg:w-full w-[210px]'/>
                </div>
             </div>
             <div className='pt-5'>
             <textarea name="message" placeholder="Чем мы можем вам помочь?" className='bg-[#363636B2] w-full h-32 rounded-lg pt-3 pl-3'/>
             </div>
             <div className='pt-5'>
              <button type="button" className='bg-[#2CA9BC] text-white py-4 px-5 rounded-lg hover:bg-white hover:text-black'>Отправить</button>
             </div>
           </div>
       </div>
    </div>
  )
}
