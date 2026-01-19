'use client'

import Logo from "./Logo"
import PrimaryNavigation from "../PrimaryNavigation"
import { DrawuiCard, DrawuiIconButton } from "@carandesign/drawui"
import { useWindowWidthContext } from "@/app/context/ContextScreenSize"
import { useState, useLayoutEffect } from "react"
import MenuIcon from "./MenuIcon"
import DocsNavigationMenu from "../docs/DocsNavigationMenu"

export default function Header() {
  const screenWidth = useWindowWidthContext()
  
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  
  //needed for rendering correct width after page loading
  useLayoutEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleDrawer = () => {
    setShow(!show);
  }

  return (
   <>
      <header className="shadow-md top-0 z-50 sticky top-0 bg-white/100">
        <DrawuiCard width={screenWidth} height={65} backgroundColor="rgba(242, 242, 242, 1)">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              
              <div onClick={toggleDrawer} className="md:hidden cursor-pointer">
                <MenuIcon />
              </div>
  
              <Logo />
              <div className="hidden md:flex"><PrimaryNavigation /></div>
            </div>
          </div>
        </DrawuiCard>
      </header>

      <div className={`p-2 px-5 flex flex-col gap-3 drawui-drawer w-screen h-screen bg-white fixed z-1000 top-0 overflow-x-hidden overflow-y-scroll ${show ? 'block' : 'hidden' }`}>
        <div onClick={toggleDrawer}>
          <DrawuiIconButton icon={"X"} radius="lg" />
        </div>

        <Logo toggleDrawer={toggleDrawer}/>

        <span className="font-bold text-lg">Menu</span>
        <PrimaryNavigation toggleDrawer={toggleDrawer}/>
        <span className="font-bold text-lg">Docs</span>
        <DocsNavigationMenu toggleDrawer={toggleDrawer}/>
      </div>
   </>
  )
}
