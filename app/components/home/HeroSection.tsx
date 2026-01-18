
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
            <DrawuiButton size="lg" onClick={()=>router.push("/docs")}>
               Explore
            </DrawuiButton>
            <Link href={"https://www.npmjs.com/package/@carandesign/drawui"} target='_blank'>
               <DrawuiButton size="lg" backgroundColor="#fedd00"> 
               Install
               </DrawuiButton>
            </Link>
         </div>
         </div>
      </div>
  )
}
