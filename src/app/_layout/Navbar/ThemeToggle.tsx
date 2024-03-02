"use client"

import { useEffect, useState } from "react"
import { Button } from "@nextui-org/react"
import { MoonIcon, SunIcon, SunMoonIcon } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, systemTheme, setTheme } = useTheme()
  if (theme !== undefined && theme === systemTheme) setTheme("system")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button isIconOnly variant="light" aria-label="Theme toggle placeholder">
        <SunMoonIcon className="size-[1.2rem]" />
      </Button>
    )
  }

  function toggleTheme() {
    if (theme === "system") {
      setTheme(systemTheme === "light" ? "dark" : "light")
    } else {
      setTheme("system")
    }
  }

  return (
    <Button
      isIconOnly
      variant="light"
      aria-label="Theme toggle"
      onClick={toggleTheme}
    >
      {theme === "light" && <SunIcon className="size-[1.2rem]" />}
      {theme === "dark" && <MoonIcon className="size-[1.2rem]" />}
      {theme === "system" && <SunMoonIcon className="size-[1.2rem]" />}
    </Button>
  )
}
