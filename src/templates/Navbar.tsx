import { NavigationMenuLocalizedLink } from '@/components/NavigationMenuLocalizedLink'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
  NavigationMenuIndicator,
} from '@/components/ui/navigation-menu'
// import { Link } from '@/i18n/navigation'
// import Link from 'next/link'
import Link from '@/components/Link'

export const Navbar = () => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Trang chủ</NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tuyển sinh</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max gap-3">
              <li className="w-full">
                <NavigationMenuLink asChild>
                  <Link href={'/admission/info/latest'}>
                    <div className="flex items-center">
                      <span>Thông tin tuyển sinh 2025</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="w-full">
                <NavigationMenuLink asChild>
                  <Link href={'/admission/university/ee'}>
                    <div className="flex items-center">
                      <span>Kỹ thuật Điện tử - Viễn thông</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="w-full">
                <NavigationMenuLink asChild>
                  <Link href={'/admission/university/ac'}>
                    <div className="flex items-center">
                      <span>Kỹ thuật Điều khiển - Tự động hóa</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sinh viên</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max gap-3">
              <li>
                <NavigationMenuLink asChild>
                  <Link href={'/students/academic-advisor'}>
                    <div className="flex items-center">
                      <span>Cố vấn học tập</span>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuIndicator className="bg-violet-700" /> */}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
