import { Separator } from '@/components/ui/separator'
import { Headset, MapPin } from 'lucide-react'
import Image from 'next/image'
import { MdiFacebook } from '@/components/icons/Facebook'
import { MdiYoutube } from '@/components/icons/Youtube'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { MdiZalo } from '@/components/icons/Zalo'
import { MdiQrcodeScan } from '@/components/icons/QR'

export const Footer = () => {
  const t = useTranslations('Footer')
  return (
    <footer className="overflow-hidden w-full">
      <div className="mx-auto px-3 max-w-screen-xl select-none">
        <div className="grid grid-cols-1 sm:grid-cols-7 py-3 pb-12 gap-6 xs:gap-3">
          <div className="col-span-5 flex flex-wrap gap-3 items-center">
            <div className="size-18 p-2 flex items-center justify-center rounded-full [&>svg]:size-10 aspect-square border-4 border-[#670210] text-[#670210]">
              <Headset />
            </div>
            <div className="">
              <div className="font-medium">{t('Contact.title')}</div>
              <div className="">{t('Contact.Hotline', { call: `${process.env.CALL_HOTLINE || 'xx xxxxxxxxx'}` })}</div>
              <div className="">
                {t('Contact.Consultation', { call: `${process.env.CALL_CONSULTATION || 'contact@example.com'}` })}
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="font-medium">{t('SocialMedia.title')}</div>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <MdiFacebook />
              <MdiYoutube />
              <MdiZalo />
              <MdiQrcodeScan />
            </div>
          </div>
        </div>
        <Separator />
        <div className="grid grid-cols-1 tiny:grid-cols-2 sm:grid-cols-7 gap-6 xs:gap-0 py-6">
          <div className="tiny:col-span-2 sm:col-span-3 flex flex-col">
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
            <div className="text-sm tiny:text-nowrap mt-2 font-medium">
              <div>{t('Logo.UniversityName')}</div>
              <div>{t('Logo.DepartmentName')}</div>
            </div>
            <div className="mt-3">
              <div className="[&_svg]:size-4 flex items-center text-sm leading-4">
                <MapPin />
                <span>{t('Location.room')}</span>
              </div>
            </div>
          </div>
          <div className="tiny:col-span-1 sm:col-span-2">
            <div className="font-medium">
              <span>{t('Service.title')}</span>
            </div>
            <ul className="mt-1 flex flex-col gap-2">
              <li>
                <Link href={''}>
                  <div className="text-sm">
                    <span>{t('Service.EdusoftWeb')}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <div className="text-sm">
                    <span>{t('Service.EdusoftMaster')}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <div className="text-sm">
                    <span>{t('Service.Library')}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <div className="text-sm">
                    <span>{t('Service.Blackboard')}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <div className="text-sm">
                    <span>{t('Service.ITSupport')}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <div className="text-sm">
                    <span>{t('Service.StudentMail')}</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="tiny:col-span-1 sm:col-span-2">
            <div className="font-medium">
              <span>{t('Other.title')}</span>
            </div>
            <ul className="mt-1 flex flex-col gap-2">
              <li>
                <Link href={''}>
                  <div className="text-sm">
                    <span>{t('Service.EdusoftWeb')}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <div className="text-sm">
                    <span>{t('Service.EdusoftMaster')}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <div className="text-sm">
                    <span>{t('Service.Library')}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <div className="text-sm">
                    <span>{t('Service.Blackboard')}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <div className="text-sm">
                    <span>{t('Service.ITSupport')}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <div className="text-sm">
                    <span>{t('Service.StudentMail')}</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Separator />
        <div className="text-sm text-center py-6 flex items-center justify-center">
          <span>
            {t('Copyright', {
              year: new Date().getFullYear(),
              name: 'School of Electrical Engineering Rework by thanhdanhkode',
            })}
          </span>
        </div>
      </div>
    </footer>
  )
}
