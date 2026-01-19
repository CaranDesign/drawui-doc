import { DrawuiDivider } from '@carandesign/drawui'
import React from 'react'

export default function MenuIcon() {
  return (
     <div className='flex flex-col gap-2'>
      {[...Array(3)].map((_, index) => (
         <DrawuiDivider key={index} width={30} strokeWeight="thick" />
      ))}
     </div>
  )
}
