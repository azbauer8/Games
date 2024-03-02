"use client"

import { siteConfig } from "@/config"
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  link as linkStyles,
} from "@nextui-org/react"
import clsx from "clsx"
import { ChevronDownIcon } from "lucide-react"
import Image from "next/image"
import NextLink from "next/link"
import { usePathname } from "next/navigation"

import { ThemeToggle } from "@/app/_layout/Navbar/ThemeToggle"
import { useWindowScroll } from "@uidotdev/usehooks"
import navItems from "./navItems"

export default function Navbar() {
  const path = usePathname()
  const [{ y }] = useWindowScroll()
  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      isBlurred={false}
      classNames={{
        base: "bg-transparent",
        wrapper: `transition-all ease-in-out duration-300 rounded-3xl ${
          y && y > 50
            ? "mt-1 mx-2.5 bg-default/40 dark:bg-default/20 backdrop-blur-2xl shadow-lg"
            : "bg-transparent"
        }`,
      }}
    >
      <NavbarContent as="div" justify="start">
        <DesktopNavLinks />
        <MobileNavLinks />
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <ThemeToggle />
      </NavbarContent>
    </NextUINavbar>
  )

  function DesktopNavLinks() {
    return (
      <div className="hidden gap-4 md:flex">
        <NavbarBrand>
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <Image
              src={siteConfig.favicon}
              priority
              width={20}
              height={20}
              alt="Site logo"
            />
            <p className="font-bold">{siteConfig.title}</p>
          </NextLink>
        </NavbarBrand>

        <div className="space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              href={item.href}
              as={Link}
              variant={path === item.href ? "flat" : "light"}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    )
  }

  function MobileNavLinks() {
    return (
      <Dropdown>
        <DropdownTrigger className="flex -translate-x-3 md:hidden">
          <Button variant="light">
            <NavbarBrand>
              <div className="flex items-center justify-start gap-1">
                <Image
                  src={siteConfig.favicon}
                  priority
                  width={20}
                  height={20}
                  alt="Site logo"
                />
                <p className="font-bold">{siteConfig.title}</p>
              </div>
            </NavbarBrand>
            <ChevronDownIcon size={20} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          {navItems.map((item) => (
            <DropdownItem
              key={item.href}
              as={Link}
              href={item.href}
              className={clsx(
                "w-full",
                path === item.href && "bg-default",
                linkStyles({ color: "foreground" }),
              )}
            >
              {item.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    )
  }
}
