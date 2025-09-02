'use client'

import Link from '@/components/Link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { useRouter } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'

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
  const locale = useLocale()
  const t = useTranslations('Header')
  const router = useRouter()
  return (
    <NavigationMenu
      viewport={false}
      className="relative z-50"
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="bg-transparent"
            onClick={() => router.replace('/', { locale })}
          >
            Trang chủ
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-100 lg:grid-cols-[.75fr_0.05fr_1fr]">
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
                    <span className="text-xs leading-4">School of</span>
                    <span className="text-sm leading-5 text-nowrap">Electrical Engineering</span>
                  </div>
                </NavigationMenuLink>
              </li>
              <li className="row-span-4">
                <div className="w-px h-full bg-muted m-auto"></div>
              </li>
              <ListItem
                variant={'title'}
                href=""
                title="Lời chào Trường khoa"
              />
              <ListItem
                variant={'title'}
                href=""
                title="Lịch sử hình thành & phát triển"
              />
              <ListItem
                variant={'title'}
                href=""
                title="Tầm nhìn & Sứ mệnh"
              />
              <ListItem
                variant={'title'}
                href=""
                title="Triết lí giáo dục"
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">Tuyển sinh</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max">
              <ListItem href="/admission/info/latest">Thông tin tuyển sinh 2025</ListItem>
              <ListItem href="/admission/university/ee">Kỹ thuật Điện tử - Viễn thông</ListItem>
              <ListItem href="/admission/university/ac">Kỹ thuật Điều khiển - Tự động hóa</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">Sinh viên</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max">
              <ListItem href="/students/academic-advisor">Cố vấn học tập</ListItem>
              <ListItem href="/students/academic-advisor">Sổ tay sinh viên</ListItem>
              <ListItem href="/students/academic-advisor">Đời sống sinh viên</ListItem>
              <ListItem href="/students/academic-advisor">Câu lạc bộ</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">Đào tạo</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max">
              <ListItem href="/students/academic-advisor">Đại học</ListItem>
              <ListItem href="/students/academic-advisor">Sau đại học</ListItem>
              <ListItem href="/students/academic-advisor">Hỗ trợ</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">Nghiên cứu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max">
              <ListItem href="/students/academic-advisor">Phòng thí nghiệm</ListItem>
              <ListItem href="/students/academic-advisor">Xưởng Cơ - Điện</ListItem>
              <ListItem href="/students/academic-advisor">Chuyển giao công nghệ</ListItem>
              <ListItem href="/students/academic-advisor">Công bố khoa học</ListItem>
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
                <span>Bảng tin</span>
              </div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
