'use client'

import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { ChevronRight, Menu } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

export const MenuDrawer = ({ title }: { title: string }) => {
  const t1 = useTranslations('Header')
  const t2 = useTranslations('NavigationMobile')
  const [isOpen, setOpen] = useState({
    home: false,
    admission: false,
    student: false,
    academic: false,
    research: false,
    bulletin: false,
  })
  return (
    <Drawer>
      <DrawerTrigger className="flex text-xs gap-1 font-medium [&_svg]:size-5 py-2 flex-col items-center justify-center hover:bg-neutral-300 transition-all duration-100">
        <Menu />
        <span>{title}</span>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full">
          <DrawerHeader>
            <DrawerTitle>
              <div className="flex items-center gap-2">
                <Image
                  src={'/Logo.png'}
                  alt="Logo"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col">
                  <span className="text-left text-xs xs:text-sm font-bold xs:leading-4 text-[#670210] uppercase">
                    {t2('Menu.drawer.Logo.DepartmentName')}
                  </span>
                  <span className="text-left text-[8px] xs:text-xs xs:leading-4 text-[#323393] font-medium uppercase">
                    {t2('Menu.drawer.Logo.UniversityName')}
                  </span>
                </div>
              </div>
            </DrawerTitle>
          </DrawerHeader>
          <ScrollArea className="h-120">
            <div className="p-4">
              <div className="w-full">
                <div className="mb-1 text-sm font-medium text-neutral-500">{t2('Menu.drawer.Navigation.title')}</div>
                <Collapsible
                  open={isOpen.home}
                  onOpenChange={(open) => setOpen({ ...isOpen, home: open })}
                >
                  <div className="w-full flex items-center">
                    <CollapsibleTrigger className="w-full data-[state=open]:[&_svg]:spin-in-90 data-[state=open]:[&_svg]:animate-in data-[state=open]:[&_svg]:rotate-90 data-[state=closed]:[&_svg]:rotate-0 data-[state=closed]:[&_svg]:animate-out data-[state=closed]:[&_svg]:spin-out-0">
                      <div className={cn(' flex items-center w-full [&_svg]:size-4 py-2')}>
                        <div className="flex-1 text-left text-sm font-medium">{t1('Navigation.Home.title')}</div>
                        <ChevronRight />
                      </div>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent
                    className={cn(
                      'data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up pl-3 flex flex-col overflow-hidden'
                    )}
                  >
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.Greeting')}</span>
                      </div>
                    </Link>
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.History')}</span>
                      </div>
                    </Link>
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.Vision')}</span>
                      </div>
                    </Link>
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.PhE')}</span>
                      </div>
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible
                  open={isOpen.admission}
                  onOpenChange={(open) => setOpen({ ...isOpen, admission: open })}
                >
                  <div className="w-full flex items-center">
                    <CollapsibleTrigger className="w-full data-[state=open]:[&_svg]:spin-in-90 data-[state=open]:[&_svg]:animate-in data-[state=open]:[&_svg]:rotate-90 data-[state=closed]:[&_svg]:rotate-0 data-[state=closed]:[&_svg]:animate-out data-[state=closed]:[&_svg]:spin-out-0">
                      <div className={cn(' flex items-center w-full [&_svg]:size-4 py-2')}>
                        <div className="flex-1 text-left text-sm font-medium">{t1('Navigation.Admission.title')}</div>
                        <ChevronRight />
                      </div>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent
                    className={cn(
                      'data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up pl-3 flex flex-col overflow-hidden'
                    )}
                  >
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.Greeting')}</span>
                      </div>
                    </Link>
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.History')}</span>
                      </div>
                    </Link>
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.Vision')}</span>
                      </div>
                    </Link>
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.PhE')}</span>
                      </div>
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible
                  open={isOpen.student}
                  onOpenChange={(open) => setOpen({ ...isOpen, student: open })}
                >
                  <div className="w-full flex items-center">
                    <CollapsibleTrigger className="w-full data-[state=open]:[&_svg]:spin-in-90 data-[state=open]:[&_svg]:animate-in data-[state=open]:[&_svg]:rotate-90 data-[state=closed]:[&_svg]:rotate-0 data-[state=closed]:[&_svg]:animate-out data-[state=closed]:[&_svg]:spin-out-0">
                      <div className={cn(' flex items-center w-full [&_svg]:size-4 py-2')}>
                        <div className="flex-1 text-left text-sm font-medium">{t1('Navigation.Student.title')}</div>
                        <ChevronRight />
                      </div>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent
                    className={cn(
                      'data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up pl-3 flex flex-col overflow-hidden'
                    )}
                  >
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.Greeting')}</span>
                      </div>
                    </Link>
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.History')}</span>
                      </div>
                    </Link>
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.Vision')}</span>
                      </div>
                    </Link>
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.PhE')}</span>
                      </div>
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible
                  open={isOpen.academic}
                  onOpenChange={(open) => setOpen({ ...isOpen, academic: open })}
                >
                  <div className="w-full flex items-center">
                    <CollapsibleTrigger className="w-full data-[state=open]:[&_svg]:spin-in-90 data-[state=open]:[&_svg]:animate-in data-[state=open]:[&_svg]:rotate-90 data-[state=closed]:[&_svg]:rotate-0 data-[state=closed]:[&_svg]:animate-out data-[state=closed]:[&_svg]:spin-out-0">
                      <div className={cn(' flex items-center w-full [&_svg]:size-4 py-2')}>
                        <div className="flex-1 text-left text-sm font-medium">{t1('Navigation.Academic.title')}</div>
                        <ChevronRight />
                      </div>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent
                    className={cn(
                      'data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up pl-3 flex flex-col overflow-hidden'
                    )}
                  >
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.Greeting')}</span>
                      </div>
                    </Link>
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.History')}</span>
                      </div>
                    </Link>
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.Vision')}</span>
                      </div>
                    </Link>
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.PhE')}</span>
                      </div>
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible
                  open={isOpen.research}
                  onOpenChange={(open) => setOpen({ ...isOpen, research: open })}
                >
                  <div className="w-full flex items-center">
                    <CollapsibleTrigger className="w-full data-[state=open]:[&_svg]:spin-in-90 data-[state=open]:[&_svg]:animate-in data-[state=open]:[&_svg]:rotate-90 data-[state=closed]:[&_svg]:rotate-0 data-[state=closed]:[&_svg]:animate-out data-[state=closed]:[&_svg]:spin-out-0">
                      <div className={cn(' flex items-center w-full [&_svg]:size-4 py-2')}>
                        <div className="flex-1 text-left text-sm font-medium">{t1('Navigation.Research.title')}</div>
                        <ChevronRight />
                      </div>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent
                    className={cn(
                      'data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up pl-3 flex flex-col overflow-hidden'
                    )}
                  >
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.Greeting')}</span>
                      </div>
                    </Link>
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.History')}</span>
                      </div>
                    </Link>
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.Vision')}</span>
                      </div>
                    </Link>
                    <Link
                      href={'/'}
                      className="contents"
                    >
                      <div className="w-full flex items-center p-2 hover:bg-neutral-100 rounded-md">
                        <span className="text-sm">{t1('Navigation.Home.PhE')}</span>
                      </div>
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
                <div className={cn(' flex items-center w-full [&_svg]:size-4 py-2')}>
                  <div className="flex-1 text-left text-sm font-medium">{t1('Navigation.Bulletin.title')}</div>
                </div>
              </div>
              <div className="my-3">
                <div className="mb-1 text-sm font-medium text-neutral-500">{t2('Menu.drawer.Languages.title')}</div>
                <LanguageSwitcher />
              </div>
            </div>
          </ScrollArea>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
