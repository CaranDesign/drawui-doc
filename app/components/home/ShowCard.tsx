import { getRandomColor } from '@/app/lib/GetRandomColor'
import { DrawuiButton, DrawuiCard, DrawuiIconButton, IconUser } from '@carandesign/drawui'
import React from 'react'

export default function ShowCard() {
  return (
    <>
        <div className='flex flex-wrap gap-5 justify-center items-center'>
           <DrawuiCard width={200} height={150} backgroundColor='transparent' radius='none'></DrawuiCard>
           
           <DrawuiCard className='flex justify-center items-center' width={200} height={100} backgroundColor={getRandomColor()} radius='lg'>
              <div className='w-auto h-auto items-center flex h-full'>With Some Text</div>
           </DrawuiCard>
           
           <DrawuiCard
              className='flex justify-center items-center'
              width={170}
              height={120}
              backgroundColor={getRandomColor()}
              radius='full'
           >
              <div className='w-auto h-auto items-center flex h-full'>With More Radius</div>
           </DrawuiCard>
           
           <DrawuiCard
              className='flex justify-center items-center'
              width={200}
              height={160}
              backgroundColor={getRandomColor()}
              radius='md'
           >
              <div className='w-auto h-auto items-center flex h-full'>Custom size</div>
           </DrawuiCard>
        </div>

        With Header and Footer
        <div className='flex flex-wrap gap-5 items-center justify-center'>
           <DrawuiCard
              header={
               <div className='p-2'><DrawuiButton>Click me.</DrawuiButton></div>
              }
              footer={
                 <div className='p-2'><DrawuiIconButton icon={<IconUser/> } /></div>
              }
              width={400}
              height={250}
              backgroundColor='transparent'
              radius='md'
           >
            Some Body
           </DrawuiCard>

           <DrawuiCard
              header={
               <div className='p-2'><DrawuiButton>Click me.</DrawuiButton></div>
              }
           
              width={300}
              height={220}
              backgroundColor={getRandomColor()}
              radius='md'
           >
            No Footer and Custom Sizes
           </DrawuiCard>

        </div>
    </>
  )
}
