import { Navbar } from '@/templates/Navbar'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import NextLink from 'next/link'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { LogIn, Mail, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'

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
                <span className="text-sm font-bold leading-4 text-[#670210] uppercase">{t('Logo.DepartmentName')}</span>
                <span className="text-xs leading-4 text-[#323393] font-medium uppercase">
                  {t('Logo.UniversityName')}
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1"></div>
          <div className="flex items-center text-sm gap-3">
            <div className="[&_svg]:size-5 flex items-center gap-1">
              <Phone /> {process.env.CALL_CONSULTATION || 'xx xxxxxxxxx'}
            </div>
            <div className="[&_svg]:size-5 flex items-center gap-1">
              <Mail /> {process.env.EMAIL || 'contact@example.com'}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 p-1 z-50">
          <Navbar />
          <div className="flex-1"></div>
          <LanguageSwitcher />
          <Button
            variant="default"
            className="cursor-pointer bg-[#670210] hover:bg-[#67020fc0] text-white"
            asChild
          >
            <NextLink href="/login">
              <LogIn /> {t('Action.login')}
            </NextLink>
          </Button>
        </div>
      </div>
    </header>
  )
}
