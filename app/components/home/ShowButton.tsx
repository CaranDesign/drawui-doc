import { DrawuiButton, DrawuiIconButton, IconSearch } from '@carandesign/drawui'
import React from 'react'

export default function ShowButton() {
  return (
     <div className='flex flex-wrap gap-5 justify-center items-center'>
         <DrawuiButton backgroundColor='transparent'> Click Me. </DrawuiButton>
         <DrawuiIconButton icon={<IconSearch/>} backgroundColor='rgba(216, 187, 187, 1)'/>
         <DrawuiButton strokeWeight='thick' size='md' backgroundColor='#73a4a6ff' > I`m Colored </DrawuiButton>
     </div>
  )
}
