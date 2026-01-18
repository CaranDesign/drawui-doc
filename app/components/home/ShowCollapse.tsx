import { getRandomColor } from '@/app/lib/GetRandomColor'
import { DrawuiCard, DrawuiCollapse } from '@carandesign/drawui'


export default function ShowCollapse() {
   
   const sizes = [200, 150, 300]

  return (
     <div className='flex gap-5 flex-wrap justify-center'>
        {
           sizes.map((width,index) => (
              <DrawuiCollapse
                  className='cursor-pointer'     
                  key={width=index}
                  width={width}
                  header={
                     <span>Click me.</span>
                  }
               >
                  <DrawuiCard className='mt-3' width={width} backgroundColor={getRandomColor()}>
                     Content in a Card
                  </DrawuiCard>
            </DrawuiCollapse>
           ))
         }
     </div>
  )
}
