import Image from "next/image"
import Link from "next/link"
import DropdownMenu2 from "./DropdownMenu2"

export default function Foooter() {
  return (
    <div><div className="bg-[#000000] grid lg:grid-cols-2 lg:pl-16 lg:pt-10 px-5 py-10 lg:h-[650px]">
    <div className="z-10">
        <p className="text-[#FFFD8A] text-2xl font-medium">АРЕНДА АВТОМОБИЛЕЙ</p>
        <p className="text-white lg:text-4xl text-2xl py-5 font-semibold pr-5">Откройте для себя радость гибкости и доступности Прокат автомобилей</p>
          <div className="bg-[#31313180] border border-black rounded-3xl mt-28 relative px-14 py-10 lg:w-[620px]">
               <div className="bg-[#31313180] flex items-center justify-between text-white rounded-full w-full px-3 py-1">
                <div className="flex items-center">
                 <Image src="/frame(1).png" alt="#" width={20} height={20}/>
                 <DropdownMenu2 />
                </div>
            </div>
            <div className="flex justify-center">
            <Link href="/door/garage" className="bg-[#2CA9BC] text-white rounded-full text-center mt-8 py-4 w-full" >Искать</Link>
            </div>
          </div>
    </div>
      <div className="justify-self-end z-0 absolute pb-10">
      <Image src="/car1.png" alt="" width={950} height={500} />
      </div>
    </div>
    </div>
  )
}
