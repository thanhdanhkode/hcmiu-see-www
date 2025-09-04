import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { Navbar } from '@/templates/Navbar'
import { LogIn, Mail, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import NextLink from 'next/link'

export const Header = (props: { children?: React.ReactNode }) => {
  const t = useTranslations('Header')
  return (
    <header className="w-full z-50">
      <div className="mx-auto px-3 max-w-screen-xl select-none">
        <div className="flex w-full gap-3 p-3 border-b border-b-neutral-300 mb-1">
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center gap-2">
              <Image
                src={'/Logo.png'}
                alt="Logo"
                width={40}
                height={40}
              />
              <div className="flex flex-col justify-center">
                <span className="text-[10px] xs:text-sm font-bold xs:leading-4 text-[#670210] uppercase">
                  {t('Logo.DepartmentName')}
                </span>
                <span className="text-[6px] xs:text-xs xs:leading-4 text-[#323393] font-medium uppercase">
                  {t('Logo.UniversityName')}
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1"></div>
          <div className="hidden sm:flex items-center text-sm gap-3">
            <div className="[&_svg]:size-5 flex items-center gap-1">
              <Phone /> {process.env.CALL_CONSULTATION || 'xx xxxxxxxxx'}
            </div>
            <div className="[&_svg]:size-5 flex items-center gap-1">
              <Mail /> {process.env.EMAIL || 'contact@example.com'}
            </div>
          </div>
          {/* <div className="flex items-center justify-center xs:hidden">
            <MenuDrawer />
          </div> */}
        </div>
        <div className="hidden sm:flex items-center gap-2 p-1 z-50">
          <Navbar />
          <div className="flex-1"></div>
          <LanguageSwitcher />
          <Button
            variant="default"
            className="cursor-pointer bg-[#670210] hover:bg-[#67020fc0] text-white"
            asChild
          >
            <Link href="/login">
              <LogIn /> {t('Action.login')}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
