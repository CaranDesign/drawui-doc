
import { DrawuiButton } from '@carandesign/drawui'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
   const router = useRouter();
   
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
         <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
               Welcome to Draw UI
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
               A small, playful library providing Sketch-like components ready to use out of the box with  <Link className='font-bold' href={"https://roughjs.com"} target='_blank'>Rough JS</Link>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <DrawuiButton size="lg" onClick={()=>router.push("/docs/introduction")}>
                  Explore
               </DrawuiButton>
               <Link href={"https://www.npmjs.com/package/@carandesign/drawui"} target='_blank'>
                  <DrawuiButton size="lg" backgroundColor="#fedd00"> 
                  Install
                  </DrawuiButton>
               </Link>
           </div>

           <div className='size-40 absolute top-20 blur '><img src={"/paperclip.svg"}/></div>
           <div className='size-40 absolute -left-20 bottom-40 md:left-30 lg:left-80 blur-md xl:blur-none'><img src={"/notebook.svg"}/></div>
           <div className='size-10 absolute top-25 lg:top-35 right-0 lg:right-60 rotate-22 animate-bounce'><img src={"icons//floppy-disk-doodle.svg"}/></div>
           <div className='size-40 absolute right-20 lg:right-100 rotate-90 '><img src={"/arrow.svg"}/></div>
           <div className='size-10 absolute  lg:left-300 top-130 md:lg-top-100 md:left-100 lg:top-130 animate-bounce'><img src={"/icons/flower-with-petals.svg"}/></div>
         </div>
      </div>
  )
}
