import { Navbar } from '@/templates/Navbar'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import NextLink from 'next/link'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { LogIn } from 'lucide-react'

export const Header = (props: { children?: React.ReactNode }) => {
  return (
    <header className="px-3">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex w-full py-3 gap-3 border-b border-b-[#670210] mb-1">
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center gap-2">
              <Image
                src={'/Logo.png'}
                alt="Logo"
                width={40}
                height={40}
              />
              <div className="flex flex-col justify-center">
                <span className="text-sm font-bold leading-4 text-[#670210]">SCHOOL OF ELECTRICAL ENGINEERING</span>
                <span className="text-xs leading-4 text-[#323393] font-medium">
                  INTERNATIONAL UNIVERSITY - VIETNAM NATIONAL UNIVERSITY HCMC
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Navbar />
          <div className="flex-1"></div>
          <LanguageSwitcher />
          <Button
            variant="default"
            className="cursor-pointer bg-[#670210] hover:bg-[#67020fc0] text-white"
            asChild
          >
            <NextLink href="/login">
              <LogIn /> Đăng nhập
            </NextLink>
          </Button>
        </div>
      </div>
    </header>
  )
}
