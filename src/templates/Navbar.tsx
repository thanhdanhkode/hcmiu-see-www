'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { House, LogIn, Menu, Newspaper, Search } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { MenuDrawer } from './MenuDrawer'

const ListItemVariants = cva('text-sm', {
  variants: {
    variant: {
      default: '',
      title: '[&_div]:font-medium [&_p]:text-muted-foreground [&_p]:line-clamp-2 [&_p]:text-sm [&_p]:leading-snug',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const ListItem = ({
  href,
  title,
  children,
  className,
  variant,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & VariantProps<typeof ListItemVariants> & { href: string }) => {
  return (
    <li
      className={cn(ListItemVariants({ variant, className }))}
      {...props}
    >
      <NavigationMenuLink asChild>
        <Link href={href}>
          {variant === 'default' ? (
            <>{children}</>
          ) : (
            <>
              <div>{title}</div>
              <p>{children}</p>
            </>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export const Navbar = () => {
  const t = useTranslations('Header')
  return (
    <NavigationMenu
      viewport={false}
      className="relative z-50"
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            <Link href={'/'}>{t('Navigation.Home.title')}</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max lg:grid-cols-[.75fr_0.05fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <div className="h-full font-medium flex flex-col justify-end">
                    <Image
                      src={'/Logo.png'}
                      alt="Logo"
                      width={64}
                      height={64}
                      className="mb-3"
                    />
                    <span className="text-xs leading-4">{t('Navigation.Home.name.school')}</span>
                    <span className="text-sm leading-5 text-nowrap">{t('Navigation.Home.name.department')}</span>
                  </div>
                </NavigationMenuLink>
              </li>
              <li className="row-span-4">
                <div className="w-px h-full bg-muted m-auto"></div>
              </li>
              <ListItem
                variant={'title'}
                href=""
                title={t('Navigation.Home.Greeting')}
              />
              <ListItem
                variant={'title'}
                href=""
                title={t('Navigation.Home.History')}
              />
              <ListItem
                variant={'title'}
                href=""
                title={t('Navigation.Home.Vision')}
              />
              <ListItem
                variant={'title'}
                href=""
                title={t('Navigation.Home.PhE')}
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">{t('Navigation.Admission.title')}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max">
              <ListItem href="/admission/info/latest">{t('Navigation.Admission.Info.Latest', { year: 2025 })}</ListItem>
              <ListItem href="/admission/university/ee">{t('Navigation.Admission.University.EE')}</ListItem>
              <ListItem href="/admission/university/ac">{t('Navigation.Admission.University.AC')}</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">{t('Navigation.Student.title')}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max">
              <ListItem href="/students/academic-advisor">{t('Navigation.Student.AcademicAdvisor')}</ListItem>
              <ListItem href="/students/handbook">{t('Navigation.Student.Handbook')}</ListItem>
              <ListItem href="/students/student-life">{t('Navigation.Student.StudentLife')}</ListItem>
              <ListItem href="/students/clubs">{t('Navigation.Student.Clubs')}</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">{t('Navigation.Academic.title')}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max">
              <ListItem href="/students/academic-advisor">{t('Navigation.Academic.Undergraduate')}</ListItem>
              <ListItem href="/students/academic-advisor">{t('Navigation.Academic.Postgraduate')}</ListItem>
              <ListItem href="/students/academic-advisor">{t('Navigation.Academic.Support')}</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">{t('Navigation.Research.title')}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max">
              <ListItem href="/students/academic-advisor">{t('Navigation.Research.Laboratories')}</ListItem>
              <ListItem href="/students/academic-advisor">{t('Navigation.Research.Workshops')}</ListItem>
              <ListItem href="/students/academic-advisor">{t('Navigation.Research.TechnologyTransfer')}</ListItem>
              <ListItem href="/students/academic-advisor">{t('Navigation.Research.Publications')}</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="bg-transparent"
          >
            <Link
              href={'/bulletin'}
              className="contents"
            >
              <div className="font-medium text-nowrap">
                <span>{t('Navigation.Bulletin.title')}</span>
              </div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export const NavbarMobile = () => {
  const t = useTranslations('NavigationMobile')
  return (
    <div className="fixed bottom-0 w-full sm:hidden drop-shadow-md border-t bg-white">
      <div className="grid grid-cols-5 h-full">
        <div className="flex text-xs gap-1 font-medium [&_svg]:size-5 py-2 flex-col items-center justify-center hover:bg-neutral-300 transition-all duration-100">
          <House />
          <span>{t('Home.title')}</span>
        </div>
        <MenuDrawer title={t('Menu.title')} />
        <div className="flex flex-col items-center justify-center transition-all duration-100">
          <div className="relative ">
            <div className="absolute -left-7 -top-12 flex justify-center items-center bg-[#670210] rounded-full text-white p-3 size-14">
              <Search />
            </div>
          </div>
        </div>
        <div className="flex text-xs gap-1 font-medium [&_svg]:size-5 py-2 flex-col items-center justify-center hover:bg-neutral-300 transition-all duration-100">
          <Newspaper />
          <span>{t('Bulletin.title')}</span>
        </div>
        <div className="flex text-xs gap-1 font-medium [&_svg]:size-5 py-2 flex-col items-center justify-center hover:bg-neutral-300 transition-all duration-100">
          <LogIn />
          <span>{t('Login.title')}</span>
        </div>
      </div>
    </div>
  )
}
