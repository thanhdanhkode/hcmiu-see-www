import { Separator } from '@/components/ui/separator'
import { Headset, MapPin } from 'lucide-react'
import Image from 'next/image'
import { MdiFacebook } from '@/components/icons/Facebook'
import { MdiYoutube } from '@/components/icons/Youtube'

export const Footer = () => {
  return (
    <footer className="overflow-hidden w-full">
      <div className="mx-auto px-3 max-w-screen-xl select-none py-3">
        <div className="grid grid-cols-7 py-3 pb-12 gap-3">
          <div className="col-span-3 flex gap-3 items-center">
            <div className="size-18 p-2 flex items-center justify-center rounded-full [&>svg]:size-10 aspect-square border-4 border-[#670210] text-[#670210]">
              <Headset />
            </div>
            <div className="">
              <div className="font-medium">Liên hệ với chúng tôi qua</div>
              <div className="">Hotline: ***REMOVED***</div>
              <div className="">Tư vấn Tuyển sinh: ***REMOVED***</div>
            </div>
          </div>
          <div className="">
            <div className="font-medium">Theo dõi chúng tôi qua</div>
            <div className="flex items-center gap-2">
              <MdiFacebook />
              <MdiYoutube />
            </div>
          </div>
        </div>
        <Separator />
        <div className="grid grid-cols-7 py-6">
          <div className="flex flex-col w-120">
            <div className="flex gap-1">
              <Image
                src={'/assets/IULogo.png'}
                alt="IULogo"
                width={72}
                height={72}
              />
              <Image
                src={'/Logo.png'}
                alt="Logo"
                width={72}
                height={72}
              />
            </div>
            <div className="text-sm text-nowrap mt-2 font-medium">
              <div>Trường ĐH Quốc Tế - ĐHQG Thành phố Hồ Chí Minh</div>
              <div>Khoa Điện - Điện tử</div>
            </div>
            <div className="mt-3">
              <div className="[&_svg]:size-4">
                <MapPin />
                <span>Phòng A2.206</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
