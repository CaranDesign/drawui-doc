import Link from 'next/link'


interface NavProps {
  toggleDrawer?: () => void
}


export default function PrimaryNavigation({toggleDrawer}:NavProps) {
  return (
    <nav className="space-x-4 flex-col md:flex-row flex flex-wrap">
      <div>
         <Link onClick={toggleDrawer} href="/docs/introduction" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            Docs
         </Link>
      </div>
      <div>
         <Link onClick={toggleDrawer} href="/changelog" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            Changelog
         </Link>
      </div>
      <div>
         <Link onClick={toggleDrawer} href="https://roughjs.com" target='_blank' className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            Rough.JS
         </Link>
      </div>
      <div>
         <Link onClick={toggleDrawer} href="https://www.npmjs.com/package/@carandesign/drawui" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            NPM
         </Link>
      </div>
   </nav>
  )
}
