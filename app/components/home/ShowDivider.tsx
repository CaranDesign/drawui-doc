import { DrawuiDivider } from '@carandesign/drawui'

export default function ShowDivider() {
  return (
     <div className='flex flex-col gap-5 items-center'>
         <DrawuiDivider width={200}/>
         <DrawuiDivider width={300} strokeWeight='thick'/>
         <DrawuiDivider width={100} strokeWeight='medium' />
        
        Vertical Divider
        <div className='flex gap-5 items-center'>
            <DrawuiDivider width={100} strokeWeight='medium' vertical/>
            <DrawuiDivider width={50} strokeWeight='thick' vertical/>
            <DrawuiDivider width={70} strokeWeight='medium' vertical/>
            <DrawuiDivider width={100} strokeWeight='thick' vertical/>
        </div>
     </div>
  )
}
