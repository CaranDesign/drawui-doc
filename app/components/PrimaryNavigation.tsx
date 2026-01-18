import Link from 'next/link'
import React from 'react'

export default function PrimaryNavigation() {
  return (
    <nav className="space-x-4 hidden md:flex">
      <Link href="/docs" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
         Docs
      </Link>
      <Link href="/changelog" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
         Changelog
      </Link>
      <Link href="https://www.npmjs.com/package/@carandesign/drawui" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
         NPM
      </Link>
      </nav>
  )
}
