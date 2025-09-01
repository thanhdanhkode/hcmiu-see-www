import Link from './Link'
import { NavigationMenuLink } from './ui/navigation-menu'

interface INavigationMenuItem {
  href: string
  title: string
}

export const NavigationMenuLocalizedLink = ({ href, title }: INavigationMenuItem) => {
  return (
    <Link
      href={href}
      legacyBehavior
      passHref
    >
      <NavigationMenuLink>{title}</NavigationMenuLink>
    </Link>
  )
}
