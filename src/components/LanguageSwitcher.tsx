'use client'

import { Locale, useLocale, useTranslations } from 'next-intl'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, SelectLabel } from './ui/select'
import Image from 'next/image'
import { useTransition } from 'react'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useParams } from 'next/navigation'
import { cn } from '@/lib/utils'

export const LanguageSwitcher = () => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()
  const locale = useLocale()
  const t = useTranslations('Header')

  const onLanguageSelectChange = (value: string) => {
    const locale = value as Locale

    startTransition(() => {
      router.push(
        // @ts-expect-error
        { pathname, params },
        { locale }
      )
    })
  }
  return (
    <Select
      defaultValue={locale}
      onValueChange={(value) => onLanguageSelectChange(value)}
    >
      <SelectTrigger
        className={cn(
          isPending && 'transition-opacity [&:disabled]:opacity-30',
          'w-auto [&_span]:hidden [&>svg]:hidden px-2'
        )}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="w-fit min-w-0">
        <SelectGroup>
          <SelectLabel>{t('Languages.title')}</SelectLabel>
          <SelectItem value="vi">
            <Image
              src={'/assets/VietnamFlag.png'}
              alt="Vi"
              width={32}
              height={21}
              className="rounded"
            />
            <span>Tiếng Việt</span>
          </SelectItem>
          <SelectItem value="en">
            <Image
              src={'/assets/USAFlag.png'}
              alt="USA"
              width={32}
              height={17}
              className="rounded"
            />
            <span>English</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
