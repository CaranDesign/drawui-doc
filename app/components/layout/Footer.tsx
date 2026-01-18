'use client'

import { useEffect, useLayoutEffect, useState } from "react"
import PrimaryNavigation from "../PrimaryNavigation"
import { useWindowWidthContext } from "@/app/context/ContextScreenSize"
import { DrawuiCard } from "@carandesign/drawui"
import Link from "next/link"

export default function Footer() {
  
    const screenWidth = useWindowWidthContext()
    
    const [mounted, setMounted] = useState(false)
  
    //needed for rendering correct width after page loading
    useEffect(() => {
      setMounted(true)
    }, [])
  
  if (!mounted) return null
  
  const year = new Date().getFullYear()
  return (
    <footer className="dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-12">
      <DrawuiCard width={screenWidth} height={65}>
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {year} DrawUI is released on MIT license - made by <Link target="_blank" className="cursor-pointer" href={"https://www.caran.it"}>Caran Design</Link></p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <PrimaryNavigation/>
          </div>
        </div>
      </DrawuiCard>
    </footer>
  )
}
