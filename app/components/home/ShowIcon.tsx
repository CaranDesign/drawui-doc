import { DrawuiIconButton, IconBell, IconHome, IconMinus, IconPlus, IconSearch, IconSettings, IconUser } from '@carandesign/drawui'

export default function ShowIcon() {
  return (
   <div className='flex gap-5 flex-wrap items-center'>
      <div className='flex flex-col items-center gap-1'>
         <IconBell className='w-6 h-6' />
         <span className='text-xs text-gray-700'>Bell</span>
      </div>
      <div className='flex flex-col items-center gap-1'>
         <IconSearch className='w-6 h-6' />
         <span className='text-xs text-gray-700'>Search</span>
      </div>
      <div className='flex flex-col items-center gap-1'>
         <IconUser className='w-6 h-6' />
         <span className='text-xs text-gray-700'>User</span>
      </div>
      <div className='flex flex-col items-center gap-1'>
         <IconSettings className='w-6 h-6' />
         <span className='text-xs text-gray-700'>Settings</span>
      </div>
      <div className='flex flex-col items-center gap-1'>
         <IconHome className='w-6 h-6' />
         <span className='text-xs text-gray-700'>Home</span>
      </div>
      <div className='flex flex-col items-center gap-1'>
         <IconMinus className='w-6 h-6' />
         <span className='text-xs text-gray-700'>Minus</span>
      </div>
      <div className='flex flex-col items-center gap-1'>
         <IconPlus className='w-6 h-6' />
         <span className='text-xs text-gray-700'>Plus</span>
      </div>
   </div>
  )
}
