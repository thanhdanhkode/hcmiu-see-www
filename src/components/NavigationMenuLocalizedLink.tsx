import Link from './Link'
import { NavigationMenuLink, NavigationMenuTrigger } from './ui/navigation-menu'

interface INavigationMenuItem {
  href: string
  title: string
}

export const NavigationMenuLocalizedLink = ({ href, title }: INavigationMenuItem) => {
  return (
    <Link
      href={href}
      passHref
    >
      <NavigationMenuLink>{title}</NavigationMenuLink>
    </Link>
  )
}
