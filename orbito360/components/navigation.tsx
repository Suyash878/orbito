"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navigation() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact us", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">
      <nav className="container flex items-center justify-between h-20">
        <Link href="/" className="font-bold text-2xl">
          ORBITO<span className="text-blue-500">360</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm hover:text-blue-400 transition-colors ${
                index === 0 ? 'text-blue-500' : 'text-gray-300'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg hover:text-blue-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

