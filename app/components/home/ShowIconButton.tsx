import {  getRandomColor } from '@/app/lib/GetRandomColor'
import { DrawuiIconButton, IconBell, IconHome, IconMinus, IconPlus, IconSearch, IconSettings, IconUser } from '@carandesign/drawui'

export default function ShowIconButton() {
  return (
       <div className='flex gap-5 flex-wrap items-center'>
        <DrawuiIconButton icon={<IconBell     />} size="sm" backgroundColor={getRandomColor()}  />
        <DrawuiIconButton icon={<IconSearch   />} size="md" backgroundColor={getRandomColor()}  />
        <DrawuiIconButton icon={<IconUser     />} size="lg" backgroundColor={getRandomColor()}  />
        <DrawuiIconButton icon={<IconSettings />} size="xl" backgroundColor={getRandomColor()}  />
        <DrawuiIconButton icon={<IconHome     />} size="sm" backgroundColor={getRandomColor()}  />
        <DrawuiIconButton icon={<IconMinus    />} size="md" backgroundColor={getRandomColor()}  />
        <DrawuiIconButton icon={<IconPlus     />} size="lg" backgroundColor={getRandomColor()}  />
       </div>
   
  )
}
