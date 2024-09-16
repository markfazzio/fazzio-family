'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from '@nextui-org/react'
import FazzioFamilyLogo from './FazzioFamilyLogo'

import { usePathname } from 'next/navigation'

export default function NavigationBar() {
  const pathname = usePathname()

  return (
    <Navbar className="jacqui-green ">
      <NavbarBrand className="grow-0">
        <a href="/">
          <FazzioFamilyLogo />
        </a>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10 flex-1" justify="center">
        <Dropdown>
          <NavbarItem isActive={pathname.includes('family-tree')}>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 text-medium bg-transparent data-[hover=true]:bg-transparent"
                // endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Family Tree
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Family Members"
            className="w-[340px]"
            itemClasses={{
              base: 'gap-4',
            }}
          >
            <DropdownItem
              key="bencivenga-tree"
              href="/family-tree/bencivenga"
              description={`The surname Bencivenga is a well-wishing or omen name that means "God bless us". It's made up of the words bene meaning "well", ci meaning "to us", and venga meaning "come".`}
              // startContent={icons.scale}
            >
              Bencivenga
            </DropdownItem>
            <DropdownItem
              key="fazzio-tree"
              href="/family-tree/fazzio"
              description="The surname Fazzio was first found in Genoa (Italian: Genova), a port on the Gulf of Genoa, capital of the province of Genoa. 4th century B.C it was occupied by the Greeks, destroyed by the Carthaginians in 209 B.C and restored by Rome who made it their headquarters."
              // startContent={icons.activity}
            >
              Fazzio
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive={pathname.includes('calendar')}>
          <Link color="foreground" href="/calendar" aria-current="page">
            Calendar
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname.includes('blog')}>
          <Link color="foreground" href="/blog">
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  )
}
