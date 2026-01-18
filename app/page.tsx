'use client'
import { useEffect, useLayoutEffect, useState } from "react";

import { DrawuiButton, DrawuiDivider } from "@carandesign/drawui";
import ComponentShow from "./components/home/ComponentShow";
import HeroSection from "./components/home/HeroSection";
import { useWindowWidthContext } from "./context/ContextScreenSize";

export default function App() {
  const screenWidth = useWindowWidthContext()
  
  const [mounted, setMounted] = useState(false)

  //needed for rendering correct width after page loading
  useLayoutEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-dotted">
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
    </div>
  );
}
