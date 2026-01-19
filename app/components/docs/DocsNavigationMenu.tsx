'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { DrawuiCard, DrawuiDivider } from '@carandesign/drawui'
import docs from '../../content/docs/docs.json'

interface DocsNavProps {
  toggleDrawer?: () => void
}

export default function DocsNavigationMenu({toggleDrawer}:DocsNavProps) {
  const pathname = usePathname() 

  return (
    <div className='p-2 max-w-md sm:max-w-full overflow-x-scroll max-w-70'>
      <DrawuiCard backgroundColor='#f3fcfdff' width={260} fillStyle='hachure' strokeWeight='medium'>
        {docs.sections.map((section, index) => (
          <div className='p-3' key={index}>
            <span className='font-bold'>{section.label}</span>

            {section.items.map((item) => {
              const isActive = item.path === pathname
              return (
                <div key={item.id}>
                  <Link className='cursor-pointer' href={item.path} onClick={toggleDrawer}>
                    <div className='ml-2 text-black/70'>
                      {item.label}
                    </div>
                  </Link>
                  {isActive && (
                    <DrawuiDivider
                      width={150}
                      strokeWeight='thick'
                    />
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </DrawuiCard>
    </div>
  )
}
