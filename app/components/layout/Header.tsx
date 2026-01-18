'use client'

import Logo from "./Logo"
import PrimaryNavigation from "../PrimaryNavigation"
import { DrawuiCard } from "@carandesign/drawui"
import { useWindowWidthContext } from "@/app/context/ContextScreenSize"
import { useState, useLayoutEffect } from "react"

export default function Header() {
  const screenWidth = useWindowWidthContext()
  
  const [mounted, setMounted] = useState(false)

  //needed for rendering correct width after page loading
  useLayoutEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="shadow-md top-0 z-50 sticky top-0 bg-white/100">
      <DrawuiCard width={screenWidth} height={65} backgroundColor="rgba(242, 242, 242, 1)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />
            <PrimaryNavigation />
            <div className="md:hidden">{/* Drawer/menu mobile */}</div>
          </div>
        </div>
      </DrawuiCard>
    </header>
  )
}
