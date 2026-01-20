'use client'
import { useLayoutEffect, useState } from "react";

import { useWindowWidthContext } from "./context/ContextScreenSize";
import ComponentShow from "./components/home/ComponentShow";
import HeroSection from "./components/home/HeroSection";
import { DrawuiDivider } from "@carandesign/drawui";
import Cta from "./components/Cta";

export default function App() {
  const screenWidth = useWindowWidthContext()
  
  const [mounted, setMounted] = useState(false)

  //needed for rendering correct width after page loading
  useLayoutEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="">
        <HeroSection/>
      </section>

      <div className="wid-100 flex flex-col items-center">
        <DrawuiDivider width={screenWidth} strokeWeight="thick"/>
      </div>
      
      {/* Masonry Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ComponentShow/>
      </section>

      <section className="w-full flex items-center justify-center">
        <Cta/>
      </section>
    </div>
  );
}
