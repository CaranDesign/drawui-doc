import React from 'react'
import Link from "next/link"

export default function Logo() {
  return (
      <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
        <img src={"./logo.png"} width='100'/>
      </Link>
  )
}
