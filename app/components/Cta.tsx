'use client'

import { useEffect, useState } from "react";
import { useWindowWidthContext } from "../context/ContextScreenSize";
import { DrawuiButton, DrawuiCard } from "@carandesign/drawui";
import Link from "next/link";

export default function Cta() {
     const screenWidth = useWindowWidthContext()
     
     const [mounted, setMounted] = useState(false);
     const [show, setShow] = useState(false);
     
     //needed for rendering correct width after page loading
     useEffect(() => {
       setMounted(true)
     }, [])


  return (
     <DrawuiCard width={800} backgroundColor="#fbf2b6ff">
         <div className="flex flex-col gap-5 items-center p-10 ">
           <div className="flex gap-2 justify-center flex-wrap">
               Enjoying this project? Drop a <img src={"/icons/draw-star.svg"} className="w-5"/> on GitHub and let me know what you think!
           </div>
           <Link href="https://github.com/CaranDesign/drawui" target="_blank"><DrawuiButton size="lg" backgroundColor="#ffffff" fillStyle="solid" > Rate on GitHub </DrawuiButton></Link>
         </div>
     </DrawuiCard>
  )
}
